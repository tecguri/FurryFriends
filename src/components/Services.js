import React, {useEffect} from 'react'

export default function Services() {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  return (
    <>
        <div className="jumbotron jumbotron-fluid text-center text-white">
            <img src="/services_bg.jpg" alt="Hero Banner Image" />
        </div>

        <div className="container mt-4">
            <h1 className='customfontcolor'>Our Services</h1>

            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Veterinary Care
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        At our clinic, we provide comprehensive veterinary care to ensure your pet's health and happiness. Routine check-ups and vaccinations keep your furry friend in peak condition, while our emergency care services are always available for urgent health concerns. Our specialized treatments cover a wide range of specific health needs, including dental care, dermatology, and more, ensuring that your pet receives the best possible care for their unique requirements.
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Grooming
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        Our professional grooming services help keep your pet looking and feeling their best. We offer bathing and brushing to maintain a clean and well-groomed coat, along with a variety of haircuts and styling options to suit your pet’s breed and personality. Regular nail trimming, ear, and teeth cleaning are also available to ensure your pet's overall hygiene and health, making them feel comfortable and happy.
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Training
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        We offer a variety of training programs to enhance your pet's behavior and skills. Our puppy training classes provide a strong foundation in obedience and socialization, while behavioral training addresses specific issues such as aggression and anxiety. For more advanced learning, we offer training in commands and tricks, and our group classes provide socialization and shared learning experiences, strengthening the bond between you and your pet.
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        Pet Sitting and Boarding
                    </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        Our pet sitting and boarding services ensure your pet is well cared for in your absence. In-home pet sitting allows your pet to stay in the comfort of their own home, while our boarding facilities provide a safe and comfortable environment. We also offer daycare services, providing a stimulating and fun environment during the day, giving you peace of mind knowing your pet is happy and well-cared for.
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        Pet Walking
                    </button>
                    </h2>
                    <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        Our pet walking services keep your pet active and healthy. We offer daily walks to ensure regular exercise, and group walks to provide socialization with other dogs. For more adventurous pets, our specialty walks include long hikes and playtime in the park, ensuring your pet enjoys a varied and stimulating routine, tailored to their individual needs.
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                        Pet Nutrition
                    </button>
                    </h2>
                    <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        Proper nutrition is vital for your pet's health, and our dietary consultations provide expert advice on the best diet for your pet. We create custom meal plans tailored to meet your pet’s specific dietary needs and offer a range of nutritional supplements to support their overall health. Our goal is to ensure your pet receives balanced, nutritious meals that contribute to their well-being and longevity.
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                        Pet Transportation
                    </button>
                    </h2>
                    <div id="collapseSeven" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        We offer safe and reliable pet transportation services to ensure your pet travels comfortably and securely. Whether you need transport to and from veterinary appointments or assistance with travel arrangements for vacations or relocations, we provide professional and caring service to meet all your pet’s transportation needs, making travel stress-free for both you and your pet.
                    </div>
                    </div>
                </div>
            </div>





            <p className='mt-4'>At FurryFriends, we are dedicated to providing a wide range of high-quality pet care services to ensure the health, happiness, and well-being of your beloved pets. Our comprehensive platform makes it easy for pet owners to find and book the best services tailored to their pets' needs.</p>

            <h2 className='customfontcolor'>Our Services Include:</h2>
            
            <h3 className='customfontcolor mt-4'>1. Veterinary Care</h3>
            <ul className="values-list">
                <li><strong>Routine Check-ups:</strong> Schedule regular health check-ups to keep your pet in top condition.</li>
                <li><strong>Vaccinations:</strong> Ensure your pet is protected with up-to-date vaccinations.</li>
                <li><strong>Emergency Care:</strong> Access immediate veterinary care for urgent health issues.</li>
                <li><strong>Specialized Treatments:</strong> Find specialists for specific health concerns, including dental care, dermatology, and more.</li>
            </ul>
            
            <h3 className='customfontcolor'>2. Grooming</h3>
            <ul className="values-list">
                <li><strong>Bathing and Brushing:</strong> Keep your pet clean and well-groomed with professional bathing and brushing services.</li>
                <li><strong>Haircuts and Styling:</strong> Choose from a variety of styles and trims to suit your pet’s breed and personality.</li>
                <li><strong>Nail Trimming:</strong> Maintain your pet’s comfort and health with regular nail trims.</li>
                <li><strong>Ear and Teeth Cleaning:</strong> Ensure your pet's ears and teeth are clean and healthy.</li>
            </ul>

            <h3 className='customfontcolor'>3. Training</h3>
            <ul className="values-list">
                <li><strong>Puppy Training:</strong> Start your puppy off on the right paw with basic obedience and socialization classes.</li>
                <li><strong>Behavioral Training:</strong> Address specific behavioral issues such as aggression, anxiety, and housebreaking.</li>
                <li><strong>Advanced Training:</strong> Teach your pet advanced commands and tricks to enhance their skills and bond with you.</li>
                <li><strong>Group Classes:</strong> Join group training sessions for socialization and shared learning experiences.</li>
            </ul>

            <h3 className='customfontcolor'>4. Pet Sitting and Boarding</h3>
            <ul className="values-list">
                <li><strong>In-Home Pet Sitting:</strong> Have a trusted pet sitter care for your pet in the comfort of your home.</li>
                <li><strong>Boarding:</strong> Ensure your pet is well cared for while you’re away with our safe and comfortable boarding facilities.</li>
                <li><strong>Daycare:</strong> Provide your pet with a fun and stimulating environment during the day with our daycare services.</li>
            </ul>

            <h3 className='customfontcolor'>5. Pet Walking</h3>
            <ul className="values-list">
                <li><strong>Daily Walks:</strong> Schedule regular walks to keep your pet active and healthy.</li>
                <li><strong>Group Walks:</strong> Socialize your pet with other dogs in supervised group walks.</li>
                <li><strong>Specialty Walks:</strong> Choose from various types of walks, including long hikes and playtime in the park.</li>
            </ul>

            <h3 className='customfontcolor'>6. Pet Nutrition</h3>
            <ul className="values-list">
                <li><strong>Dietary Consultations:</strong> Get expert advice on the best diet for your pet’s health and well-being.</li>
                <li><strong>Custom Meal Plans:</strong> Create personalized meal plans tailored to your pet’s dietary needs.</li>
                <li><strong>Nutritional Supplements:</strong> Find the right supplements to support your pet’s health.</li>
            </ul>

            <h3 className='customfontcolor'>7. Pet Transportation</h3>
            <ul className="values-list">
                <li><strong>Safe Transport:</strong> Arrange for safe and reliable transportation for your pet to and from appointments.</li>
                <li><strong>Travel Assistance:</strong> Get help with pet travel arrangements for vacations or relocations.</li>
            </ul>

            <h2 className='customfontcolor'>Why Choose FurryFriends?</h2>
            <ul className="values-list">
                <li><strong>Comprehensive Services:</strong> We offer a one-stop solution for all your pet care needs.</li>
                <li><strong>Trusted Providers:</strong> Our network of experienced and certified providers ensures your pet receives the best care.</li>
                <li><strong>User-Friendly Platform:</strong> Easily search, book, and manage your pet care services online.</li>
                <li><strong>Personalized Care:</strong> Tailor services to meet your pet’s unique needs and preferences.</li>
            </ul>

            <h2 className='customfontcolor'>How It Works</h2>
            <ul className="values-list">
                <li><strong>Browse Services:</strong> Explore our wide range of pet care services and choose what your pet needs.</li>
                <li><strong>Book Online:</strong> Use our user-friendly platform to schedule appointments and services at your convenience.</li>
                <li><strong>Enjoy Peace of Mind:</strong> Rest assured knowing your pet is in expert hands with our trusted service providers.</li>
            </ul>

            <h2 className='customfontcolor'>Get Started Today!</h2>
            <p>Join the FurryFriends community and provide your pet with the exceptional care they deserve. Explore our services and book your next appointment today.</p>

            <h2 className='customfontcolor'>Contact Us</h2>
            <p>If you have any questions or need assistance, please contact us at <a href="mailto:info@furryfriends.com">info@furryfriends.com</a>. We are here to help!</p>
        </div>
    </>
  )
}
