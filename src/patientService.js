var patientModel = require("./patientModel");
var key = "docAppWebDevelopment";
var encryptor = require("simple-encryptor")(key);

module.exports.savePatientInfoService = (patientDetails) => {
  return new Promise(function savePatientInfoFun(resolve, reject) {
    var patientModelData = new patientModel();
    patientModelData.email = patientDetails.email;
    patientModelData.fullname = patientDetails.fullname;
    patientModelData.gender = patientDetails.gender;
    patientModelData.healthcard = patientDetails.healthcard; //Verify if this works? saving as date
    patientModelData.birthdate = patientDetails.birthdate;
    //Code to encrypt password
    var encryptedPassword = encryptor.encrypt(patientDetails.password);
    patientModelData.password = encryptedPassword;

    patientModelData.save(function resultHandle(error, result) {
      if (error) {
        reject(false);
      } else {
        resolve(true);
      }
    });
  });
};

module.exports.patientLoginService = (patientLoginDetails) => {
  return new Promise(function patientLoginFunctionality(resolve, reject) {
    patientModel.findOne(
      { email: patientLoginDetails.email },
      function getLoginResult(error, result) {
        if (error) {
          reject({ status: false, message: "Invalid Data" });
        } else {
          if (result != undefined && result != null) {
            var decryptedPassword = encryptor.decrypt(result.password);
            if (decryptedPassword == userLoginDetails.password) {
              resolve({
                status: true,
                message: "Patient validated Successfully",
              });
            } else {
              reject({ status: false, message: "Patient validation failed" });
            }
          } else {
            reject({ status: false, message: "Error in Patient Information" });
          }
        }
      }
    );
  });
};
