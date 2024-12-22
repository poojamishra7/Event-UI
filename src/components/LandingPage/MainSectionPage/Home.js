import React from 'react'
import InquiryForm from './InquiryForm';
const Home = () => {
    const save_enquiry_data = () =>{

    };
  return (
    <div className="homeSection">
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active"  style={{
              background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.6)), url(${'https://simsonseventimages.s3.ap-south-1.amazonaws.com/EventImages/Weddings/Image3.png'})`,
              backgroundSize: 'cover'
            }}>
                <div className="carousel-caption d-md-block">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-7 col-md-12 mainHeading">
                                <h1 className="display-3">Effortless celebrations, Just A Click Away. Book now</h1>
                                <p className="mt-4 mb-3">Book the best every special events.</p>
                            </div>
                            <div className="col-lg-5 col-md-12 form-section">
                                <div className="form-container">
                                    <h3>Speak To Our Expert</h3>
                                    <p>Have all your questions answered and get a free competitive quote.</p>
                                    <InquiryForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Home
