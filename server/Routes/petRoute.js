const express = require("express");
const {savePetInfo, editPetInfo, findPet, getPets, removePet} = require("../Controllers/petController");


const router = express.Router();

router.post("/savePetInfo", savePetInfo);
router.post("/editPetInfo", editPetInfo);
router.get("/find/:petId", findPet);
router.post("/getPets", getPets);
router.get("/removePet/:petId", removePet);

module.exports = router;