import React , {useState , useContext} from 'react'
import {DataContext} from  '../../../context/DataContext';
import PropTypes from 'prop-types';

const Wedding = ({ title = 'Weddings', description = 'Weddings made Easy with Customized Design' }) => {
    const [selectedCategory, setSelectedCategory] = useState('MANDAP');
    const {data} = useContext(DataContext);
    const {Wedding} = data;
    const handleCategoryClick = (category) => {
      setSelectedCategory(category);
    };
    const images = Wedding[selectedCategory] || [];
    const renderImages = (images) => {
        return (
          <>
            <div className="row">
              <div className="col-12 col-md-8">
                <div className="row">
                  {images.slice(0, 3).map((img, index) => (
                    <div key={index} className="col-12 col-sm-4">
                      <img src={`https://simsonseventimages.s3.ap-south-1.amazonaws.com/EventImages${img.src}`} alt={img.alt} className="gallery-img" data-image={img.dataImage} />
                    </div>
                  ))}
                </div>
                <div className="row">
                  <div className="col-12">
                    <img src={images[3]?.src && `https://simsonseventimages.s3.ap-south-1.amazonaws.com/EventImages${images[3].src}`} alt={images[3]?.alt} className="gallery-img" data-image={images[3]?.dataImage} />
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="row">
                  {images.slice(4).map((img, index) => (
                    <div key={index} className="col-12">
                      <img src={`https://simsonseventimages.s3.ap-south-1.amazonaws.com/EventImages${img.src}`} alt={img.alt} className="gallery-img" data-image={img.dataImage} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        );
      };
    return (
      <div className="weddings-section">
        <div className="text-center">
          <h1 className="mb-3">{title}</h1>
          <p className="mb-5">{description}</p>
  
          <div className="row my-4">
            {Object.keys(Wedding).map((item) => (
              <div key={item} className="col-6 col-md-3">
                <h4 data-category={item} onClick={() => handleCategoryClick(item)}
                className={selectedCategory === item ? 'active-category' : ''}
                >
                  {item}
                </h4>
              </div>
            ))}
          </div>
          {renderImages(images)}
  
          <button type="submit" className="btn py-3">Get Free Quotes</button>
        </div>
      </div>
    );
  };
  
  Wedding.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string
  };
  
  export default Wedding;