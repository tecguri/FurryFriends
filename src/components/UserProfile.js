import React, { useContext } from 'react'
import { PetContext } from '../utils/Pets';
import { Link } from 'react-router-dom';

export default function UserProfile() {
    const {
        user,
        petInfo,
        savePetInfo,
        saveError,
        savePet,
        isPetInfoLoading,
        ownerInfo,
        ownerPetsList,
        removePet,
        removePetId,
        setRemovePetId,
        editPet,
        editPetInfo, 
        saveEditPetInfo,
        getEditInfoForPet,
        editUserInfo,
        editUsedProfile,
        saveEditUserInfo
    } = useContext(PetContext);
        
    return (
        <>


            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <h3 className='mt-4 customfontcolor'>Profile Information <p style={{float:"right", fontSize:"14px"}}><Link data-bs-toggle="modal" data-bs-target="#edituserprofilemodal" className='customLinkColor'><i className='fa fa-pencil'></i>edit profile</Link></p> </h3> 
                    <div className="card">
                        <div className="card-body">
                        {/* <h5 className="card-title">User Information</h5> */}
                        <div className="row">
                            <div className="col-md-6">
                                <p><strong>First Name:</strong> {ownerInfo.firstname?ownerInfo.firstname:"xxx"}</p>
                                <p><strong>Last Name:</strong> {ownerInfo.lastname?ownerInfo.lastname:"xxx"}</p>
                            </div>
                            <div className="col-md-6">
                                <p><strong>Email:</strong> {ownerInfo.email?ownerInfo.email:"xxx"}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <p><strong>Password:</strong> **********</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <p><strong>Address:</strong> {ownerInfo.address?ownerInfo.address:""}</p>
                                <p><strong>Address 2:</strong> {ownerInfo.address2?ownerInfo.address2:""}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <p><strong>City:</strong> {ownerInfo.city?ownerInfo.city:"xxx"}</p>
                            </div>
                            <div className="col-md-4">
                                <p><strong>Province:</strong> {ownerInfo.province?ownerInfo.province:"xxx"}</p>
                            </div>
                            <div className="col-md-4">
                                <p><strong>Postal Code:</strong> {ownerInfo.postalcode?ownerInfo.postalcode:"xxx"}</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>


            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <h3 className='mt-4 customfontcolor'>Pets Information <button className="btn btn-sm btn-outline-warning custom-btn-color" data-bs-toggle="modal" data-bs-target="#newPetModal" type="button">+ Add Pets Information</button></h3>
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Pet Name</th>
                                <th scope="col">Pet Age</th>
                                <th scope="col">Pet Breed</th>
                                <th scope="col">Pet Type</th>
                                <th scope="col">Pet Gender</th>
                                <th scope="col">Special Notes</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="table-group-divider">

                            {ownerPetsList.length === 0 && 
                                <tr><td colSpan={8} className='text-center'>No Pets Found</td></tr>
                            }

                            {ownerPetsList.map((element, index) => (
                                <tr key={index}>
                                    <th scope="row">{index+1}</th>
                                    <td>{element.petname}</td>
                                    <td>{element.age}</td>
                                    <td>{element.breed}</td>
                                    <td>{element.type}</td>
                                    <td>{element.gender}</td>
                                    <td>{element.notes}</td>
                                    <td>
                                        <button type="button" className="btn btn-sm btn-success actionbtns" data-bs-toggle="modal" data-bs-target="#editPetModal" onClick={(e) => getEditInfoForPet(element._id)}><i className="bi bi-pencil" ></i></button>
                                        <button type="button" className="btn btn-sm btn-danger px-2" data-bs-toggle="modal" data-bs-target="#removePetModal" onClick={(e) => setRemovePetId(element._id)}><i className="bi bi-trash"></i></button>
                                    </td>
                                </tr>
                            ))}

                           
                        </tbody>
                    </table>

                    </div>
                </div>
            </div>

            {/* Pets Modal */}
            <div className="modal fade" id="newPetModal" tabIndex="-1" aria-labelledby="newPetModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="newPetModalLabel">Add New Pet</h1>
                        <button type="button" className="btn-close petModal" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form onSubmit={savePet}>
                        <div className="modal-body">
                            <div className="form-group mb-2">
                                <label htmlFor="petName">Pet Name</label>
                                <input type="text" className="form-control" id="petName" placeholder="Enter pet name" required onChange={(e) =>savePetInfo({...petInfo, petname: e.target.value})} onKeyDown={(e) =>savePetInfo({...petInfo, owner_id: user._id})} />
                            </div>
                            <div className="form-group mb-2">
                                <label htmlFor="petAge">Pet Age</label>
                                <input type="number" className="form-control" id="petAge" placeholder="Enter pet age" required onChange={(e) =>savePetInfo({...petInfo, age: e.target.value})} />
                            </div>
                            <div className="form-group mb-2">
                                <label htmlFor="petBreed">Pet Breed</label>
                                <input type="text" className="form-control" id="petBreed" placeholder="Enter pet breed" required onChange={(e) =>savePetInfo({...petInfo, breed: e.target.value})} />
                            </div>
                            <div className="form-group mb-2">
                                <label htmlFor="petType">Pet Type</label>
                                <select className="form-control" id="petType" required onChange={(e) =>savePetInfo({...petInfo, type: e.target.value})}>
                                    <option value="" defaultValue>Select pet type</option>
                                    <option value="dog">Dog</option>
                                    <option value="cat">Cat</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div className="form-group mb-2">
                                <label htmlFor="petGender">Pet Gender</label>
                                <select className="form-control" id="petGender" required onChange={(e) =>savePetInfo({...petInfo, gender: e.target.value})} >
                                    <option value="" defaultValue>Select pet gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                            <div className="form-group mb-2">
                                <label htmlFor="specialNotes">Special Notes</label>
                                <textarea className="form-control" id="specialNotes" rows="3" placeholder="Enter any special notes" onChange={(e) =>savePetInfo({...petInfo, notes: e.target.value})} ></textarea>
                            </div>
                        
                        </div>
                        <div className="modal-footer">
                            <button type="submit" className="btn btn-primary">{isPetInfoLoading? "Saving info..." : "Save"}</button>
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



            <div className="modal fade" id="removePetModal" tabIndex="-1" aria-labelledby="removePetModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        {/* <h1 className="modal-title fs-5" id="removePetModalLabel">Modal title</h1> */}
                        <button type="button" className="btn-close closealert" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        Are you sure you want to remove this pet details?
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" className="btn btn-primary" onClick={(e)=>removePet(removePetId)}>Remove</button>
                    </div>
                    </div>
                </div>
            </div>


            {/* Pets Edit Modal */}
            <div className="modal fade" id="editPetModal" tabIndex="-1" aria-labelledby="editPetModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="editPetModalLabel">Edit Pet Info</h1>
                        <button type="button" className="btn-close editPetModal" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form onSubmit={editPet}>
                        <div className="modal-body">
                            <div className="form-group mb-2">
                                <label htmlFor="petName">Pet Name</label>
                                <input type="text" className="form-control" id="petName" placeholder="Enter pet name" required onChange={(e) =>saveEditPetInfo({...editPetInfo, petname: e.target.value})} value={editPetInfo? editPetInfo.petname: ""}/>
                            </div>
                            <div className="form-group mb-2">
                                <label htmlFor="petAge">Pet Age</label>
                                <input type="number" className="form-control" id="petAge" placeholder="Enter pet age" required onChange={(e) =>saveEditPetInfo({...editPetInfo, age: e.target.value})} value={editPetInfo? editPetInfo.age: ""}/>
                            </div>
                            <div className="form-group mb-2">
                                <label htmlFor="petBreed">Pet Breed</label>
                                <input type="text" className="form-control" id="petBreed" placeholder="Enter pet breed" required onChange={(e) =>saveEditPetInfo({...editPetInfo, breed: e.target.value})} value={editPetInfo? editPetInfo.breed: ""} />
                            </div>
                            <div className="form-group mb-2">
                                <label htmlFor="petType">Pet Type</label>
                                <select className="form-control" id="petType" required onChange={(e) =>saveEditPetInfo({...editPetInfo, type: e.target.value})}>
                                    <option value="dog" selected={editPetInfo.type === 'dog'}>Dog</option>
                                    <option value="cat" selected={editPetInfo.type === 'cat'}>Cat</option>
                                    <option value="other" selected={editPetInfo.type === 'other'}>Other</option>
                                </select>
                            </div>
                            <div className="form-group mb-2">
                                <label htmlFor="petGender">Pet Gender</label>
                                <select className="form-control" id="petGender" required onChange={(e) =>saveEditPetInfo({...editPetInfo, gender: e.target.value})} >
                                    <option value="male" selected={editPetInfo.gender === 'male'}>Male</option>
                                    <option value="female" selected={editPetInfo.gender === 'female'}>Female</option>
                                </select>
                            </div>
                            <div className="form-group mb-2">
                                <label htmlFor="specialNotes">Special Notes</label>
                                <textarea className="form-control" id="specialNotes" rows="3" placeholder="Enter any special notes" onChange={(e) =>saveEditPetInfo({...editPetInfo, notes: e.target.value})} value={editPetInfo? editPetInfo.notes: ""} ></textarea>
                            </div>
                        
                        </div>
                        <div className="modal-footer">
                            <button type="submit" className="btn btn-primary">{isPetInfoLoading? "Updating info..." : "Update"}</button>
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



            {/* edit user info modal */}
            <div className="modal fade modal-lg " id="edituserprofilemodal" aria-hidden="true" aria-labelledby="edituserprofilemodal" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h3 className="modal-title customfontcolor" id="edituserprofilemodal">Edit User Profile</h3>
                        <button type="button" className="btn-close edituserprofilemodal" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form className="row g-3" onSubmit={editUsedProfile}>
                        <div className="col-md-6">
                            <label htmlFor="firstname" className="form-label">First name</label>
                            <input type="text" className="form-control" id="firstname" onChange={(e) => saveEditUserInfo({...editUserInfo, firstname: e.target.value })} value={ownerInfo.firstname?ownerInfo.firstname:""} required />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="lastname" className="form-label">Last name</label>
                            <input type="text" className="form-control" id="lastname" onChange={(e) => saveEditUserInfo({...editUserInfo, lastname: e.target.value })} value={ownerInfo.lastname?ownerInfo.lastname:""} required />
                        </div>
                        <div className="col-md-12">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" onChange={(e) => saveEditUserInfo({...editUserInfo, email: e.target.value })} id="newEmail" disabled value={ownerInfo.email?ownerInfo.email:""} readOnly/>
                        </div>
                        
                        <div className="col-12">
                            <label htmlFor="inputAddress" className="form-label">Address</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" onChange={(e) => saveEditUserInfo({...editUserInfo, address: e.target.value })} value={ownerInfo.address?ownerInfo.address:""} />
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputAddress2" className="form-label">Address 2</label>
                            <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" onChange={(e) => saveEditUserInfo({...editUserInfo, address2: e.target.value })} value={ownerInfo.address2?ownerInfo.address2:""} />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputCity" className="form-label">City</label>
                            <input type="text" className="form-control" id="inputCity" onChange={(e) => saveEditUserInfo({...editUserInfo, city: e.target.value })} value={ownerInfo.city?ownerInfo.city:""} />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="inputState" className="form-label">State</label>
                            <select id="inputState" className="form-select" onChange={(e) => saveEditUserInfo({...editUserInfo, province: e.target.value })} >
                            <option value="AB" selected={ownerInfo.province === 'AB'}>Alberta</option>
                            <option value="BC" selected={ownerInfo.province === 'BC'}>British Columbia</option>
                            <option value="MB" selected={ownerInfo.province === 'MB'}>Manitoba</option>
                            <option value="NB" selected={ownerInfo.province === 'NB'}>New Brunswick</option>
                            <option value="NL" selected={ownerInfo.province === 'NL'}>Newfoundland and Labrador</option>
                            <option value="NS" selected={ownerInfo.province === 'NS'}>Nova Scotia</option>
                            <option value="ON" selected={ownerInfo.province === 'ON'}>Ontario</option>
                            <option value="PE" selected={ownerInfo.province === 'PE'}>Prince Edward Island</option>
                            <option value="QC" selected={ownerInfo.province === 'QC'}>Quebec</option>
                            <option value="SK" selected={ownerInfo.province === 'SK'}>Saskatchewan</option>
                            <option value="NT" selected={ownerInfo.province === 'NT'}>Northwest Territories</option>
                            <option value="NU" selected={ownerInfo.province === 'NU'}>Nunavut</option>
                            <option value="YT" selected={ownerInfo.province === 'YT'}>Yukon</option>
                            </select>
                        </div>
                        <div className="col-md-2">
                            <label htmlFor="postalCode" className="form-label">Postal code</label>
                            <input type="text" className="form-control" id="postalCode" placeholder="A1A 1A1" onChange={(e) => saveEditUserInfo({...editUserInfo, postalcode: e.target.value })} value={ownerInfo.postalcode?ownerInfo.postalcode:""} />
                        </div>
                        <div className="d-grid gap-2 col-4 mx-auto">
                            <button type="submit" className="btn btn-md btn-outline-warning custom-btn-color">Update</button>
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
                </div>

        </>
    )
}
