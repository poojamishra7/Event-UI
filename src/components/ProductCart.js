import React from 'react';

const ProductCard = ({ image, name, price }) => {
  return (
    <div className="row product-row">
      <div className="col-4 col-md-2">
        <img src={image} alt="Product Image" className="product-image" />
      </div>
      <div className="col-8 col-md-8">
        <h5>{name}</h5>
        <a href="#" className="">In Stock</a>
        <div className="gift-text">
          <input type="checkbox" /> This Will Be A Gift <a href="#">Learn More</a>
        </div>
        <div className="d-flex align-items-center">
          <div className="quantity-dropdown ml-2">
            <select className="form-control form-control-sm">
              <option selected>Qty: 1</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
            <i className="fas fa-chevron-down dropdown-icon"></i>
          </div>
          <div className="action-links ml-3 px-4">
            <a href="#">Delete</a>
            <a href="#">Save for Later</a>
            <a href="#">See more like this</a>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-2 col-sm-12 d-flex price">
        <h5 className=""><b> ₹{price}</b></h5>
      </div>
    </div>
  );
};

export default ProductCard;
