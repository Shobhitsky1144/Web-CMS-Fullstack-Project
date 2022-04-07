const express = require("express");
const router = express.Router();
const multer = require("multer");

require("../db/conn");

const CaseStudy = require("../model/CaseStudySchema");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/image/casestudy");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});
const upload = multer({ storage: storage });
const host = process.env.HOST;

router.post("/api/addCaseStudy", upload.single("image"), (req, res) => {
  const { heading, description, technologies } = req.body;
  console.log("rq", req.body);
  const tech = JSON.parse(technologies);

  // console.log(req.body);
  // console.log(req.file);
  const image = `${req.file.filename}`;

  if (!heading || !description || !technologies) {
    return res.status(422).json({ error: "Please fill the field properly" });
  }

  const caseStudy = new CaseStudy({
    image,
    heading,
    description,

    technologies: tech,
  });
  caseStudy
    .save()
    .then(() => {
      res.status(201).json({ message: "data added successfully" });
    })
    .catch((err) => res.status(500).json({ error: "data failed" }));
});

router.get("/api/getAllCaseStudy", async (req, res) => {
  try {
    const allCaseStudy = await CaseStudy.find({}, [
      "image",
      "heading",
      "technologies",
    ]);
    // allCaseStudy.map(({ image }) => `${host}/${image}`);
    for (let data of allCaseStudy) {
      data.image = `${host}/${data.image}`;
    }
    res.status(201).send(allCaseStudy);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

router.post("/api/caseStudyDetails", async (req, res) => {
  const { casestudyId } = req.body;
  try {
    const findCollection = await CaseStudy.findOne({ _id: casestudyId });
    findCollection.image = `${host}/${findCollection.image}`;
    res.status(201).send(findCollection);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

module.exports = router;
