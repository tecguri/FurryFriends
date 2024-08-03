const petModel = require("../Models/PetModel");
const bcrypt = require("bcrypt");
const validator = require("validator");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
    const jwtkey = process.env.JWTSECKEY;
    return jwt.sign({_id}, jwtkey, {expiresIn: "3d" });
}

const savePetInfo = async (req, res) => {
    try {
        
        const {owner_id, petname, age, breed, type, gender, notes} = req.body;
        if(!petname || !age || !breed || !type || !gender) return res.status(400).json({message: "All fields are required."});
        pet = new petModel({owner_id, petname, age, breed, type, gender, notes});
    
        await pet.save();
    
        res.status(200).json({_id:pet._id, petname});
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}


const editPetInfo = async (req, res) => {
    const petId = req.body._id;
    try {
        const {petname, age, breed, type, gender, notes} = req.body;
        if(!petname || !age || !breed || !type || !gender) return res.status(400).json({message: "All fields are required."});

        let petInfo = await petModel.findById(petId)

        if(!petInfo) return res.status(400).json("No pet found.");

        await petModel.findByIdAndUpdate(
            petId,
            { $set: req.body },
            { new: true }
        );
        let petInfoUpdated = await petModel.findById(petId)
        res.status(200).json(petInfoUpdated);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

const findPet = async (req, res) => {
    const petId = req.params.petId
    try {
        let petInfo = await petModel.findById(petId)
        if(!petInfo) return res.status(400).json("No pet found.");
        res.status(200).json(petInfo);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

const getPets = async (req, res) => {
    const owner_id = req.body.owner_id
    // console.log(req);
    try {
        let petInfo = await petModel.find({owner_id:owner_id});
        res.status(200).json(petInfo);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

const removePet = async(req, res) => {
    const petId = req.params.petId
    try {
        let petInfo = await petModel.findByIdAndDelete({_id:petId});
        if(!petInfo) return res.status(400).json("No pet found.");
        res.status(200).json({msg: 'Pet removed successfully'});
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}



module.exports = {savePetInfo, editPetInfo, findPet, getPets, removePet};