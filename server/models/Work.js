const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workSchema = new Schema(
  {
    title: String,
    subtitle: String,
    description: String,
    img1: String,
    img2: String,
    img3: String,
    img4: String,
    img5: String
  },
  { timestamps: true }
);

const Work = mongoose.model("Work", workSchema);
module.exports = Work;

