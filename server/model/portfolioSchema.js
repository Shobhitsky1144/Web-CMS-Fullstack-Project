const mongoose = require("mongoose");

const portfolioSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  heading: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  expertise: [],
  verticals: [],
  technologies: [],
});

const Portfolio = new mongoose.model("PORTFOLIO", portfolioSchema);

module.exports = Portfolio;
