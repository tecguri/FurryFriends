import React from 'react'

export default function AboutUs() {
  return (
    <>
        <div className="jumbotron jumbotron-fluid text-center text-white">
            <img src="/aboutus_image.jpg" alt="Hero Banner Image" />
            <div className="container">
                {/* <h1 className="display-4">About Us</h1> */}
                {/* <p className="lead">Committed to protecting your privacy.</p> */}
            </div>
        </div>

        <div className="container mt-2">
            <h1 className='customfontcolor'>About Us</h1>
            <p>Welcome to FurryFriends!</p>
            <p>At FurryFriends, we are passionate about pets and dedicated to providing exceptional care and services to ensure their happiness, health, and well-being. Our mission is to create a comprehensive platform where pet owners can easily access a wide range of pet care services, from veterinary care and grooming to training and more.</p>

            <h3 className='customfontcolor'>Our Story</h3>
            <p>FurryFriends was founded by a team of pet lovers who recognized the need for a reliable, user-friendly platform that connects pet owners with trusted service providers. We believe that every pet deserves the best care possible, and we are committed to making pet care convenient, accessible, and efficient for pet owners everywhere.</p>

            <h3 className='customfontcolor'>Our Mission</h3>
            <p>Our mission is simple: to promote animal welfare and wellness by providing a seamless and comprehensive platform for pet care services. We aim to improve the overall well-being of pets by connecting their owners with relevant service providers and offering a user-friendly interface for easy access to essential pet care solutions.</p>

            <h3 className='customfontcolor'>Our Values</h3>
            <ul className="values-list">
                <li><strong>Compassion:</strong> We care deeply about pets and their well-being. Every decision we make is guided by our commitment to providing compassionate care.</li>
                <li><strong>Quality:</strong> We strive for excellence in everything we do, ensuring that our services meet the highest standards of quality and reliability.</li>
                <li><strong>Innovation:</strong> We embrace innovation and continuously seek new ways to enhance our platform and improve the user experience.</li>
                <li><strong>Community:</strong> We believe in the power of community and work to foster a supportive environment where pet owners can share their experiences and advice.</li>
            </ul>

            <h3 className='customfontcolor'>Our Team</h3>
            <p>FurryFriends is powered by a dedicated team of professionals who are experts in their respective fields. Meet our core team:</p>
            <ul className="values-list">
                <li><strong>Gursahib Singh:</strong> Developer</li>
                <li><strong>Harman Kaur:</strong> Business Analyst</li>
                <li><strong>Rajinder Kaur:</strong> Q.A. & B.D.E.</li>
            </ul>
            <p>Together, we bring a wealth of experience and a shared passion for pets to ensure that FurryFriends remains a trusted resource for pet owners.</p>

            <h3 className='customfontcolor'>What We Offer</h3>
            <p>FurryFriends provides a wide range of services to meet all your pet care needs:</p>
            <ul className="values-list">
                <li><strong>Veterinary Care:</strong> Find and book appointments with top veterinarians.</li>
                <li><strong>Grooming:</strong> Schedule grooming sessions to keep your pet looking and feeling their best.</li>
                <li><strong>Training:</strong> Access training classes to help your pet learn new skills and behaviors.</li>
                <li><strong>Educational Resources:</strong> Explore articles, videos, and expert advice to help you make informed decisions about your pet’s care.</li>
                {/* <li><strong>Real-Time Communication:</strong> Connect with service providers, ask questions, and receive updates about your pet’s care.</li> */}
            </ul>

            <h3 className='customfontcolor'>Why Choose FurryFriends?</h3>
            <ul className="values-list">
                <li><strong>User-Friendly Platform:</strong> Our easy-to-use platform makes it simple to find, book, and manage pet care services.</li>
                <li><strong>Trusted Providers:</strong> We partner with reputable service providers to ensure your pet receives the best care.</li>
                <li><strong>Comprehensive Care:</strong> From veterinary services to grooming and training, we offer everything you need in one place.</li>
                <li><strong>Community Support:</strong> Share your experiences and get advice from other pet owners in our community.</li>
            </ul>

            <h3 className='customfontcolor'>Get in Touch</h3>
            <p>We love hearing from fellow pet lovers! If you have any questions, suggestions, or just want to say hello, please feel free to contact us at <a href="mailto:info@furryfriends.com">info@furryfriends.com</a>.</p>
            <p>Join us in our mission to provide exceptional care for pets and make pet ownership a joyful and rewarding experience.</p>
        </div>
    </>
  )
}
