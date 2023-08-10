var mongoose = require("mongoose");
var Schema = mongoose.Schema;
 
var appointmentSchema = new Schema(
  {
    _idDate: {
      type: String,
      required: true,
    },
    physicianEmail: {
      type: String,
      required: true,
    },
    Date: {
      type: String,
      required: true,
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
    patientEmail: {
      type: String,
    },
  },
  { collection: "appointments" }
);

module.exports = mongoose.model("appointments", appointmentSchema);
