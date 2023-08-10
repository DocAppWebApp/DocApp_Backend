var scheduleModel = require("./scheduleModel");

module.exports.registerAvailability = (availabilityDetails) => {
  return new Promise(function saveAvailabilityFunctionality(resolve, reject) {
    var scheduleModelData = new scheduleModel(availabilityDetails);
    scheduleModelData.save(function resultHandle(error) {
      if (error) {
        reject(false);
      } else {
        resolve(true);
      }
    });
  });
};

module.exports.getAvailabilityByDateRange = async (physicianEmail, startDate, endDate) => {
  return await scheduleModel.find({
      physicianEmail,
      date: { $gte: startDate, $lte: endDate },
  });
};
