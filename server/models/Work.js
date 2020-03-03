const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workSchema = new Schema(
  {
    title: String,
    subtitle: String,
    description: String,
    images: [{type: String}]
  },
  { timestamps: true }
);

const Work = mongoose.model("Work", workSchema);
module.exports = Work;

