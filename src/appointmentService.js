var appointmentModel = require("./appointmentModel");
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
    appointmentModelData.Date = appointmentDetails.Date;
    appointmentModelData.startTime = appointmentDetails.startTime;
    appointmentModelData.endTime = appointmentDetails.endTime;
    appointmentModelData.isBooked = appointmentDetails.isBooked;
    patientModelData.save(function resultHandle(error, result) {
      if (error) {
        reject(false);
      } else {
        resolve(true);
      }
    });
  });
};

module.exports.appointmentUpdateDetailsService = (appointmentUpdateDetails) => {
  return new Promise(function appointmentUpdate(resolve, reject) {});
};
