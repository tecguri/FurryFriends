import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';


export default function Homepage() {
  return (
    <>
        <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="/slider1.png" className="d-block w-100" alt="slider1" />
                </div>
                <div className="carousel-item">
                    <img src="/slider2.png" className="d-block w-100" alt="slider2" />
                </div>
                <div className="carousel-item">
                    <img src="/slider3.png" className="d-block w-100" alt="slider3" />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>

        <div className="container text-left mt-5">
            <div className="row">
                <div className="col-sm-4"><img src="/goals.jpg" className="d-block w-100" alt="aboutus image" /></div>
                <div className="col-sm-8">
                    <div className="border-start border-5 border-primary ps-5 mb-5">
                        <h6 className="text-primary text-uppercase">About Us</h6>
                        <h1 className="display-5 text-uppercase mb-0">We Keep Your Pets Happy All Time</h1>
                    </div>
                    <h4 className="text-body mb-4">Exceptional Care for Your Furry Family Members</h4>
                    <div className="bg-light p-4">
                    <ul className="nav nav-pills justify-content-between mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item w-50" role="presentation">
                            <button className="nav-link text-uppercase w-100 active" id="pills-1-tab" data-bs-toggle="pill" data-bs-target="#pills-1" type="button" role="tab" aria-controls="pills-1" aria-selected="true">Our Mission</button>
                        </li>
                        <li className="nav-item w-50" role="presentation">
                            <button className="nav-link text-uppercase w-100" id="pills-2-tab" data-bs-toggle="pill" data-bs-target="#pills-2" type="button" role="tab" aria-controls="pills-2" aria-selected="false">Our Vission</button>
                        </li>
                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-1" role="tabpanel" aria-labelledby="pills-1-tab">
                            <p className="mb-0">At FurryFriends, our mission is to provide exceptional and compassionate care for pets, ensuring their happiness, health, and well-being at all times. We are dedicated to creating a safe, nurturing environment where pets can thrive, and pet owners can have peace of mind knowing their beloved companions are in expert hands.</p>
                        </div>
                        <div className="tab-pane fade" id="pills-2" role="tabpanel" aria-labelledby="pills-2-tab">
                            <p className="mb-0">Our vision is to be the leading pet care provider known for our unwavering commitment to excellence, innovation in pet care services, and our passion for enhancing the lives of pets and their families. We strive to set the standard for pet care through continuous improvement, education, and a genuine love for animals, making a positive impact on the communities we serve.</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            {/* <div className="row">
                <div className="col-sm">col-sm</div>
                <div className="col-sm">col-sm</div>
                <div className="col-sm">col-sm</div>
            </div> */}
        </div>



        <div className="container-fluid py-5">
            <div className="container">
                <div className="border-start border-5 border-primary ps-5 mb-5" style={{maxWidth:"600px"}}>
                    <h6 className="text-primary text-uppercase">Services</h6>
                    <h1 className="display-5 text-uppercase mb-0">Our Excellent Pet Care Services</h1>
                </div>
                <div className="row g-5">
                    <div className="col-md-6">
                        <div className="service-item bg-light d-flex p-4">
                            <i className="fa fa-shopping-basket fa-2x me-4"></i>
                            <div>
                                <h5 className="text-uppercase mb-3">Pet Boarding</h5>
                                <p>Our pet boarding services provide a safe and comfortable home-away-from-home for your pets.</p>
                                <Link className='text-primary text-uppercase' to="ourservices">Read More<i className="fa fa-chevron-right"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="service-item bg-light d-flex p-4">
                            <i className="fa fa-heart fa-2x me-4"></i>
                            <div>
                                <h5 className="text-uppercase mb-3">Pet Feeding</h5>
                                <p>We ensure your pets receive nutritious and well-balanced meals tailored to their specific dietary needs.</p>
                                <Link className='text-primary text-uppercase' to="ourservices">Read More<i className="fa fa-chevron-right"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="service-item bg-light d-flex p-4">
                            <i className="fa fa-paw fa-2x me-4"></i>
                            <div>
                                <h5 className="text-uppercase mb-3">Pet Grooming</h5>
                                <p>Our professional grooming services keep your pets looking and feeling their best.</p>
                                <Link className='text-primary text-uppercase' to="ourservices">Read More<i className="fa fa-chevron-right"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="service-item bg-light d-flex p-4">
                            <i className="fa fa-bookmark fa-2x me-4"></i>
                            <div>
                                <h5 className="text-uppercase mb-3">Pet Training</h5>
                                <p>Our training programs are designed to teach your pets essential behaviors and commands.</p>
                                <Link className='text-primary text-uppercase' to="ourservices">Read More<i className="fa fa-chevron-right"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="service-item bg-light d-flex p-4">
                            <i className="fa fa-heartbeat fa-2x me-4"></i>
                            <div>
                                <h5 className="text-uppercase mb-3">Pet Exercise</h5>
                                <p>Regular exercise is crucial for your pet's health; we provide engaging activities to keep them active.</p>
                                <Link className='text-primary text-uppercase' to="ourservices">Read More<i className="fa fa-chevron-right"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="service-item bg-light d-flex p-4">
                            <i className="fa fa-plus-square fa-2x me-4"></i>
                            <div>
                                <h5 className="text-uppercase mb-3">Pet Treatment</h5>
                                <p>Our team is equipped to handle a variety of pet treatments, from administering medications to special care routines.</p>
                                <Link className='text-primary text-uppercase' to="ourservices">Read More<i className="fa fa-chevron-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container-fluid py-5">
            <div className="container">
                <div className="border-start border-5 border-primary ps-5 mb-5" style={{maxWidth:"600px"}}>
                    <h6 className="text-primary text-uppercase">Team Members</h6>
                    <h1 className="display-5 text-uppercase mb-0">Qualified Pets Care Professionals</h1>
                </div>


                <div id="carouselExampleIndicators" className="carousel slide">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        {/* <img src="/team-1.jpg" className="d-block w-100" alt="..." /> */}
                        <Row xs={1} md={2} className="g-4">
                            <Col>
                                <Card>
                                    <Card.Img variant="top" src="/t1.jpg" height="200px" style={{objectFit:"cover"}} />
                                    <Card.Body>
                                    <Card.Title>Vanessa Tobias, RVN</Card.Title>
                                    <div className="star-rating">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                    <Card.Text>
                                        Vanessa provides mobile clinic services, pet sitting, and pet taxi services in Shoreham and surrounding areas​.
                                    </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <Card.Img variant="top" src="/t2.jpg" height="200px" style={{objectFit:"cover"}} />
                                    <Card.Body>
                                    <Card.Title>Rosie Upperton</Card.Title>
                                    <div className="star-rating">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star-half-alt"></i>
                                    </div>
                                    <Card.Text>
                                        Rosie offers dog walking, home boarding, and pet sitting. She has completed her pet first aid course and is fully insured and licensed.
                                    </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>

                        </div>
                        <div className="carousel-item">
                        {/* <img src="/team-2.jpg" className="d-block w-100" alt="..." /> */}
                            <Row xs={1} md={2} className="g-4">
                                <Col>
                                    <Card>
                                        <Card.Img variant="top" src="/t3.jpg" height="200px" style={{objectFit:"cover"}} />
                                        <Card.Body>
                                            <Card.Title>Jordan Aaron, CPACP</Card.Title>
                                            <div className="star-rating">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star-half-alt"></i>
                                            </div>
                                            <Card.Text>Based in Hawthorn Woods, IL, Jordan is certified by the Professional Animal Care Certification Council (PACCC).</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card>
                                        <Card.Img variant="top" src="/t4.jpeg" height="200px" style={{objectFit:"cover"}} />
                                        <Card.Body>
                                            <Card.Title>Emily Abbott, CPACP</Card.Title>
                                            <div className="star-rating">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                            <Card.Text>
                                                Located in Stevens Point, WI, Emily is also certified by PACCC, highlighting her skills in professional pet care.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                        <div className="carousel-item">
                        {/* <img src="/team-3.jpg" className="d-block w-100" alt="..." /> */}
                            <Row xs={1} md={2} className="g-4">
                                <Col>
                                    <Card>
                                        <Card.Img variant="top" src="/t5.jpg" height="200px" style={{objectFit:"cover"}} />
                                        <Card.Body>
                                        <Card.Title>Vesna Ader, CPACM</Card.Title>
                                        <div className="star-rating">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </div>
                                        <Card.Text>
                                            Operating out of Portland, OR, Vesna holds a certification as a Certified Professional Animal Care Manager.
                                        </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card>
                                        <Card.Img variant="top" src="/t6.jpg" height="200px" style={{objectFit:"cover"}} />
                                        <Card.Body>
                                        <Card.Title>Mayrin Aguilar, CPACP</Card.Title>
                                        <div className="star-rating">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star-half-alt"></i>
                                        </div>
                                        <Card.Text>
                                            Working at Social Pet in Pineville, NC, Mayrin's certification ensures she provides excellent care and supervision for pets at the facility.
                                        </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

            </div>
        </div>
    </>
  )
}
