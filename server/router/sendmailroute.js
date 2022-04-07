const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

router.post("/api/sendMail", async (req, res) => {
  console.log(req.body);
  const { fullName, email, mobile, subject, message } = req.body;

  let transporter = nodemailer.createTransport({
    service: "gmail",

    auth: {
      user: "stallioncx@gmail.com",
      pass: "Nsspl@1234",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
  let data = {
    from: email,
    to: "stallioncx@gmail.com",
    cc: "shobhit@nssplindia.com",
    subject: "Contact Us Form -- NSSPL",
    html: `<h4>Visitor Details</h4>Visitor Name : ${fullName}<br/>${
      subject !== null ? `Visitor subject : ${subject}<br/>` : ``
    }Visitor email id : ${email}<br/>Visitor contact :
                    ${mobile}<br/>${
      message !== null ? `Visitor message : ${message}` : ""
    }`,
  };

  await transporter.sendMail(data, (error, data) => {
    if (error) {
      res.status(422).json({ error: "Form Submit failed" });
    } else {
      console.log("Mail sent", data);
      res.status(201).json({
        message: "Thank you! For contacting us.We'll get back to you shortly",
      });
    }
  });
});
module.exports = router;
