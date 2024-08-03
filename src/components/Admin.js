import React, { useState, useContext } from 'react';
import './../Admin.css';
import { Link } from 'react-router-dom';

import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale } from 'chart.js';
import { AuthContext } from '../utils/Auth';

ChartJS.register(Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale);


export default function Admin() {
    const { logoutUser } = useContext(AuthContext);
    
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    
    const [totalUsers, setTotalUsers] = useState(0);
    const [totalAppointments, setTotalAppointments] = useState(0);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    const data = {
        labels: ['May', 'June', 'July', 'August', 'September', 'October'],
        datasets: [
        {
            label: 'Users',
            data: [1, 0, 5, 0, 0, 0],
            fill: false,
            borderColor: 'rgba(75,192,192,1)',
            tension: 0.1,
        },
        ],
    };
    
    // Options for the line chart
    const options = {
        responsive: true,
        plugins: {
        legend: {
            position: 'top',
        },
        tooltip: {
            callbacks: {
            label: function (tooltipItem) {
                return `Users: ${tooltipItem.raw}`;
            },
            },
        },
        },
        scales: {
        x: {
            beginAtZero: true,
        },
        y: {
            beginAtZero: true,
        },
        },
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
                    Toggle Sidebar
                    </button>
                    <h1>Dashboard</h1>
                    <p>Welcome to your admin dashboard!</p>


                    <div className="row">
                        <div className="col-sm-6 mb-3 mb-sm-0">
                            <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Total Users</h5>
                                <p className="card-text">The number that matters: {totalUsers? totalUsers: 6}</p>
                                <Link to="/admin-users" className="btn btn-primary">View more...</Link>
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Total Appointments</h5>
                                <p className="card-text">The heartbeat of your business: {totalAppointments? totalAppointments: 5}</p>
                                <Link to="/admin-appointments" className="btn btn-primary">View more...</Link>
                            </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-5">
                        <h1 className="text-center mb-4">New Users Chart</h1>
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                            <div className="card">
                                <div className="card-body">
                                <Line data={data} options={options} />
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>



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


