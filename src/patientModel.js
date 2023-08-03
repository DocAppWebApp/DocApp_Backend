var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var patientSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    fullname: {
      type: String,
      required: true,
    },
    birthdate: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    healthcard: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { collection: "patients" }
);

module.exports = mongoose.model("patients", patientSchema);
