var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var physicianSchema = new Schema(
  {
    physicianEmail: {
        type: String,
        required: true,
        unique: true
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
      default: 'pending'
    },
    sin: {
      type: Number,
      required: true,
    }
  },
  { collection: "physicians" }
);

module.exports = mongoose.model("physician", physicianSchema);
