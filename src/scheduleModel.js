var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var scheduleSchema = new Schema(
  {
    physicianId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'physician',
      required: true
    },
    patientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'patients',
      required: true
    },
    date: {
      type: Date,
      required: true
    },
    status: {
      type: String,
      default: "pending"
    }
  },
  { collection: "schedules" }
);

module.exports = mongoose.model("schedule", scheduleSchema);
