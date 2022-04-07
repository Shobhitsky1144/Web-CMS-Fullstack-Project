const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
app.use(cors());
dotenv.config({ path: "./config.env" });
// const fileUpload = require("express-fileupload");

require("./db/conn");
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
app.use(express.json());
const path = require("path");

// app.use(fileUpload());
app.use(
  "/public",
  express.static(path.join(__dirname, "public/image/portfolio"))
);
app.use(
  "/public",
  express.static(path.join(__dirname, "public/image/casestudy"))
);

// link routers
app.use(require("./router/portfolioroute"));
app.use(require("./router/casestudyroute"));
app.use(require("./router/sendmailroute"));
app.use(require("./router/adminloginroute"));

const PORT = process.env.PORT;

app.get("/server", (req, res) => res.send("hello server"));
app.listen(PORT, () => {
  console.log(`App is running at port: ${PORT}`);
});
