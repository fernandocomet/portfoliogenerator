const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const portfolioSchema = new Schema(
  {
    alias: String,
    title: String,
    subtitle: String
  },
  { timestamps: true }
);

const Portfolio = mongoose.model("Portfolio", portfolioSchema);
module.exports = Portfolio;


 //works: [{ type: Schema.Types.ObjectId, ref: "Work" }]