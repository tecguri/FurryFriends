import React from 'react'
import { Link } from 'react-router-dom'

export default function ContactUs() {
  return (
    <>

      <div className="jumbotron jumbotron-fluid text-center text-white">
        <img src="/aboutus_image.jpg" alt="Hero Banner Image" />
      </div>

      <div className="container mt-2">
          <h1 className='customfontcolor'>Contact Us</h1>
          
          <div className="contact-info">
              <p>We'd Love to Hear From You!</p>
              <p>At FurryFriends, we're committed to providing the best care for your pets and ensuring you have a great experience using our platform. If you have any questions, suggestions, or need assistance, please don't hesitate to get in touch with us.</p>
          </div>
          
          <div className="contact-methods">
              <h2 className='customfontcolor'>Contact Information:</h2>
              <p><strong>Email:</strong> <a href="mailto:info@furryfriends.com">info@furryfriends.com</a></p>
              <p><strong>Phone:</strong> <a href="tel:+01234567890">+012 345 67890</a></p>
              <p><strong>Address:</strong> 123 Brampton Road, Brampton, Canada</p>
              <h2 className='customfontcolor'>Business Hours:</h2>
              <table className="table table-borderless">
                <tbody>
                  <tr>
                    <td className='businesshrs_w'>Monday</td>
                    <td>8:00AM - 9:00PM</td>
                  </tr>
                  <tr>
                    <td>Tuesday</td>
                    <td>8:00AM - 9:00PM</td>
                  </tr>
                  <tr>
                    <td>Wednesday</td>
                    <td>8:00AM - 9:00PM</td>
                  </tr>
                  <tr>
                    <td>Thursday</td>
                    <td>8:00AM - 9:00PM</td>
                  </tr>
                  <tr>
                    <td>Friday</td>
                    <td>8:00AM - 9:00PM</td>
                  </tr>
                  <tr>
                    <td>Saturday</td>
                    <td>8:00AM - 9:00PM</td>
                  </tr>
                  <tr>
                    <td>Sunday</td>
                    <td>9:00AM - 7:00PM</td>
                  </tr>
                </tbody>
              </table>
          </div>

          <div className="contact-methods">
            <h2 className='customfontcolor'>Get in Touch</h2>
            <ol className='values-list'>
                <li><strong>Email Us:</strong> For general inquiries, support, or feedback, please email us at <a href="mailto:info@furryfriends.com">info@furryfriends.com</a>. We'll get back to you within 24 hours.</li>
                <li><strong>Call Us:</strong> Our customer service team is available during business hours to assist you with any questions or concerns. Call us at <a href="tel:+01234567890">+012 345 67890</a>.</li>
                <li><strong>Visit Us:</strong> Feel free to visit our office at 123 Brampton Road, Brampton, Canada. Our friendly staff will be happy to assist you in person.</li>
            </ol>
        </div>


        <h3 className='customfontcolor'>Follow Us on Social Media</h3>
        <div className="d-flex">
            <Link className="btn btn-outline-primary btn-square me-2" to="/"><i className="fa-brands fa-twitter"></i></Link>
            <Link className="btn btn-outline-primary btn-square me-2" to="/"><i className="fa-brands fa-facebook"></i></Link>
            <Link className="btn btn-outline-primary btn-square me-2" to="/"><i className="fa-brands fa-linkedin"></i></Link>
            <Link className="btn btn-outline-primary btn-square" to="/"><i className="fa-brands fa-instagram"></i></Link>
        </div>
        
      </div>
    </>
  )
}
