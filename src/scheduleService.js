var scheduleModel = require("./scheduleModel");

module.exports.saveScheduleService = (scheduleDetails) => {
  return new Promise(function (resolve, reject) {
    var scheduleModelData = new scheduleModel(scheduleDetails);

    scheduleModelData.save(function (error, result) {
      if (error) {
        console.log("Error while saving schedule:", error);
        reject(error);
      } else {
        resolve(true);
      }
    });
  });
};

module.exports.getScheduleService = (physicianId) => {
  return new Promise(function (resolve, reject) {
    scheduleModel.find({ physicianId: physicianId })
      .populate('patientId')
      .exec(function (error, schedules) {
        if (error) {
          console.log("Error while retrieving schedules:", error);
          reject(error);
        } else {
          resolve(schedules);
        }
      });
  });
};
