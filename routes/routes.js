var express = require("express");
var patientController = require("../src/patientController");
var physicianController = require("../src/physicianController");
var scheduleController = require("../src/scheduleController");
var appointmentController = require("../src/appointmentController");
const router = express.Router();

//Patients
router
  .route("/patient/save")
  .post(patientController.savePatientInfoController);

router
  .route("/patient/login")
  .post(patientController.loginPatientInfoController);


//Physicians
router
  .route("/physician/save")
  .post(physicianController.savePhysicianInfoController);

router
  .route("/physician/login")
  .post(physicianController.loginPhysicianInfoController);


//Appointments
router
  .route("/appointment/save")
  .post(appointmentController.saveAppointmentInfoController);

router
  .route("/appointment/search")
  .post(appointmentController.UpdateAppointmentInfoController);

router
  .route("/appointment/list")
  .post(appointmentController.SearchAppointmentInfoController);

//Schedules
router
  .route('/schedule/register')
  .post(scheduleController.registerAvailabilityController);

router
  .route('/schedule/availability')
  .get(scheduleController.getAvailabilityController);


module.exports = router;
