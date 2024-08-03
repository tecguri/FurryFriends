const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    firstname: {type: String, require:true, minlength: 3, maxlength: 30},
    lastname: {type: String, require:true, minlength: 3, maxlength: 30},
    email: {type: String, require:true, minlength: 3, maxlength: 200, unique: true},
    password: {type: String, require:true, minlength: 3, maxlength: 1024},
    address: {type: String, require:true, minlength: 3, maxlength: 1024},
    address2: {type: String, require:true, minlength: 0, maxlength: 1024},
    city: {type: String, require:true, minlength: 3, maxlength: 1024},
    province: {type: String, require:true, minlength: 2, maxlength: 1024},
    postalcode: {type: String, require:true, minlength: 5, maxlength: 10},
}, 
{
    timestamps: true,

});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;