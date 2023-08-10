var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var scheduleSchema = new Schema({
    physicianEmail: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    slots: [{
        startTime: String,
        endTime: String,
        isBooked: {
            type: Boolean,
            default: false,
        }
    }]
}, { collection: "schedules" });

module.exports = mongoose.model("schedules", scheduleSchema);
