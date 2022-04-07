const express = require("express");
const router = express.Router();

router.post("/api/adminLogin", async (req, res) => {
  // console.log("kkk");
  // res.send("hh");
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(422).json({ error: "Please fill the field" });
  }
  if (email === "info@nssplindia.com" && password === "nssplindia@123") {
    await res.status(201).json({ message: "Login Successfull" });
  } else {
    res.status(422).json({ error: "Invalid User" });
  }
});
module.exports = router;
