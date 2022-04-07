const express = require("express");
const router = express.Router();
const multer = require("multer");

require("../db/conn");
const Portfolio = require("../model/portfolioSchema");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/image/portfolio");
  },
  filename: function (req, file, cb) {
    console.log("file", file);
    cb(null, Date.now() + file.originalname);
  },
});
const upload = multer({ storage: storage });
const host = process.env.HOST;

router.post("/api/addPortfolio", upload.single("image"), (req, res) => {
  console.log("body", req.body);
  console.log("req", req.file);
  const image = `${host}/${req.file.filename}`;

  const { heading, description, expertise, verticals, technologies } = req.body;
  const tech = JSON.parse(technologies);
  const vert = JSON.parse(verticals);
  const exper = JSON.parse(expertise);
  if (!heading || !description || !expertise || !verticals || !technologies) {
    return res.status(422).json({ error: "Please fill the field properly" });
  }

  const portfolio = new Portfolio({
    image,
    heading,
    description,
    expertise: exper,
    verticals: vert,
    technologies: tech,
  });
  portfolio
    .save()
    .then(() => {
      res.status(201).json({ message: "data added successfully" });
    })
    .catch((err) => res.status(500).json({ error: "data failed" }));
});

router.get("/api/getAllPortfolio", async (req, res) => {
  try {
    const allPortfolios = await Portfolio.find({});
    res.status(201).send(allPortfolios);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

module.exports = router;
