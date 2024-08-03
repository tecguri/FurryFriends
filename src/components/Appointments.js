import React, { useContext } from 'react'
import { PetContext } from '../utils/Pets';
import { Link } from 'react-router-dom';

export default function Appointments() {
    const {
        user,
        ownerPetsList,
        appointmentsList,
        appointmentInfo,
        setAppointmentInfo,
        saveAppointmentInfo,
        saveAppointment,
        loader,
        saveError,
        errorMsg
    } = useContext(PetContext);

    // console.log(ownerPetsList);

    return (
        <>
            <div className="container mt-4">

            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item"><Link to="/profile">Profile</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Appointments</li>
                </ol>
            </nav>
                
                <div className="row">
                    <div className="col"><h1 className='customfontcolor'>Appointments</h1></div>
                    <div className="col">
                        <button type="button" className="btn btn-warning align-middle" data-bs-toggle="modal" data-bs-target="#newAppointmentModal" style={{float:'right', verticalAlign:'middle'}}>+ Book New Appointment</button>
                    </div>
                </div>

                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Pet Name / Type</th>
                            <th scope="col">Notes</th>
                            <th scope="col">Appointment Date</th>
                            <th scope="col">Status</th>
                            <th scope="col">Vet Assigned</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointmentsList.length>0? appointmentsList.map((element, index) => (
                                <tr key={index+1}>
                                    <th scope="row">{index+1}</th>
                                    <td>{element.pet_name}</td>
                                    <td>{element.comments}</td>
                                    <td>{element.formatted_date}</td>
                                    <td>{element.status}</td>
                                    <td>{element?.vet_assigned ? element.vet_assigned: "NA"}</td>
                                    <td><Link>Post a review</Link></td>
                                </tr> 
                            )) :
                            <tr key={1}>
                                <td colSpan={7} className='text-center'>No Appointments Found.{errorMsg}</td>
                            </tr>
                        }
                        {/* <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr> */}
                        
                    </tbody>
                </table>
            </div>


            {/* Book Appointment Modal */}
            <div className="modal fade" id="newAppointmentModal" tabIndex="-1" aria-labelledby="newAppointmentModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="newAppointmentModalLabel">Add New Appointment</h1>
                        <button type="button" className="btn-close closeAppointmentModal" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form onSubmit={saveAppointment}>
                        <div className="modal-body">
                            <div className="form-group mb-2">
                                <label htmlFor="petId">Pet Name</label>
                                <select className="form-control" id="petId" required onChange={(e) =>saveAppointmentInfo({...appointmentInfo, pet_id: e.target.value})} onMouseEnter={(e) =>saveAppointmentInfo({...appointmentInfo, owner_id: user._id})} >
                                    <option value="" defaultValue>Select your pet</option>
                                    {
                                        ownerPetsList.length>0 && ownerPetsList.map((element, index) => (
                                            <option key={index} value={element._id}>{element.petname}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div className="form-group mb-2">
                                <label htmlFor="service">Select Service</label>
                                <select className="form-control" id="service" required onChange={(e) =>saveAppointmentInfo({...appointmentInfo, service: e.target.value})} >
                                    <option value="" defaultValue>Select Service</option>
                                    <option value="Veterinary Care" >Veterinary Care</option>
                                    <option value="Grooming" >Grooming</option>
                                    <option value="Training" >Training</option>
                                    <option value="Pet Sitting and Boarding" >Pet Sitting and Boarding</option>
                                    <option value="Pet Walking" >Pet Walking</option>
                                    <option value="Pet Nutrition" >Pet Nutrition</option>
                                    <option value="Pet Transportation" >Pet Transportation</option>
                                    <option value="Others or Visit Clinic" >Others or Visit Clinic</option>
                                </select>
                            </div>
                            
                            <div className="form-group mb-2">
                                <label htmlFor="comments">Comments</label>
                                <textarea className="form-control" id="comments" rows="3" placeholder="Enter any special comments" onChange={(e) =>saveAppointmentInfo({...appointmentInfo, comments: e.target.value})} ></textarea>
                            </div>
                        
                        </div>
                        <div className="modal-footer">
                            <button type="submit" className="btn btn-primary">{loader? "Booking..." : "Book"}</button>
                            {
                                saveError?.error && <div className="alert alert-danger" role="alert">
                                    {saveError.message}
                                </div>
                            }
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </>
    )
}
