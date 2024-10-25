import React, {useRef } from 'react';
const Testimonials = () => {
    const carouselRef = useRef(null);

    return (
        <div className="testimonial-section">
            <div className="container-fluid px-3 px-sm-5 mt-5 justify-content-center">
                <h4 className="mb-3 text-center font-weight-bold titleAll">Hear From Our Customers</h4>
                <p className="mb-5 text-center">I will make on Can or will share images and content</p>
                <div ref={carouselRef} className="owl-carousel owl-theme">
                    {[
                        {
                            id: 'first',
                            content: 'I have worked with Paramount HR over the last year on a number of roles. The Paramount Team are always very supportive and a pleasure to work with throughout the recruitment process.',
                            name: 'Nalini Bahuguna'
                        },
                        {
                            id: 'show',
                            content: 'I have worked with Paramount HR over the last year on a number of roles. The Paramount Team are always very supportive and a pleasure to work with throughout the recruitment process.',
                            name: 'Nalini Bahuguna'
                        },
                        {
                            id: 'next',
                            content: 'I have worked with Paramount HR over the last year on a number of roles. The Paramount Team are always very supportive and a pleasure to work with throughout the recruitment process.',
                            name: 'Nalini Bahuguna'
                        },
                        {
                            id: 'last',
                            content: 'I have worked with Paramount HR over the last year on a number of roles. The Paramount Team are always very supportive and a pleasure to work with throughout the recruitment process.',
                            name: 'Nalini Bahuguna'
                        }
                    ].map(({ id, content, name }) => (
                        <div key={id} className="item first prev">
                            <div className="card py-3 px-4">
                                <div className="row justify-content-center">
                                    <div className="col-lg-5 pb-5">
                                        <img src={'https://simsonseventimages.s3.ap-south-1.amazonaws.com/EventImages/Weddings/Image3.png'} className="img-fluid profile-pic mb-4 mt-3" alt='profile'/>
                                    </div>
                                    <div className="col-lg-7">
                                        <i className="fa-solid fa-quote-left"></i>
                                        <p className="content mb-3 mx-2 text-start">{content}</p>
                                        <h6 className="mb-3 mx-2 text-start">{name}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Testimonials;
