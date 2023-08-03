var express = require("express");
var patientController = require("../src/patientController");
var physicianController = require("../src/physicianController");
const router = express.Router();

router.route("/patient/save").post(patientController.savePatientInfoController);

router
  .route("/patient/login")
  .post(patientController.loginPatientInfoController);

router
  .route("/physician/save")
  .post(physicianController.savePhysicianInfoController);

router
  .route("/physician/login")
  .post(physicianController.loginPhysicianInfoController);

module.exports = router;
