const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workSchema = new Schema(
  {
    title: String,
    subtitle: String,
    description: String,
    image: String
  },
  { timestamps: true }
);

const Work = mongoose.model("Work", workSchema);
module.exports = Work;

//image: { type: Schema.Types.ObjectId, ref: "Image" },