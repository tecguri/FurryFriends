const express = require("express");
const {saveAppointment, fetchUserAppointments, fetchAllAppointments} = require("../Controllers/appointmentController");

const router = express.Router();

router.post("/saveAppointment", saveAppointment);
router.get("/fetchUserAppointments/:ownerId", fetchUserAppointments);
router.get("/fetchAllAppointments", fetchAllAppointments);

module.exports = router;