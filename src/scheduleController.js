var scheduleService = require('./scheduleService');

var saveScheduleController = async (req, res) => {
  try {
    var status = await scheduleService.saveScheduleService(req.body);

    if (status) {
      res.send({ status: true, message: "Schedule saved Successfully." });
    } else {
      res.send({ status: false, message: "Error in saving Schedule." });
    }
  } catch (error) {
    console.log(error);
    res.send({ status: false, message: error.message });
  }
};

var getScheduleController = async (req, res) => {
  try {
    var schedules = await scheduleService.getScheduleService(req.params.physicianId);

    res.send({ status: true, schedules: schedules });
  } catch (error) {
    console.log(error);
    res.send({ status: false, message: error.message });
  }
};

module.exports = { saveScheduleController, getScheduleController };
