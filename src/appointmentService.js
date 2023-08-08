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
    appointmentModelData.physicianEmail = appointmentDetails.physicianEmail;
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

//updates an appointment based on it's _id

module.exports.appointmentUpdateDetailsService = (appointmentUpdateDetails) => {
    return new Promise(function appointmentUpdateFunctionality(resolve, reject) {
        const filter={
            _id:appointmentUpdateDetails._id
        };
        const update={
            isBooked: appointmentUpdateDetails.isBooked,
            patientEmail: appointmentModel.patientEmail
        };
        const result= appointmentModel.findOneAndUpdate(filter,update,{
            new:true
        });
        if(result._idDate==appointmentUpdateDetails._idDate &&
           result.isBooked==appointmentUpdateDetails.isBooked &&
           result.patienEmail==appointmentUpdateDetails.patientEmail){
            resolve({
                status: true,
                message: "Appointment with _id:" + result._idDate + " updated",
              });
        }else{
            reject({ 
                status: false, 
                message: "Appointment update failed" 
            });
        }
    });
};
//List appointments by physician or by patient, or by date
module.exports.appointmentSearchService = (appointmentPatientSearch) => {
    return new Promise(function appointmentSearchFunctionality(resolve, reject) {
        const filter={
            patientEmail:appointmentPatientSearch.patientEmail,
            physicianEmail:appointmentPatientSearch.physicianEmail,
            isBooked: appointmentPatientSearch.isBooked,
            Date: appointmentPatientSearch.Date
        };
        appointmentModel.find(filter,(err, appointmentList) => {
            if (err) {
                reject({ 
                    status: false, 
                    message: "appointment Search failed" 
                });
            } else {
                resolve({
                    status: true,
                    message: appointmentList
                });
            }
                
        });
    });
};
