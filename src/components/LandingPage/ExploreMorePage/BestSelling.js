import React , {useContext, useState} from 'react';
import {DataContext} from  '../../../context/DataContext';
const BestSelling = () => {
    const [selectedCategory, setSelectedCategory] = useState('weddings');
    const {data} = useContext(DataContext);
    const {BestSelling} = data;
    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };
    const images = BestSelling[selectedCategory] || [];
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
    <div className="best-selling">
    <div className="container text-center mb-5">
        <h1 className="mb-5">Explore more</h1>
        <div className="row mb-4 align-item-justify text-justify">
            {Object.keys(BestSelling).map((item) => (
              <div key={item} className="col-6 col-md-3">
                <h4 data-category={item} onClick={() => handleCategoryClick(item)} className={selectedCategory === item ? 'active-category' : ''}>
                  {item.toUpperCase()}
                </h4>
              </div>
            ))}
        </div>
        {renderImages(images)}
        <button type="submit" className="btn py-3">Get Free Quotes</button>
    </div>
    </div>
  )
}

export default BestSelling
