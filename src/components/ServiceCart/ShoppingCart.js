    import React ,{useContext} from 'react';
    import ProductCard from '../ProductCart';
    import Additional from '../LandingPage/AdditionalForm/Additional';
    import Wedding from '../LandingPage/Weddings/Wedding';
    import CommonQuestion from '../LandingPage/AskQuestionPage/CommonQuestion';
    import { CartContext } from '../../context/CartContext';
    const products = [
        { image: 'https://simsonseventimages.s3.ap-south-1.amazonaws.com/EventImages/Birthday/Image11.png', name: 'Garlands', price: '2000' },
        { image: 'https://simsonseventimages.s3.ap-south-1.amazonaws.com/EventImages/Weddings/Image2.png', name: 'Tablecloths', price: '3500' }
    ];

    const ShoppingCart = () => {
        const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);
        console.log(cartItems);
        debugger;
        const handleQuantityChange = (newQuantity, id) => {
            const quantity = parseInt(newQuantity);
            if (quantity > 0) {
                updateQuantity(id, quantity);
            } else {
                removeFromCart(id);
            }
        };
        const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
        return (
            <div>
                <div className="product-cart">
                    <div className="p-5">
                        <div className="row">
                            <div className="col-lg-8 col-md-12 shopping-cart-section">
                                <div className="d-flex justify-content-between">
                                    <h3>Shopping Cart</h3>
                                    <h5 className="price-title">Price  {total}</h5>
                                </div>
                                <hr />
                                {cartItems && cartItems.length === 0 ? (
                                    <p>Cart is empty</p>
                                    ) : (
                                        cartItems.map((product, index) => (
                                            <ProductCard
                                                key={index}
                                                image={product.image}
                                                name={product.name}
                                                price={product.price}
                                                quantity={product.quantity} // Pass the current quantity
                                                onQuantityChange={(newQuantity) => handleQuantityChange(newQuantity, product.id)} // Handle quantity change
                                                onRemove={() => removeFromCart(product.id)} // Handle removal
                                            />
                                        ))
                                    )
                                }
                                
                                <hr />
                            </div>

                            <div className="col-lg-4 col-md-12 sidebar-section">
                                <div className="summary-section p-4">
                                    <h5>Subtotal ({cartItems.length} Items):<b> ₹{total}</b></h5>
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
                                                        <img src={product.image} alt="" className="product-image" />
                                                    </div>
                                                    <div className="col-8">
                                                        <h6>{product.name}</h6>
                                                        <a href="/" className="">In Stock</a>
                                                        <div className="gift-text">
                                                            <input type="checkbox" /> This Will Be A Gift <a href="/">Learn More</a>
                                                        </div>
                                                    </div>
                                                </>
                                            ))}
                                        </div>
                                    </div>
                                    <a href="/" className="view-all-link">View All</a>
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
