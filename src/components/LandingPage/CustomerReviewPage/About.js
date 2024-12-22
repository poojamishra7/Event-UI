import React from 'react';
const About = () => {
    return (
        <div className="wwa-section">
            <div className="container text-center">
                <div className="row">
                    <div className="col-lg-5 col-md-6 col-sm-12">
                        <img src={'https://simsonseventimages.s3.ap-south-1.amazonaws.com/EventImages/Weddings/Image4.png'} alt="" className="gallery-img" />
                    </div>
                    <div className="col-lg-7 col-md-6 col-sm-12 text-start  justify-content-center align-items-center ">
                        <h2 className="mt-5 px-5">Who We Are</h2>
                        <p className="mt-3 px-5 text-justify">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                        <button type="submit " className="btn px-5 mt-5 ">Know More</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
