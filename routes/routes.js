var express = require('express');
var userController = require('../src/patientController');
var physicianController = require('../src/physicianController');
const router = express.Router();

router.route('/user/save').post(userController.savePatientInfoController);

router.route('/user/login').post(userController.loginPatientInfoController);

router.post('/physician/save', physicianController.savePhysicianInfoController);

router.post('/physician/login', physicianController.loginPhysicianInfoController);

module.exports = router;