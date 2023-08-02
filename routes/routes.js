var express = require('express');
var userController = require('../src/userController');
var physicianController = require('../src/physicianController');
const router = express.Router();

router.route('/user/save').post(userController.saveUserInfoController);

router.route('/user/login').post(userController.loginUserInfoController);

router.post('/registerPhysician', physicianController.savePhysicianInfoController);

router.post('/loginPhysician', physicianController.loginPhysicianInfoController);

module.exports = router;