var patientService = require("./patientService");

var savePatientInfoController = async (req, res) => {
  try {
    var status = await patientService.savePatientInfoService(req.body);

    if (status) {
      res.send({ status: true, message: "PatientInfo saved Successfully." });
    } else {
      res.send({ status: false, message: "Error in saving PatientInfo." });
    }
  } catch (error) {
    console.log(error);
  }
};

var loginPatientInfoController = async (req, res) => {
  var result = null;
  try {
    result = await patientService.patientLoginService(req.body);

    if (result.status) {
      res.send({ status: true, message: result.message });
    } else {
      res.send({ status: false, message: result.message });
    }
  } catch (error) {
    console.log(error);
    res.send({ status: false, message: error.message });
  }
};

module.exports = { savePatientInfoController, loginPatientInfoController };
