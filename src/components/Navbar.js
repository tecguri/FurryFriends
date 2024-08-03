import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import {AuthContext} from '../utils/Auth'

export default function Navbar(props) {

  const {registerInfo, updateRegisterInfo, registerUser, registerError, isRegisterLoading, user, logoutUser, loginInfo, loginUser, updateLoginInfo, loginError } = useContext(AuthContext);
  
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <img src="/Logo.png" className="d-block w-30" height={50} alt="Furry Friends Logo" />
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/aboutus">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className='nav-link' to="/ourservices">Services</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="fa fa-user-circle"></i>
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/faq">FAQ</Link></li>
                <li><Link className="dropdown-item" to="/contactus">Contact Us</Link></li>
                <li><hr className="dropdown-divider" /></li>
                { user?.email && (
                    <>
                      <li><Link className="dropdown-item" to={"/appointments"}>View Appointments</Link></li>
                      <li><Link className="dropdown-item" to={"/profile"}>Profile</Link></li>
                      <li><Link onClick={()=>logoutUser()} className="dropdown-item" to={"/"}>Logout</Link></li>
                    </>
                    ) 
                }
                { !user?.email && (
                    <>
                      <li><Link className="dropdown-item" variant="primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal" >Sign In / Sign Up</Link></li>
                    </>
                  )
                }
              </ul>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-warning custom-btn-color" type="submit">Search</button>
          </form> */}
        </div>
      </div>
    </nav>

    {/* LOGIN / SIGNUP MODAL */}
    <div className="modal fade modal-md" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalToggleLabel">Sign In</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <p>Back for more pet-tastic adventures? Sign in here!</p>
            <form className="row g-3" onSubmit={loginUser}>
              <div className="col-md-12">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" onChange={(e) => updateLoginInfo({...loginInfo, email: e.target.value })} />
              </div>
              <div className="col-md-12">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" autoComplete="off" className="form-control" id="password" onChange={(e) => updateLoginInfo({...loginInfo, password: e.target.value })} />
                {/* <p className='mt-2'>Forgot Password ? <a className='link'>Click here</a></p> */}
              </div>
              <div className='mt-3 mb-2 d-grid gap-2 col-6 mx-auto'>
                <button type="submit" className="btn btn-md btn-outline-warning custom-btn-color">Sign in</button>
              </div>
              {
                loginError?.error && <div className="alert alert-danger" role="alert">
                  {loginError.message}
                </div>
              }
            </form>
            <div className='d-grid gap-2 col-6 mx-auto'>
              <p>Not register with us? <Link data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Sign Up</Link></p>
            </div>
          </div>
          {/* <div className="modal-footer">
            <button className="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Open second modal</button>
          </div> */}
        </div>
      </div>
    </div>
    <div className="modal fade modal-lg" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalToggleLabel2">Sign Up</h1>
            <button type="button" className="btn-close signupModal" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <p>Become a part of our FurryFriends community!</p>
            <form className="row g-3" onSubmit={registerUser}>
              <div className="col-md-6">
                <label htmlFor="firstname" className="form-label">First name</label>
                <input type="text" className="form-control" id="firstname" onChange={(e) => updateRegisterInfo({...registerInfo, firstname: e.target.value })} required />
              </div>
              <div className="col-md-6">
                <label htmlFor="lastname" className="form-label">Last name</label>
                <input type="text" className="form-control" id="lastname" onChange={(e) => updateRegisterInfo({...registerInfo, lastname: e.target.value })} required />
              </div>
              <div className="col-md-12">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" onChange={(e) => updateRegisterInfo({...registerInfo, email: e.target.value })} id="newEmail"/>
              </div>
              <div className="col-md-6">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" autoComplete="off" className="form-control" id="newPassword" onChange={(e) => updateRegisterInfo({...registerInfo, password: e.target.value })} />
              </div>
              <div className="col-md-6">
                <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                <input type="password" autoComplete="off" className="form-control" id="confirmPassword" onChange={(e) => updateRegisterInfo({...registerInfo, confirmpassword: e.target.value })} />
              </div>
              <div className="col-12">
                <label htmlFor="inputAddress" className="form-label">Address</label>
                <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" onChange={(e) => updateRegisterInfo({...registerInfo, address: e.target.value })} />
              </div>
              <div className="col-12">
                <label htmlFor="inputAddress2" className="form-label">Address 2</label>
                <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" onChange={(e) => updateRegisterInfo({...registerInfo, address2: e.target.value })} />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputCity" className="form-label">City</label>
                <input type="text" className="form-control" id="inputCity" onChange={(e) => updateRegisterInfo({...registerInfo, city: e.target.value })} />
              </div>
              <div className="col-md-4">
                <label htmlFor="inputState" className="form-label">State</label>
                <select id="inputState" className="form-select" onChange={(e) => updateRegisterInfo({...registerInfo, province: e.target.value })} >
                  <option value="" defaultValue>Choose...</option>
                  <option value="AB">Alberta</option>
                  <option value="BC">British Columbia</option>
                  <option value="MB">Manitoba</option>
                  <option value="NB">New Brunswick</option>
                  <option value="NL">Newfoundland and Labrador</option>
                  <option value="NS">Nova Scotia</option>
                  <option value="ON">Ontario</option>
                  <option value="PE">Prince Edward Island</option>
                  <option value="QC">Quebec</option>
                  <option value="SK">Saskatchewan</option>
                  <option value="NT">Northwest Territories</option>
                  <option value="NU">Nunavut</option>
                  <option value="YT">Yukon</option>
                </select>
              </div>
              <div className="col-md-2">
                <label htmlFor="postalCode" className="form-label">Postal code</label>
                <input type="text" className="form-control" id="postalCode" placeholder="A1A 1A1" onChange={(e) => updateRegisterInfo({...registerInfo, postalcode: e.target.value })} />
              </div>
              <div className="d-grid gap-2 col-4 mx-auto">
                <button type="submit" className="btn btn-md btn-outline-warning custom-btn-color">{isRegisterLoading? "Creating your account" : "Sign Up"}</button>
                {
                  registerError?.error && <div className="alert alert-danger" role="alert">
                    {registerError.message}
                  </div>
                }
              </div>
            </form>
            <div className='d-grid gap-2 col-4 mx-auto mt-2'>
              <p>Already registered with us? <Link data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Sign In</Link></p>
            </div>
          </div>
          
        </div>
      </div>
    </div>

    
</>
  )
}
