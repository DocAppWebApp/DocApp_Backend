var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var appointmentSchema = new Schema(
  {
    date: {
      type: String,
      required: true,
      unique: true,
    },
    startTime: {
      type: String,
      required: true,
    },
    endTime: {
      type: String,
      required: true,
    },
    isBooked: {
      type: Boolean,
      default: false,
    },
  },
  { collection: "appointments" }
);

module.exports = mongoose.model("appointments", appointmentSchema);