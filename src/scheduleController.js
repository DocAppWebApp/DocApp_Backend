var scheduleService = require("./scheduleService");

var registerAvailabilityController = async (req, res) => {
    try {
        var status = await scheduleService.registerAvailability(req.body);
        if (status) {
            res.send({ status: true, message: "Availability registered Successfully." });
        } else {
            res.send({ status: false, message: "Error in registering Availability." });
        }
    } catch(error) {
        console.log(error);
    }
};

var getAvailabilityController = async (req, res) => {
    try {
        var availability = await scheduleService.getAvailabilityByDateRange(req.query.physicianEmail, req.query.startDate, req.query.endDate);
        if (availability) {
            res.send({ status: true, availability });
        } else {
            res.send({ status: false, message: "Error in fetching Availability." });
        }
    } catch (error) {
        console.log(error);
        res.send({ status: false, message: error.message });
    }
};

module.exports = { registerAvailabilityController, getAvailabilityController };
