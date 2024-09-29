import React from 'react';
import ProductCard from './ProductCart';
import Additional from './Additional';
import Wedding from './Wedding';
import CommonQuestion from './CommonQuestion';

const products = [
    { image: 'assets/images/Birthday/Rectangle 12-10.png', name: 'Garlands', price: '2000' },
    { image: 'assets/images/Weddings/Rectangle 15.png', name: 'Tablecloths', price: '3500' }
];

const ShoppingCart = () => {
    return (
        <div>
            <div className="product-cart">
                <div className="p-5">
                    <div className="row">
                        <div className="col-lg-8 col-md-12 shopping-cart-section">
                            <div className="d-flex justify-content-between">
                                <h3>Shopping Cart</h3>
                                <h5 className="price-title">Price</h5>
                            </div>
                            <hr />
                            {products.map((product, index) => (
                                <ProductCard
                                    key={index}
                                    image={product.image}
                                    name={product.name}
                                    price={product.price}
                                />
                            ))}
                            <hr />
                        </div>

                        <div className="col-lg-4 col-md-12 sidebar-section">
                            <div className="summary-section p-4">
                                <h5>Subtotal (2 Items):<b> ₹5500</b></h5>
                                <div className="py-2">
                                    <input type="checkbox" /> This Order Contains A Gift
                                </div>
                                <button className="btn mt-4 px-5 py-3 w-100">Proceed to Buy</button>
                            </div>
                            <div className="summary-section p-4 mt-4">
                                <div className="mb-4">
                                    <h5 className="mb-3">Related Products</h5>
                                    <div className="row">
                                        {products.map((product, index) => (
                                            <>
                                                <div key={index} className="col-4">
                                                    <img src={product.image} alt="Product Image" className="product-image" />
                                                </div>
                                                <div class="col-8">
                                                    <h6>{product.name}</h6>
                                                    <a href="#" class="">In Stock</a>
                                                    <div class="gift-text">
                                                        <input type="checkbox" /> This Will Be A Gift <a href="#">Learn More</a>
                                                    </div>
                                                </div>
                                            </>
                                        ))}
                                    </div>
                                </div>
                                <a href="#" className="view-all-link">View All</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Additional />
            <Wedding title="Best Deals On Weddings" description="" />
            <CommonQuestion />
        </div>
    );
};

export default ShoppingCart;
