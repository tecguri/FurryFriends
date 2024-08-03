const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const petSchema = new mongoose.Schema({
    owner_id: {type: Schema.Types.ObjectId, ref: 'User', require:true, minlength: 3, maxlength: 30},
    petname: {type: String, require:true, minlength: 2, maxlength: 30},
    age: {type: String, require:true, minlength: 1, maxlength: 200},
    breed: {type: String, require:true, minlength: 2, maxlength: 1024},
    type: {type: String, require:true, minlength: 2, maxlength: 1024},
    gender: {type: String, require:true, minlength: 2, maxlength: 1024},
    notes: {type: String, require:true, minlength: 0, maxlength: 1024}
}, 
{
    timestamps: true,

});

const petModel = mongoose.model("Pet", petSchema);

module.exports = petModel;