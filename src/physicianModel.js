var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var physicianSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    fullname: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "pending",
    },
    sin: {
      type: String,
      required: true,
    },
    mln: {
      type: String,
      required: true,
    },
  },
  { collection: "physicians" }
);

module.exports = mongoose.model("physician", physicianSchema);
