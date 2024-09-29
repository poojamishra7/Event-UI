import React from 'react'
import './OurOffice.css';
const OurOffice = () => {
  return (
    <div className='our-office bg-office'>
    <div className="text-white p-5 text-center">
        <h2>Our Office</h2>
        <p>Visit us here for a detailed in-person discussion with one of our wedding experts!</p>
        <button className="btn btn-outline-light mt-4 mb-2 px-5">Pune</button>
        <div className="row justify-content-center align-items-center">
            <div className="col-md-7 p-5">
                <div className="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.4159327253045!2d73.84778421425882!3d18.516726287411117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c07e703f7d69%3A0xc1fa769d979be4f6!2sPune%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1625797362221!5m2!1sen!2sus" width="100%" height="400" style={{ border: '0', borderRadius: '43px' }} allowFullScreen loading="lazy"></iframe>
                </div>
            </div>
            <div className="col-md-5 text-start">
                <div className="row mb-3 p-4">
                    <div className="row mb-3 py-1">
                        <div className="d-flex align-items-center">
                            <i className="fa-solid fa-location-crosshairs py-1"></i>
                            <h5 className="px-3 py-1">Address</h5>
                        </div>
                        <p className="py-1">123 Wedding Lane, Pune, Maharashtra, India</p>
                    </div>

             
                <hr className="bg-light" />
                <div className="row mb-3 py-1">
                    <div className="d-flex align-items-center">
                        <i className="fa-solid fa-phone-volume py-1"></i>
                        <h5 className="px-3 py-1">Contact Us</h5>
                    </div>
                        <p className="py-1">+91 9876543210</p>
                </div>
                <hr className="bg-light" />
                <div className="row py-1">
                    <div className="py-1"><h5>Do Follow Us On</h5></div>
                    <div className="d-flex align-items-center">
                        <i className="fa-brands fa-instagram"></i>
                        <p className="mb-0 px-3">@ourweddinginsta</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default OurOffice
