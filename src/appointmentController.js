var appointmentService = require("./appointmentService");

var saveAppointmentInfoController = async (req, res) => {
    try {
        var status = await appointmentService.saveAppointmentInfoService(req.body);
        if (status) {
            res.send({ status: true, message: "Appointment Info saved Successfully." });
        } else {
            res.send({ status: false, message: "Error in saving Appointment Info." });
        }
    }catch(error){
        console.log(error);
    }
};

var SearchAppointmentInfoController = async (req, res) => {
    var result = null;
    try {
        result = await appointmentService.appointmentSearchService(req.body);

        if (result.status) {
            res.send({ status: true, message: result.message });
        } else {
            res.send({ status: false, message: result.message });
        }
    }catch (error){
        console.log(error);
        res.send({ status: false, message: error.message });
    }
};

var UpdateAppointmentInfoController = async (req, res) => {
    var result = null;
    try {
        result = await appointmentService.appointmentUpdateDetailsService(req.body);

        if (result.status) {
            res.send({ status: true, message: result.message });
        } else {
            res.send({ status: false, message: result.message });
        }
    }catch (error){
        console.log(error);
        res.send({ status: false, message: error.message });
    }
};

//TODO: Create a service to create multiple appointments ussing saveAppointmentInfoService from appointmentService

module.exports = { saveAppointmentInfoController, UpdateAppointmentInfoController, SearchAppointmentInfoController };