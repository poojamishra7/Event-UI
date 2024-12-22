import React from 'react';
import serviceJson from '../../../assets/json/services.json';
const Additional = () => {
  const items = serviceJson.Additional || [];
  const sections = [items.slice(0, 3), items.slice(3, 6), items.slice(6)];

  return (
    <div className="additional-elements-section mb-5">
      <h1 className="text-center mb-4 fw-bold">Additional Elements</h1>
      <div className="row">
        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="col-lg-4 col-md-12">
            <div className="row">
              {section.map((item, itemIndex) => (
                <div key={itemIndex} className="col-md-4 col-sm-4 icon-title">
                  <div className="icon-container">
                    <img src={`https://simsonseventimages.s3.ap-south-1.amazonaws.com/EventImages${item.src}`} alt={item.label} className="icon-image" />
                    <div className="overlay"></div>
                    <button className="popup-button">Add</button>
                  </div>
                  <p className="py-2">{item.label}</p>
                  <h6>Price <span >{item.price}</span></h6>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Additional;
