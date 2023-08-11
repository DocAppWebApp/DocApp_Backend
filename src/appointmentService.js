var appointmentModel = require("./appointmentModel");
var ObjectId = require("mongodb").ObjectId;
/*
Create an Appointment
*/
module.exports.saveAppointmentInfoService = (appointmentDetails) => {
  return new Promise(function saveAppointmentInfoFunctionality(
    resolve,
    reject
  ) {
    var appointmentModelData = new appointmentModel();
    appointmentModelData._idDate = appointmentDetails._idDate;
    appointmentModelData.physicianEmail = appointmentDetails.physicianEmail;
    appointmentModelData.Date = appointmentDetails.Date;
    appointmentModelData.startTime = appointmentDetails.startTime;
    appointmentModelData.endTime = appointmentDetails.endTime;
    appointmentModelData.isBooked = appointmentDetails.isBooked;
    appointmentModelData.save(function resultHandle(error, result) {
      if (error) {
        reject(false);
      } else {
        resolve(true);
      }
    });
  });
};

module.exports.saveAppointmentBulkInfoService = (appointmentsBulkDetails) => {
  return new Promise(function appointmentBulkCreate(resolve, reject) {
    var physicianEmail = appointmentsBulkDetails.physicianEmail;
    var Date = appointmentsBulkDetails.Date;
    var _idDate = appointmentsBulkDetails._idDate;
    var appointmentList = [];
    var totalInsertedDocuments = 0;
    var currentAppointmentData;
    var resultFlag = false;
    for (let i = 9; i < 17; i++) {
      for (let j = 0; j <= 1; j++) {
        currentAppointmentData = new appointmentModel();
        currentAppointmentData._idDate = _idDate;
        currentAppointmentData.physicianEmail = physicianEmail;
        currentAppointmentData.Date = Date;
        currentAppointmentData.startTime =
          (i <= 12 ? i : i - 12) +
          ":" +
          (j == 0 ? "00" : "30") +
          " " +
          (i < 12 ? "AM" : "PM");
        var end = i + j;
        currentAppointmentData.endTime =
          (end <= 12 ? end : end - 12) +
          ":" +
          (j == 1 ? "00" : "30") +
          (end < 12 ? "AM" : "PM");
        currentAppointmentData.isBooked = false;
        appointmentList.push(currentAppointmentData);
        currentAppointmentData.save(function resultHandle(error, result) {
          if (error) {
            console.log(error);
            resultFlag = true;
          } else {
            totalInsertedDocuments++;
          }
        });
      } 
    }
    console.log(appointmentList);
    if (resultFlag) {
      reject(false);
    } else {
      resolve({
        status: true,
        message: "Created: " + appointmentList.length + " appointments",
      });
    }
  });
};

//updates an appointment based on it's _id

module.exports.appointmentUpdateDetailsService = (appointmentUpdateDetails) => {
  return new Promise(function appointmentUpdateFunctionality(resolve, reject) {
    const id = appointmentUpdateDetails._id;
    const update = {
      isBooked: appointmentUpdateDetails.isBooked,
      patientEmail: appointmentUpdateDetails.patientEmail,
      physicianEmail: appointmentUpdateDetails.physicianEmail,
    };
    appointmentModel
      .updateOne({ _id: id }, update)
      .then((result) => {
        console.log(result);
        if (result.modifiedCount >= 1 && result.matchedCount === 1) {
          resolve({
            status: true,
            message: "Appointment with _id:" + id + " updated",
          });
        } else {
          reject({
            status: false,
            message: "Appointment update failed",
          });
        }
      })
      .catch((error) => {
        reject({
          status: false,
          message: "Appointment update failed",
          error: error.message,
        });
      });
  });
};
//List appointments by physician or by patient, or by date
module.exports.appointmentSearchService = (appointmentPatientSearch) => {
  return new Promise(function appointmentSearchFunctionality(resolve, reject) {
    const filter = {
      patientEmail: appointmentPatientSearch.patientEmail,
      isBooked: appointmentPatientSearch.isBooked,
    };
    appointmentModel.find(filter, (err, appointmentList) => {
      if (err) {
        reject({
          status: false,
          message: "appointment Search failed",
        });
      } else {
        resolve({
          status: true,
          message: appointmentList,
        });
      }
    });
  });
};
