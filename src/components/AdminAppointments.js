import React, { useState, useContext } from 'react';
import './../Admin.css';
import { Link } from 'react-router-dom';

import { AuthContext } from '../utils/Auth';


export default function AdminAppointments() {
    
    const { logoutUser, a_appointmentList } = useContext(AuthContext);
  
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    
    const [totalUsers, setTotalUsers] = useState(0);
    const [totalAppointments, setTotalAppointments] = useState(0);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };


    return (
        <>
            
            <div className="d-flex">
                {/* Sidebar */}
                <div
                    className={`bg-dark text-white p-3 ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}
                    style={{ width: isSidebarOpen ? '250px' : '80px', transition: 'width 0.3s' }}
                >
                    <button
                    className="btn btn-secondary d-block d-md-none mb-3"
                    onClick={toggleSidebar}
                    >
                    <i className={`bi ${isSidebarOpen ? 'bi-chevron-left' : 'bi-chevron-right'}`}></i>
                    </button>
                    
                    <h4 className={isSidebarOpen ? '' : 'd-none'}><img src="/Logo.png" className="w-30" height={50} alt="Furry Friends Logo" /> FurryFriends</h4>
                    <ul className="nav flex-column">
                    <li className="nav-item">
                        <Link className="nav-link text-white" to={"/"}>
                        <i className="bi bi-house-door"></i> {isSidebarOpen && 'Home'}
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to={"/admin-appointments"}>
                            <i className="bi bi-calendar"></i> {isSidebarOpen && 'Appointments'}
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to={"/admin-users"}>
                        <i className="bi bi-person"></i> {isSidebarOpen && 'Users'}
                        </Link>
                    </li>
                    <hr></hr>
                    <li className="nav-item">
                        <Link onClick={()=>logoutUser()} className="nav-link text-white" to={"/"}>
                            <i className="bi bi-person-circle"></i> {isSidebarOpen && 'Logout'}
                        </Link>
                    </li>
                    </ul>
                </div>

                {/* Main Content */}
                <div className="flex-fill p-3">
                    <button
                    className="btn btn-primary d-none d-md-block mb-3"
                    onClick={toggleSidebar}
                    >
                    Toggle Sidebar { isSidebarOpen }
                    </button>
                    <h1>Dashboard</h1>
                    <p>Welcome to your admin dashboard!</p>
                    
                    <hr></hr>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Dashboard</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Appointments</li>
                        </ol>
                    </nav>

                    <p className="h3">All Appointments</p>

                    <table className="mt-4 table table-responsive table-hover align-middle">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Owner Info</th>
                            <th scope="col">Pet Name / Type</th>
                            <th scope="col">Pet Age / Gender</th>
                            <th scope="col">Servcie</th>
                            <th scope="col">Comments</th>
                            <th scope="col">Appointment Date</th>
                            <th scope="col">Status</th>
                            <th scope="col">Assigned To</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                a_appointmentList.length>0? a_appointmentList.map((element, index) => (
                                    <tr key={index+1}>
                                        <th scope="row">{index+1}</th>
                                        <td>{element.user_info.firstname} {element.user_info.lastname}
                                            <br/>
                                            ({element.user_info.email})
                                        </td>
                                        <td>{element.pet_name}</td>
                                        <td>{element.pet_age_gender}</td>
                                        <td>{element.service}</td>
                                        <td>{element.comments}</td>
                                        <td>{element.formatted_date}</td>
                                        <td>
                                            <select className='form-select' id='status'>
                                                <option value="Active" selected={element.status == "Active"}>Active </option>
                                                <option value="In progress" selected={element.status == "In progress"}>In progress </option>
                                                <option value="Completed" selected={element.status == "Completed"}>Completed </option>
                                                <option value="Canceled" selected={element.status == "Canceled"}>Canceled </option>
                                            </select>
                                        </td>
                                        <td>
                                            <select className='form-select' id='vetDoctor'>
                                                <option value="">Select Vet Doctor</option>
                                                <option value="Vanessa Tobias, RVN">Vanessa Tobias, RVN</option>
                                                <option value="Rosie Upperton">Rosie Upperton</option>
                                                <option value="Jordan Aaron, CPACP">Jordan Aaron, CPACP</option>
                                                <option value="Emily Abbott, CPACP">Emily Abbott, CPACP</option>
                                                <option value="Vesna Ader, CPACM">Vesna Ader, CPACM</option>
                                                <option value="Mayrin Aguilar, CPACP">Mayrin Aguilar, CPACP</option>
                                            </select>
                                        </td>
                                    </tr> 
                                )) :
                                <tr key={1}>
                                    <td colSpan={9} className='text-center'>No Appointments Found.</td>
                                </tr>
                            }
                        </tbody>
                    </table>

                    {/* <nav aria-label="Page navigation example">
                        <ul className="pagination justify-content-end">
                            <li className="page-item disabled">
                            <a className="page-link">Previous</a>
                            </li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item">
                            <a className="page-link" href="#">Next</a>
                            </li>
                        </ul>
                    </nav> */}

                </div>
            </div>
  

            <div className="container-fluid bg-dark text-white-50 py-4">
                <div className="row g-5">
                    <div className="col-md-6 text-center text-md-start">
                        <p className="mb-md-0">© <Link className="text-white" href="/">FurryFriends</Link>. All Rights Reserved.</p>
                    </div>
                    <div className="col-md-6 text-center text-md-end">
                    </div>
                </div>
            </div>

            
        </>
    )

}
