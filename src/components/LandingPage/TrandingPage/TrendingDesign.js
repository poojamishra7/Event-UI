import React from 'react';
import serviceJson from '../../../assets/json/services.json';
const design =serviceJson.Trending_Design || [];
const TrendingDesign = () => {
    const imageUrlPre = 'https://simsonseventimages.s3.ap-south-1.amazonaws.com/EventImages';
  return (
    <div className="trending-section py-5">
    <div className="container text-center">
        <h1 className="mb-3 text-center">Trending Designs</h1>
        <p className="mb-5 text-center">Stay ahead with the latest Trends in Designs</p>

        <div className="row">
            <div className="col-12 col-md-9">
                <div className="row">
                    <div className="col-12 col-md-7">
                        <div className="gallery-img">
                            <img src={imageUrlPre + design.wed18Img} alt="" className="img-fluid"/>
                            <div className="img-title">Weddings</div>
                        </div>
                    </div>
                    <div className="col-12 col-md-5">
                        <div className="gallery-img">
                            <img src={imageUrlPre + design.wed12Img} alt="" className="img-fluid"/>
                            <div className="img-title">Engagement</div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5">
                        <div className="gallery-img">
                            <img src={imageUrlPre + design.wed17Img} alt="" className="img-fluid"/>
                            <div className="img-title">Anniversary</div>
                        </div>
                    </div>
                    <div className="col-12 col-md-7">
                        <div className="gallery-img">
                            <img src={imageUrlPre + design.wed18Img} alt="" className="img-fluid"/>
                            <div className="img-title">Welcome Baby</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-3 sidebar">
                <div className="gallery-img h-100">
                    <img src={imageUrlPre + design.wed21Img} alt="" className="img-fluid h-100"/>
                    <div className="img-title">Birthday Party</div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default TrendingDesign
