const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const appointmentSchema = new mongoose.Schema({
    owner_id: {type: Schema.Types.ObjectId, ref: 'User', require:true, minlength: 3, maxlength: 30},
    pet_id: {type: Schema.Types.ObjectId, ref: 'Pet', require:true, minlength: 3, maxlength: 30},
    service: {type: String, require:true, minlength: 1, maxlength: 200},
    comments: {type: String, minlength: 0, maxlength: 1024},
    status: {type: String, require:true, minlength: 1, maxlength: 1024},
    pet_name: {type: String, require:true, minlength: 1, maxlength: 1024},
    formatted_date: {type: String, require:true, minlength: 1, maxlength: 1024}
}, 
{
    timestamps: true,

});

const appointmentModel = mongoose.model("Appointment", appointmentSchema);

module.exports = appointmentModel;