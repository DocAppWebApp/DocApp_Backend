var physicianModel = require("./physicianModel");
var key = "mystudentsaretalented";
var encryptor = require("simple-encryptor")(key);

module.exports.savePhysicianInfoService = (physicianDetails) => {
  return new Promise(function savePhysicianInfoFun(resolve, reject) {
    var physicianModelData = new physicianModel();
    physicianModelData.physicianEmail = physicianDetails.physicianEmail;
    physicianModelData.fullname = physicianDetails.fullname;
    var encryptedPassword = encryptor.encrypt(physicianDetails.password);
    physicianModelData.password = encryptedPassword;
    physicianModelData.status = physicianDetails.status;
    physicianModelData.sin = physicianDetails.sin;

    physicianModelData.save(function resultHandle(error, result) {
      if (error) {
        console.log('Error while saving physician info:', error); // new error logging
        reject(error); // reject with the error object
      } else {
        resolve(true);
      }
    });
  });
};

module.exports.physicianLoginService = (physicianLoginDetails) => {
  return new Promise(function physicianLoginFunctionality(resolve, reject) {
    physicianModel.findOne(
      { physicianEmail: physicianLoginDetails.physicianEmail },
      function getLoginResult(error, result) {
        if (error) {
          console.log('Error while logging in physician:', error); // new error logging
          reject({ status: false, message: error.message }); // send the error message
        } else {
          if (result != undefined && result != null) {
            var decryptedPassword = encryptor.decrypt(result.password);
            if (decryptedPassword == physicianLoginDetails.password) {
              resolve({ status: true, message: "Physician validated Successfully" });
            } else {
              reject({ status: false, message: "Physician validation failed" });
            }
          } else {
            reject({ status: false, message: "Error in Physician Information" });
          }
        }
      }
    );
  });
};
