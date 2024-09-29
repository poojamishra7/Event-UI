import React from 'react';
import serviceJson from '../assets/json/services.json';
const services =serviceJson.Services || [];
const Services = () => {
  return (
    <div className="services">
      <div className="service-section">
        <h1>Services We Offer</h1>
        <p>Convenient packages & reliable pricing.</p>
        
        <div className="cards-row">
          {services.map((service, index) => (
            <div key={index} className="card">
              <img src={`https://simsonseventimages.s3.ap-south-1.amazonaws.com/EventImages${service.src}`} alt={service.title} />
              <h2 className="card-title">{service.title}</h2>
              <p className="card-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
