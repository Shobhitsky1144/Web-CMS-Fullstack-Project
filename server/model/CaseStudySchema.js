const mongoose = require("mongoose");

const caseStudySchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  heading: {
    type: String,
    required: true,
  },
  technologies: [],
  description: {
    type: String,
    required: true,
  },
});

const CaseStudy = new mongoose.model("CASESTUDY", caseStudySchema);

module.exports = CaseStudy;
