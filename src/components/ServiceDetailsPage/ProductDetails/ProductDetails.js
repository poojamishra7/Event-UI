import React from "react";
import "./ProductDetails.css";
const ProductDetails = () => {
  return (
    <>
      {/* product details  */}
      <section className="product-detail">
        <div className="p-5">
          <div className="row">
            <div className="col-md-6 col-12">
              <div
                id="productCarousel"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner ">
                  <div className="carousel-item active">
                    {" "}
                     
                    <img
                      src="assets/images/Birthday/Rectangle 12-2.png"
                      className="d-bloc/k w-100"
                      alt="Product Image 1"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="assets/images/Birthday/Rectangle 12-2.png"
                      className="d-bloc/k w-100"
                      alt="Product Image 2"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="assets/images/Birthday/Rectangle 12-10.png"
                      className="d-bloc/k w-100"
                      alt="Product Image 3"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="assets/images/Birthday/Rectangle 12-11.png"
                      className="d-bloc/k w-100"
                      alt="Product Image 4"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="assets/images/Birthday/Rectangle 12-2.png"
                      className="d-bloc/k w-100"
                      alt="Product Image 5"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="assets/images/Birthday/Rectangle 12-2.png"
                      className="d-bloc/k w-100"
                      alt="Product Image 6"
                    />
                  </div>
                </div>

                <ol className="carousel-indicators">
                  <li
                    data-bs-target="#productCarousel"
                    data-bs-slide-to="0"
                    className="active"
                  >
                    <div className="indicator-image">
                      <img
                        src="assets/images/Birthday/Rectangle 12-1.png"
                        className="d-bloc/k w-100 img-thumbnail"
                        alt="Thumbnail 1"
                      />
                      <div className="overlay">
                        <i className="fa fa-check"></i>
                      </div>
                    </div>
                  </li>
                  <li data-bs-target="#productCarousel" data-bs-slide-to="1">
                    <div className="indicator-image">
                      <img
                        src="assets/images/Birthday/Rectangle 12-1.png"
                        className="d-block w-100 img-thumbnail"
                        alt="Thumbnail 2"
                      />
                      <div className="overlay">
                        <i className="fa fa-check"></i>
                      </div>
                    </div>
                  </li>
                  <li data-bs-target="#productCarousel" data-bs-slide-to="2">
                    <div className="indicator-image">
                      <img
                        src="assets/images/Birthday/Rectangle 12-10.png"
                        className="d-block w-100 img-thumbnail"
                        alt="Thumbnail 3"
                      />
                      <div className="overlay">
                        <i className="fa fa-check"></i>
                      </div>
                    </div>
                  </li>
                  <li data-bs-target="#productCarousel" data-bs-slide-to="3">
                    <div className="indicator-image">
                      <img
                        src="assets/images/Birthday/Rectangle 12-11.png"
                        className="d-block w-100 img-thumbnail"
                        alt="Thumbnail 4"
                      />
                      <div className="overlay">
                        <i className="fa fa-check"></i>
                      </div>
                    </div>
                  </li>
                  <li data-bs-target="#productCarousel" data-bs-slide-to="4">
                    <div className="indicator-image">
                      <img
                        src="assets/images/Birthday/Rectangle 12-2.png"
                        className="d-block w-100 img-thumbnail"
                        alt="Thumbnail 5"
                      />
                      <div className="overlay">
                        <i className="fa fa-check"></i>
                      </div>
                    </div>
                  </li>
                  <li data-bs-target="#productCarousel" data-bs-slide-to="5">
                    <div className="indicator-image">
                      <img
                        src="assets/images/Birthday/Rectangle 12-2.png"
                        className="d-block w-100 img-thumbnail"
                        alt="Thumbnail 6"
                      />
                      <div className="overlay">
                        <i className="fa fa-check"></i>
                      </div>
                    </div>
                  </li>
                </ol>
              </div>
              <h4>About This Item</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>{" "}
               
            </div>

            <div className="col-md-6 col-12">
              <div className="p-3 pt-0">
                <h4 className="product-title">
                  Your occasion, their celebration - Plan a birthday that gives
                  back. Make Your Day Count. Celebrate your special day by
                  helping children in need.
                </h4>
                <div className="card-info">
                  <p>
                    4.2 <i className="fa fa-star text-warning"></i>{" "}
                    <span>(56)</span>
                  </p>
                  <h2>₹3000</h2>
                </div>

                <div className="proDesc">
                  <h6>Color</h6>
                  <p className="vote">Rose Gold Birthday Combo - 49Pcs</p>
                  <div className="productPhoto">
                    <div className="row">
                      <div className="col-md-2 col-4">
                        <div className="image-container">
                          <img
                            src="assets/images/Weddings/Rectangle 15.png"
                            alt="Product Image"
                          />
                          <div className="overlay">
                            <i
                              className="fa fa-check"
                              style={{ color: "#fff" }}
                            ></i>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-2 col-4">
                        <div className="image-container">
                          <img
                            src="assets/images/Weddings/Rectangle 15.png"
                            alt="Product Image"
                          />
                          <div className="overlay">
                            <i
                              className="fa fa-check"
                              style={{ color: "#fff" }}
                            ></i>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-2 col-4">
                        <div className="image-container">
                          <img
                            src="assets/images/Weddings/Rectangle 15.png"
                            alt="Product Image"
                          />
                          <div className="overlay">
                            <i
                              className="fa fa-check"
                              style={{ color: "#fff" }}
                            ></i>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-2 col-4">
                        <div className="image-container">
                          <img
                            src="assets/images/Weddings/Rectangle 15.png"
                            alt="Product Image"
                          />
                          <div className="overlay">
                            <i
                              className="fa fa-check"
                              style={{ color: "#fff" }}
                            ></i>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-2 col-4">
                        <div className="image-container">
                          <img
                            src="assets/images/Weddings/Rectangle 15.png"
                            alt="Product Image"
                          />
                          <div className="overlay">
                            <i
                              className="fa fa-check"
                              style={{ color: "#fff" }}
                            ></i>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-2 col-4">
                        <div className="image-container">
                          <img
                            src="assets/images/Weddings/Rectangle 15.png"
                            alt="Product Image"
                          />
                          <div className="overlay">
                            <i
                              className="fa fa-check"
                              style={{ color: "#fff" }}
                            ></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h6>Material</h6>
                  <p className="vote">Metallic, Paper</p>

                  <h6>Included</h6>
                  <p className="vote">
                    1 Pc net curtain, 1 Pc light, 1 Pc pink happy birthday
                  </p>

                  <h6>Components</h6>
                  <p className="vote">
                    Banner (cardstock), 1 Pc golden penant banner (cardstock),
                    40 Pcs rose gold and white metallic ball...{" "}
                    <a href="">See More</a>
                  </p>

                  <h6>Net Quantity</h6>
                  <p className="vote">1 Count</p>

                  <h6>Brand</h6>
                  <p className="vote">Party Propz</p>
                </div>

                <div className="d-flex">
                  <button type="submit" className="btn mx-0">
                    Add to Cart
                  </button>
                  <button type="submit" className="btn proDetBtn2">
                    Add to Wishlist
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* photo Gallary */}
      <section className="ws2 weddings-section">
        <div className="">
          <h1 className="mb-3">Photo Gallery</h1>

          <div className="row">
            <div className="col-12 col-md-8">
              <div className="row">
                <div className="col-12 col-sm-4">
                  <img
                    src="assets/images/Weddings/Rectangle 14.png"
                    alt="Image 1"
                    className="gallery-img"
                  />
                </div>
                <div className="col-12 col-sm-4 img-rad">
                  <img
                    src="assets/images/Weddings/Rectangle 18.png"
                    alt="Image 2"
                    className="gallery-img"
                  />
                </div>
                <div className="col-12 col-sm-4">
                  <img
                    src="assets/images/Weddings/Rectangle 15.png"
                    alt="Image 3"
                    className="gallery-img"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-12 ">
                  <img
                    src="assets/images/Weddings/Rectangle 19.png"
                    alt="Image 4"
                    className="gallery-img"
                  />
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="row">
                <div className="col-12">
                  <img
                    src="assets/images/Weddings/Rectangle 17.png"
                    alt="Image 5"
                    className="gallery-img"
                  />
                </div>
                <div className="col-12">
                  <img
                    src="assets/images/Weddings/Rectangle 16.png"
                    alt="Image 6"
                    className="gallery-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Additonal Element  */}
      <section className="aes2 additional-elements-section">
        <div className="">
          <h1 className="text-center mb-4 fw-bold">Additional Elements</h1>
          <div className="row">
            {/* First Column */}
            <div className="col-lg-4 col-md-12">
              <div className="row">
                <div className="col-md-4 col-4 icon-title">
                  <div className="icon-container">
                    <img
                      src="assets/images/Birthday/Rectangle 12-1.png"
                      alt="Cold Pyro"
                      className="icon-image"
                    />
                    <div className="overlay"></div>
                    <button className="popup-button">Add</button>
                  </div>
                  <p className="py-2">Cold Pyro</p>
                  <h6>
                    Price <a href="#">₹500</a>
                  </h6>
                </div>
                <div className="col-md-4 col-4 icon-title">
                  <div className="icon-container">
                    <img
                      src="assets/images/Birthday/Rectangle 12-10.png"
                      alt="Smoke"
                      className="icon-image"
                    />
                    <div className="overlay"></div>
                    <button className="popup-button">Add</button>
                  </div>
                  <p className="py-2">Smoke</p>
                  <h6>
                    Price <a href="#">₹500</a>
                  </h6>
                </div>
                <div className="col-md-4 col-4 icon-title">
                  <div className="icon-container">
                    <img
                      src="assets/images/Birthday/Rectangle 12-11.png"
                      alt="Paper Blast"
                      className="icon-image"
                    />
                    <div className="overlay"></div>
                    <button className="popup-button">Add</button>
                  </div>
                  <p className="py-2">Paper Blast</p>
                  <h6>
                    Price <a href="#">₹500</a>
                  </h6>
                </div>
              </div>
            </div>

            {/* Second Column */}
            <div className="col-lg-4 col-md-12">
              <div className="row">
                <div className="col-md-4 col-4 icon-title">
                  <div className="icon-container">
                    <img
                      src="assets/images/Birthday/Rectangle 12-2.png"
                      alt="Varmala"
                      className="icon-image"
                    />
                    <div className="overlay"></div>
                    <button className="popup-button">Add</button>
                  </div>
                  <p className="py-2">Varmala</p>
                  <h6>
                    Price <a href="#">₹500</a>
                  </h6>
                </div>
                <div className="col-md-4 col-4 icon-title">
                  <div className="icon-container">
                    <img
                      src="assets/images/Birthday/Rectangle 12-3.png"
                      alt="Selfie Booth"
                      className="icon-image"
                    />
                    <div className="overlay"></div>
                    <button className="popup-button">Add</button>
                  </div>
                  <p className="py-2">Selfie Booth</p>
                  <h6>
                    Price <a href="#">₹500</a>
                  </h6>
                </div>
                <div className="col-md-4 col-4 icon-title">
                  <div className="icon-container">
                    <img
                      src="assets/images/Birthday/Rectangle 12-4.png"
                      alt="360 Photo Booth"
                      className="icon-image"
                    />
                    <div className="overlay"></div>
                    <button className="popup-button">Add</button>
                  </div>
                  <p className="py-2">360 Photo Booth</p>
                  <h6>
                    Price <a href="#">₹500</a>
                  </h6>
                </div>
              </div>
            </div>

            {/* Third Column */}
            <div className="col-lg-4 col-md-12">
              <div className="row">
                <div className="col-md-4 col-4 icon-title">
                  <div className="icon-container">
                    <img
                      src="assets/images/Birthday/Rectangle 12-5.png"
                      alt="Color Blast"
                      className="icon-image"
                    />
                    <div className="overlay"></div>
                    <button className="popup-button">Add</button>
                  </div>
                  <p className="py-2">Color Blast</p>
                  <h6>
                    Price <a href="#">₹500</a>
                  </h6>
                </div>
                <div className="col-md-4 col-4 icon-title">
                  <div className="icon-container">
                    <img
                      src="assets/images/Birthday/Rectangle 12-6.png"
                      alt="Centerpiece"
                      className="icon-image"
                    />
                    <div className="overlay"></div>
                    <button className="popup-button">Add</button>
                  </div>
                  <p className="py-2">Centerpiece</p>
                  <h6>
                    Price <a href="#">₹500</a>
                  </h6>
                </div>
                <div className="col-md-4 col-4 icon-title">
                  <div className="icon-container">
                    <img
                      src="assets/images/Birthday/Rectangle 12-7.png"
                      alt="Entrance Setup"
                      className="icon-image"
                    />
                    <div className="overlay"></div>
                    <button className="popup-button">Add</button>
                  </div>
                  <p className="py-2">Entrance Setup</p>
                  <h6>
                    Price <a href="#">₹500</a>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Frequently Bought Together  */}
      <section className="services fbt pb-5">
        <div className="service-section ">
          <h1>Frequently Bought Together</h1>

          <div className="cards-row">
            <div className="card col-md-6 col-sm-12">
              <img
                src="assets/images/Birthday/Rectangle 12-6.png"
                alt="Service 1"
              />
              <div className="cart-icon">
                <i className="fa-solid fa-square-check"></i>
              </div>
              <h2>Product Name</h2>
              <h4>₹300</h4>
            </div>
            <div className="card col-md-6 col-sm-12">
              <img
                src="assets/images/Birthday/Rectangle 12-7.png"
                alt="Service 2"
              />
              <div className="cart-icon">
                <i className="fa-solid fa-square-check"></i>
              </div>
              <h2>Product Name</h2>
              <h4>₹200</h4>
            </div>
            <div className="card">
              <img
                src="assets/images/Birthday/Rectangle 12-6.png"
                alt="Service 3"
              />
              <div className="cart-icon">
                <i className="fa-solid fa-square-check"></i>
              </div>
              <h2>Product Name</h2>
              <h4>₹150</h4>
            </div>
            <div className="card">
              <img
                src="assets/images/Weddings/Rectangle 15.png"
                alt="Service 4"
              />
              <div className="cart-icon">
                <i className="fa-solid fa-square-check"></i>
              </div>
              <h2>Product Name</h2>
              <h4>₹500</h4>
            </div>
            <div className="card">
              <img
                src="assets/images/Birthday/Rectangle 12-7.png"
                alt="Service 5"
              />
              <div className="cart-icon">
                <i className="fa-solid fa-square-check"></i>
              </div>
              <h2>Product Name</h2>
              <h4>₹299</h4>
            </div>
          </div>
          <button type="submit" className="btn ">
            Add all 4 to Cart
          </button>
        </div>
      </section>
      {/* Related Product With Free Delivery On Eligible Orders  */}

      <section className="ws2 weddings-section RelatedProduct pb-3">
      <div>
        <h1 className="mb-3 text-center">
          Related Product With Free Delivery On Eligible Orders
        </h1>

        <div className="col-lg-12">
          <div className="service-section ss2 py-0">
            <div className="cards-row">
              {/* Card 1 */}
              <div className="card">
                <div className="card-image">
                  <img
                    src="assets/images/Birthday/Rectangle 12-1.png"
                    alt="Service 6"
                  />
                  <div className="cart-icon">
                    <i className="fa-solid fa-cart-plus"></i>
                  </div>
                </div>
                <div className="card-info p-2 pt-3 pb-0">
                  <h2>Confetti</h2>
                  <ul className="list-inline small">
                    <li className="list-inline-item m-0">
                      <i className="fa fa-star"></i>
                    </li>
                    <li className="list-inline-item m-0">
                      <i className="fa fa-star"></i>
                    </li>
                    <li className="list-inline-item m-0">
                      <i className="fa fa-star"></i>
                    </li>
                    <li className="list-inline-item m-0">
                      <i className="fa-regular fa-star"></i>
                    </li>
                    <li className="list-inline-item m-0">
                      <i className="fa-regular fa-star"></i>
                    </li>
                  </ul>
                </div>
                <hr className="mt-0 mx-2" />
                <h6 className="px-2">
                  Price <a href="#">5k</a>
                </h6>
              </div>

              {/* Card 2 */}
              <div className="card">
                <div className="card-image">
                  <img
                    src="assets/images/Birthday/Rectangle 12-1.png"
                    alt="Service 6"
                  />
                  <div className="cart-icon">
                    <i className="fa-solid fa-cart-plus"></i>
                  </div>
                </div>
                <div className="card-info p-2 pt-3 pb-0">
                  <h2>Steamers</h2>
                  <ul className="list-inline small">
                    <li className="list-inline-item m-0">
                      <i className="fa fa-star"></i>
                    </li>
                    <li className="list-inline-item m-0">
                      <i className="fa fa-star"></i>
                    </li>
                    <li className="list-inline-item m-0">
                      <i className="fa fa-star"></i>
                    </li>
                    <li className="list-inline-item m-0">
                      <i className="fa-regular fa-star"></i>
                    </li>
                    <li className="list-inline-item m-0">
                      <i className="fa-regular fa-star"></i>
                    </li>
                  </ul>
                </div>
                <hr className="mt-0 mx-2" />
                <h6 className="px-2">
                  Price <a href="#">3k</a>
                </h6>
              </div>

              {/* Card 3 */}
              <div className="card">
                <div className="card-image">
                  <img
                    src="assets/images/Birthday/Rectangle 12-1.png"
                    alt="Service 6"
                  />
                  <div className="cart-icon">
                    <i className="fa-solid fa-cart-plus"></i>
                  </div>
                </div>
                <div className="card-info p-2 pt-3 pb-0">
                  <h2>Ballon Design</h2>
                  <ul className="list-inline small">
                    <li className="list-inline-item m-0">
                      <i className="fa fa-star"></i>
                    </li>
                    <li className="list-inline-item m-0">
                      <i className="fa fa-star"></i>
                    </li>
                    <li className="list-inline-item m-0">
                      <i className="fa fa-star"></i>
                    </li>
                    <li className="list-inline-item m-0">
                      <i className="fa-regular fa-star"></i>
                    </li>
                    <li className="list-inline-item m-0">
                      <i className="fa-regular fa-star"></i>
                    </li>
                  </ul>
                </div>
                <hr className="mt-0 mx-2" />
                <h6 className="px-2">
                  Price <a href="#">2.5k</a>
                </h6>
              </div>

              {/* Card 4 */}
              <div className="card">
                <div className="card-image">
                  <img
                    src="assets/images/Birthday/Rectangle 12-1.png"
                    alt="Service 6"
                  />
                  <div className="cart-icon">
                    <i className="fa-solid fa-cart-plus"></i>
                  </div>
                </div>
                <div className="card-info p-2 pt-3 pb-0">
                  <h2>Garlands</h2>
                  <ul className="list-inline small">
                    <li className="list-inline-item m-0">
                      <i className="fa fa-star"></i>
                    </li>
                    <li className="list-inline-item m-0">
                      <i className="fa fa-star"></i>
                    </li>
                    <li className="list-inline-item m-0">
                      <i className="fa fa-star"></i>
                    </li>
                    <li className="list-inline-item m-0">
                      <i className="fa-regular fa-star"></i>
                    </li>
                    <li className="list-inline-item m-0">
                      <i className="fa-regular fa-star"></i>
                    </li>
                  </ul>
                </div>
                <hr className="mt-0 mx-2" />
                <h6 className="px-2">
                  Price <a href="#">1k</a>
                </h6>
              </div>

              {/* Card 5 */}
              <div className="card">
                <div className="card-image">
                  <img
                    src="assets/images/Birthday/Rectangle 12-1.png"
                    alt="Service 6"
                  />
                  <div className="cart-icon">
                    <i className="fa-solid fa-cart-plus"></i>
                  </div>
                </div>
                <div className="card-info p-2 pt-3 pb-0">
                  <h2>Cake Toppers</h2>
                  <ul className="list-inline small">
                    <li className="list-inline-item m-0">
                      <i className="fa fa-star"></i>
                    </li>
                    <li className="list-inline-item m-0">
                      <i className="fa fa-star"></i>
                    </li>
                    <li className="list-inline-item m-0">
                      <i className="fa fa-star"></i>
                    </li>
                    <li className="list-inline-item m-0">
                      <i className="fa-regular fa-star"></i>
                    </li>
                    <li className="list-inline-item m-0">
                      <i className="fa-regular fa-star"></i>
                    </li>
                  </ul>
                </div>
                <hr className="mt-0 mx-2" />
                <h6 className="px-2">
                  Price <a href="#">5k</a>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default ProductDetails;
