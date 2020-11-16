const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const cors = require("cors");
const midtransClient = require("midtrans-client");
const publicIp = require('public-ip');

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
  
  (async () => {
    const getIp = await publicIp.v4()
    console.log(`Server running on ${getIp} port ${process.env.PORT}`);
	})();
});
