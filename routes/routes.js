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

// /save: save a single appointment with all the fields of the appointment
router
  .route("/appointment/save")
  .post(appointmentController.saveAppointmentInfoController);

// /saveday: save appointments from 9:00 to 17:00 30 min. block, it requires the _idDate from schedule, Date, physicianEmail.
router
  .route("/appointment/saveday")
  .post(appointmentController.saveAppointmentsDayInfoController);

// / update: Will allow to edit the property isBooked and patientEmail to book and cancel appointments
router
  .route("/appointment/update")
  .post(appointmentController.UpdateAppointmentInfoController);

//List all the appointments booked for an specific patient
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
