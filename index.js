const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const cors = require("cors");
const midtransClient = require("midtrans-client");
const publicIp = require('public-ip');
const internalIp = require('internal-ip');
const admin = require('firebase-admin');
const serviceAccount = require('./helloworld/zwalleet-1337-firebase-adminsdk-7hhof-036fe161da.json')
const db = require('./src/helper/db')


const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);



// const db = require("./src/helper/db");
const AuthRoute = require("./src/routes/Auth");
const UserRoute = require("./src/routes/User");
const TransactionRoute = require("./src/routes/Transaction");
const TopupRoute = require("./src/routes/Topup");

app.use('*',cors()); // WAJIB DI ISI

// io.on('connection', socket => {
//   console.log('user connect')
// 
//   setTimeout(socket.on('getId', id  => { 
//     if(id){
//       socket.join(id)
//       console.log('datanya adalah ini : ', id)
//       db.query(`SELECT balance FROM user WHERE id = ${id}`, (err, res) => {
//         io.to(id).emit('get-data', res[0].balance)
//         console.log(res[0].balance)
//       });      
//     }
//   }), 0)
// 
//   socket.on('disconnect', () => {
//     console.log('user disconnect')
//   })
// })


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/images", express.static("images"));

app.get("/", (req, res) => res.send("<h2> Success </h2>"));

app.use("/zwallet/api/v1/auth", AuthRoute);
app.use("/zwallet/api/v1/user", UserRoute);
app.use("/zwallet/api/v1/transaction", TransactionRoute);
app.use("/zwallet/api/v1/topup", TopupRoute);






server.listen(process.env.PORT, () => {
admin.initializeApp({
	credential : admin.credential.cert(serviceAccount),
	databaseURL : 'https://zwalleet-1337.firebaseio.com'
});





});
