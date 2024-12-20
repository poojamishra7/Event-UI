import React from 'react'
const BestWork = () => {
  return (
    <div className="work-section mt-5">
    <div className="container">
        <div className="row">
            <div className="col-8">
                <h2 className="mb-5">Take a look at some of our finest work from the past.</h2>
            </div>
            <div className="col-4">
                <button type="submit" className="btn">Get Free Quotes</button>
            </div>
        </div>

        <div className="row">
            <div className="col-12">
                <div className="row">
                    <div className="col-6 col-md-3">
                        <div className="image-container">
                            <img src={'https://simsonseventimages.s3.ap-south-1.amazonaws.com/EventImages/Get%20a%20glimpse/Image1.png'} alt="" className="img-fluid"/>
                            <div className="image-title">
                                <h4>Arpith & Benjamin</h4>
                                <h6>10+ Photos</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-3">
                        <div className="image-container">
                            <img src={'https://simsonseventimages.s3.ap-south-1.amazonaws.com/EventImages/Get%20a%20glimpse/Image2.png'} alt="" className="img-fluid"/>
                            <div className="image-title">
                                <h4>Aurko & Vini</h4>
                                <h6>10+ Photos</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-3">
                        <div className="image-container">
                            <img src={'https://simsonseventimages.s3.ap-south-1.amazonaws.com/EventImages/Get%20a%20glimpse/Image3.png'} alt="" className="img-fluid"/>
                            <div className="image-title">
                                <h4>Nidhi & Dhruv</h4>
                                <h6>10+ Photos</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-3">
                        <div className="image-container">
                            <img src={'https://simsonseventimages.s3.ap-south-1.amazonaws.com/EventImages/Get%20a%20glimpse/Image4.png'} alt="" className="img-fluid"/>
                            <div className="image-title">
                                <h4>Palishree & Shezhaad</h4>
                                <h6>10+ Photos</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default BestWork;
