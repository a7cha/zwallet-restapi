const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const cors = require("cors");
const midtransClient = require("midtrans-client");
const publicIp = require('public-ip');
const internalIp = require('internal-ip');
const admin = require('firebase-admin');
const serviceAccount = require('./helloworld/zwalleet-1337-firebase-adminsdk-7hhof-036fe161da.json')

const app = express();
// const db = require("./src/helper/db");
const AuthRoute = require("./src/routes/Auth");
const UserRoute = require("./src/routes/User");
const TransactionRoute = require("./src/routes/Transaction");
const TopupRoute = require("./src/routes/Topup");

app.use(cors()); // WAJIB DI ISI

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/images", express.static("images"));

app.get("/", (req, res) => res.send("<h2> Success </h2>"));

app.use("/zwallet/api/v1/auth", AuthRoute);
app.use("/zwallet/api/v1/user", UserRoute);
app.use("/zwallet/api/v1/transaction", TransactionRoute);
app.use("/zwallet/api/v1/topup", TopupRoute);





app.listen(process.env.PORT, () => {
admin.initializeApp({
	credential : admin.credential.cert(serviceAccount),
	databaseURL : 'https://zwalleet-1337.firebaseio.com'
}, console.log(admin.credential.cert(serviceAccount)));


const registrationToken = 'cVmVqUHCRT-hVq75otPmT5:APA91bH7u_cDF8rK5XWvKjCzUrfcYT6FJdaGEg4yWzCVzFqVLCIVcOklTHFnOhTpAsAAW0beEDbM-OzEr4IEJyfTh9L9C4ckQ0pfSwknHUyKhV9lcqyG5KTdr02g75QWgSksCkSLd4MW'

var payload = {
  notification: {
    title: 'Zwallet',
    body: '$FooCorp gained 11.80 points to close at 835.67, up 1.43% on the day.'
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

  (async () => {
    const getpub = await publicIp.v4()
    const getloc = await internalIp.v4()
    console.log(`Server running server ip http://${getpub}:${process.env.PORT}/`);
    console.log(`Server running local development ip http://${getloc}:${process.env.PORT}/`);
	})();
});
