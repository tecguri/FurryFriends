const appointmentModel = require("../Models/AppointmentModel");
const petModel = require("../Models/PetModel");
const moment = require('moment');

const saveAppointment = async (req, res) => {
    try {
        
        const {owner_id, pet_id, service, comments ,status} = req.body;
        if(!owner_id || !pet_id || !service || !comments || !status) return res.status(400).json({message: "All fields are required."});
        appointment = new appointmentModel({owner_id, pet_id, service, comments ,status});
    
        await appointment.save();
    
        res.status(200).json({_id:appointment._id});
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

const fetchUserAppointments = async (req, res) => {
    const owner_id = req.params.ownerId
    try {
        let appointments = await appointmentModel.find({owner_id:owner_id});
        if(!appointments) return res.status(400).json("No Appointment found.");
        
        appointments = await Promise.all(appointments.map(async (appointment) => {
            appointment.pet_name = await getPetName(appointment.pet_id);
            appointment.formatted_date = moment(appointment.createdAt).format('Do MMMM, YYYY');
            return appointment;
        }));

        res.status(200).json(appointments);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

async function getPetName(petId) {
    let res = await petModel.findById(petId);
    if(!res) return "-";
    return res.petname +" ("+res.type+")";
}

async function getPetAgeGender(petId) {
  let res = await petModel.findById(petId);
  if(!res) return "-";
  return res.age +"/ "+res.gender;
}


const fetchAllAppointments = async (req, res) => {
    try {
        // let appointments = await appointmentModel.find();
        // console.log(appointments);
        // if(!appointments) return res.status(400).json("No Appointments found.");
        
        // appointments = await Promise.all(appointments.map(async (appointment) => {
        //     appointment.pet_name = await getPetName(appointment.pet_id);
        //     appointment.formatted_date = moment(appointment.createdAt).format('Do MMMM, YYYY');
        //     return appointment;
        // }));

        let appointments = await appointmentModel.aggregate([
            {
              $lookup: {
                from: 'users',
                localField: 'owner_id',
                foreignField: '_id',
                as: 'user_info'
              }
            },
            {
              $unwind: '$user_info'
            },
            {
              $project: {
                'user_info.firstname': 1,
                'user_info.lastname': 1,
                'user_info.email': 1,
                'appointment_date': 1,
                'appointment_time': 1,
                'pet_id': 1,
                'service': 1,
                'comments': 1,
                'status': 1,
                'pet_name': 1,
                'formatted_date': 1,
                'createdAt': 1
              }
            }
          ]);

          appointments = await Promise.all(appointments.map(async (appointment) => {
              appointment.pet_name = await getPetName(appointment.pet_id);
              appointment.pet_age_gender = await getPetAgeGender(appointment.pet_id);
              appointment.formatted_date = moment(appointment.createdAt).format('Do MMMM, YYYY');
              return appointment;
          }));
      
          console.log(appointments);
        res.status(200).json(appointments);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

module.exports = {saveAppointment, fetchUserAppointments, fetchAllAppointments };