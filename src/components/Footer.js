import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
    <div className="container-fluid bg-light mt-5 py-5">
            <div className="container pt-5">
                <div className="row g-5">
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-uppercase border-start border-5 border-primary ps-3 mb-4">Get In Touch</h5>
                        <p className="mb-4">We are dedicated to creating a safe, nurturing environment where pets can thrive in expert hands.</p>
                        <p className="mb-2"><i className="fa fa-globe text-primary me-2"></i>123 Brampton Road, Brampton, ON, Canada</p>
                        <p className="mb-2"><i className="fa fa-envelope-open text-primary me-2"></i>info@furryfriends.com</p>
                        <p className="mb-0"><i className="fa fa-phone text-primary me-2"></i>+012 345 67890</p>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-uppercase border-start border-5 border-primary ps-3 mb-4">Quick Links</h5>
                        <div className="d-flex flex-column justify-content-start">
                            <Link className="text-body mb-2" to="/"><i className="fa fa-arrow-right text-primary me-2"></i>Home</Link>
                            <Link className="text-body mb-2" to="/aboutus"><i className="fa fa-arrow-right text-primary me-2"></i>About Us</Link>
                            <Link className="text-body mb-2" to="/ourservices"><i className="fa fa-arrow-right text-primary me-2"></i>Our Services</Link>
                            <Link className="text-body mb-2" to="/"><i className="fa fa-arrow-right text-primary me-2"></i>Meet The Team</Link>
                            <Link className="text-body mb-2" to="/"><i className="fa fa-arrow-right text-primary me-2"></i>Latest Blog</Link>
                            <Link className="text-body" to="contactus"><i className="fa fa-arrow-right text-primary me-2"></i>Contact Us</Link>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-uppercase border-start border-5 border-primary ps-3 mb-4">Working Hours</h5>
                        <div className="d-flex flex-column justify-content-start">
                            <p className="text-body mb-2"><i className="fa fa-arrow-right text-primary me-2"></i>Monday : 8:00AM - 9:00PM</p>
                            <p className="text-body mb-2"><i className="fa fa-arrow-right text-primary me-2"></i>Tuesday : 8:00AM - 9:00PM</p>
                            <p className="text-body mb-2"><i className="fa fa-arrow-right text-primary me-2"></i>Wednesday : 8:00AM - 9:00PM</p>
                            <p className="text-body mb-2"><i className="fa fa-arrow-right text-primary me-2"></i>Thursday : 8:00AM - 9:00PM</p>
                            <p className="text-body mb-2"><i className="fa fa-arrow-right text-primary me-2"></i>Friday : 8:00AM - 9:00PM</p>
                            <p className="text-body mb-2"><i className="fa fa-arrow-right text-primary me-2"></i>Saturday : 8:00AM - 9:00PM</p>
                            <p className="text-body mb-2"><i className="fa fa-arrow-right text-primary me-2"></i>Sunday : 9:00AM - 7:00PM</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-uppercase border-start border-5 border-primary ps-3 mb-4">Newsletter</h5>
                        <form action="">
                            <div className="input-group">
                                <input type="text" className="form-control p-3" placeholder="Your Email" />
                                <button className="btn btn-primary">Sign Up</button>
                            </div>
                        </form>
                        <h6 className="text-uppercase mt-4 mb-3">Follow Us</h6>
                        <div className="d-flex">
                            <Link className="btn btn-outline-primary btn-square me-2" to="/"><i className="fa-brands fa-twitter"></i></Link>
                            <Link className="btn btn-outline-primary btn-square me-2" to="/"><i className="fa-brands fa-facebook"></i></Link>
                            <Link className="btn btn-outline-primary btn-square me-2" to="/"><i className="fa-brands fa-linkedin"></i></Link>
                            <Link className="btn btn-outline-primary btn-square" to="/"><i className="fa-brands fa-instagram"></i></Link>
                        </div>
                    </div>
                    <div className="col-12 text-center text-body">
                        <Link className="text-body" to="/termsandconditions">Terms &amp; Conditions</Link>
                        <span className="mx-1"> | </span>
                        <Link className="text-body" to="/privacypolicy">Privacy Policy</Link>
                        <span className="mx-1"> | </span>
                        <Link className="text-body" to="/contactus">Customer Support</Link>
                        <span className="mx-1"> | </span>
                        <Link className="text-body" to="/faq">FAQs</Link>
                    </div>
                </div>
            </div>
        </div>

        <div className="container-fluid bg-dark text-white-50 py-4">
            <div className="container">
                <div className="row g-5">
                    <div className="col-md-6 text-center text-md-start">
                        <p className="mb-md-0">© <Link className="text-white" href="/">FurryFriends</Link>. All Rights Reserved.</p>
                    </div>
                    <div className="col-md-6 text-center text-md-end">
                        {/* <p className="mb-0">Designed by <a className="text-white" href="#">Guri</a></p> */}
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
