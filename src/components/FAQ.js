import React from 'react'
import { Link } from 'react-router-dom'

export default function FAQ() {
  return (
    <>
        <div className="jumbotron jumbotron-fluid text-center text-white">
            <img src="/aboutus_image.jpg" alt="Hero Banner Image" />
        </div>
        
        <div className="container mt-2">
          <div className="faq-list">
              <h2 className='customfontcolor'>Frequently Asked Questions (FAQ)</h2>
              <p>Welcome to the FurryFriends FAQ page!</p>
              <p>Here you'll find answers to some of the most common questions about our platform and services. If you can't find the answer you're looking for, please don't hesitate to <a href="contact.html">contact us</a>.</p>
              <ol className='values-list'>
                  <li><strong className='customfontcolor'>What is FurryFriends?</strong><br/>
                      FurryFriends is an online platform that connects pet owners with a wide range of pet care services, including veterinary care, grooming, training, and more. Our goal is to make pet care convenient, accessible, and efficient for pet owners.
                  </li>
                  <li><strong className='customfontcolor'>How do I create an account?</strong><br/>
                      To create an account, click on the "Sign Up" button at the top right corner of our homepage. Fill in your details, including your name, email address, and password, then click "Submit." You'll receive a confirmation email to verify your account.
                  </li>
                  <li><strong className='customfontcolor'>How do I book a service?</strong><br/>
                      Once you have created an account and logged in, you can browse our list of services. Select the service you need, choose a provider, and click "Book Now." Follow the prompts to schedule your appointment and make a payment.
                  </li>
                  <li><strong className='customfontcolor'>Can I manage multiple pets on one account?</strong><br/>
                      Yes, you can add multiple pets to your account. Simply go to your profile, click on "Add Pet," and fill in the required information for each pet.
                  </li>
                  <li><strong className='customfontcolor'>What payment methods do you accept?</strong><br/>
                      We accept various payment methods, including credit cards, debit cards, and PayPal. All transactions are processed through our secure payment gateway.
                  </li>
                  <li><strong className='customfontcolor'>How do I cancel or reschedule an appointment?</strong><br/>
                      To cancel or reschedule an appointment, log in to your account, go to "My Appointments," and select the appointment you wish to change. Follow the prompts to cancel or choose a new date and time.
                  </li>
                  <li><strong className='customfontcolor'>Are your service providers certified?</strong><br/>
                      Yes, all our service providers are thoroughly vetted and certified professionals. We ensure they meet our high standards of quality and reliability.
                  </li>
                  <li><strong className='customfontcolor'>How do I leave a review for a service provider?</strong><br/>
                      After your appointment, you will receive an email prompting you to leave a review. You can also log in to your account, go to "My Appointments," and select the completed appointment to leave a review.
                  </li>
                  <li><strong className='customfontcolor'>How do I contact customer support?</strong><br/>
                      You can contact our customer support team by emailing <a href="mailto:info@furryfriends.com">info@furryfriends.com</a> or calling <a href="tel:+01234567890">+012 345 67890</a> during business hours. We're here to help!
                  </li>
                  <li><strong className='customfontcolor'>What if I have a complaint about a service?</strong><br/>
                      If you have a complaint about a service, please contact our customer support team immediately. We take all feedback seriously and will work to resolve any issues promptly.
                  </li>
              </ol>
          </div>
          
          <div className="contact-info">
              <p>Still have questions?</p>
              <p>If you didn't find the answer you were looking for, please <a href="contact.html">contact us</a> at <a href="mailto:info@furryfriends.com">info@furryfriends.com</a> or call us at <a href="tel:+01234567890">+012 345 67890</a>. We're here to assist you!</p>
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
