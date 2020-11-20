const transactionModel = require("../model/Transaction");
const formResponse = require("../helper/formResponse");
const transactionRoutes = require("../routes/Transaction");
const jwt = require("jsonwebtoken");
const { checkToken } = require("../helper/middleware");
const admin = require('firebase-admin');


module.exports = {
  transactionDetail: async function (req, res) {
    try {
      const token = req.token;
      const [income, outcome, transactionDetail] = await Promise.all([
        transactionModel.income(token),
        transactionModel.outcome(token),
        transactionModel.transactionDetail(token),
      ]);
      const result = {
        income: income,
        outcome: outcome,
        data: transactionDetail,
      };
      if (transactionDetail.length > 0) {
        // console.log(result);
        res.status(200).send({
          success: true,
          message: "success get data",
          data: result,
        });
      } else {
        formResponse([], res, 400, "There is no transaction log");
      }
    } catch (error) {
      formResponse([], res, 500, error.message);
    }
  },
  transactionHistory: async function (req, res) {
    try {
      const token = req.token;
      const dateStart = req.header("start");
      const until = req.header("until");
      // console.log(dateStart, until);
      const [inWeek, inMonth, outWeek, outMonth, transactionDetail] = await Promise.all([
        transactionModel.transactionHistoryInWeek(token),
        transactionModel.transactionHistoryInMonth(token),
        transactionModel.transactionHistoryOutWeek(token),
        transactionModel.transactionHistoryOutMonth(token),
        transactionModel.transactionDetail(token, dateStart, until),
      ]);
      const result = {
        inWeek: inWeek,
        inMonth: inMonth,
        outWeek: outWeek,
        outMonth: outMonth,
        data: transactionDetail,
      };
      if (transactionDetail.length > 0) {
        // console.log(result);
        res.status(200).send({
          success: true,
          message: "success get data",
          data: result,
        });
      } else {
        formResponse([], res, 400, "There is no transaction log");
      }
    } catch (error) {
      formResponse([], res, 500, error.message);
    }
  },
  getAll: async function (req, res) {
    try {
      // const token = req.token;

      const result = await transactionModel.transactionAll();
      if (result.length > 0) {
        // console.log(result);
        res.status(200).send({
          success: true,
          message: "success get data",
          data: result,
        });
      } else {
        formResponse([], res, 400, "There is no transaction log");
      }
    } catch (error) {
      formResponse([], res, 500, error.message);
    }
  },
  createTransfer: async function (req, res) {
    try {
      const token = req.token;
      const id = await transactionModel.getMaxId();

      const receiver = req.body.receiver;
      const status = req.body.status;
      const amountTransfer = req.body.amountTransfer;
      const note = req.body.note;
      const balanceLeft = req.body.balanceLeft;
      const pin = req.body.pin

      const sender = req.body.sender
      const deviceToken = req.body.device_token



      const data = { ...id[0], sendBy: token.id, receiver, status, amountTransfer, note, balanceLeft, pin};
      const contoh = status
      const getpin = parseInt(data.pin);
      const checkPin = await transactionModel.checkPin(token.id, getpin);
      if (checkPin.length > 0) {
        delete data.pin;
        await transactionModel.addBalance(data.receiver, data.amountTransfer);
        await transactionModel.updateBalance(token.id, data.balanceLeft);
        delete data.balanceLeft;
        const result = await transactionModel.createTransaction(data);
        if (result.affectedRows > 0) {

          const registrationToken = deviceToken

          const payload = {
            notification: {
              title: 'Zwallet',
              body: `you just receive money from ${sender} as much as ${amountTransfer}`
            }            
          };

          admin.messaging().sendToDevice(registrationToken, payload)
            .then(function(response) {
              // See the MessagingDevicesResponse reference documentation for
              // the contents of response.
              console.log('Successfully sent message:', response);
            })
            .catch(function(error) {
              console.log('Error sending message:', error);
            });          
            
          res.status(200).send({
            message: "Success Create Transaction",
            data: data,
          });


        } else {
          formResponse([], res, 400, "Fill with the right type of value");
        }
      } else {
        formResponse([], res, 400, "Wrong Pin");
      }
    } catch (error) {
      formResponse([], res, 500, error.message);
    }
  },
  editTransfer: async function (req, res) {
    try {
      const { id } = req.query;
      const data = req.body;
      const result = await transactionModel.editTransaction(id, data);
      if (result.affectedRows > 0) {
        res.status(200).send({
          message: "Success Create Transaction",
          data: data,
        });
      } else {
        formResponse([], res, 400, "Failed Edit Transfer Data");
      }
    } catch (error) {
      formResponse([], res, 500, error.message);
    }
  },
  deleteTransfer: async function (req, res) {
    try {
      const id  = req.query;
      const result=await transactionModel.deleteTransaction(id.id);
      if (result.affectedRows > 0) {
        res.status(200).send({
          message: "Success Delete Transaction"
        });
      } else {
        formResponse([], res, 400, "Failed Delete Transfer Data");
      }
    } catch (error) {
      res.status(500).send({
        message: error.message,
      });
    }
  },
//   notifTransfer : async function (req, res) {
//     try{
//       const {sender, receiver , amount, device_token} = req.body;
//       const registrationToken = device_token
// 
//       var payload = {
//         notification: {
//           title: 'Zwallet',
//           body: '$FooCorp gained 11.80 points to close at 835.67, up 1.43% on the day.'
//         }      
//       }
//     }
//   }
};
