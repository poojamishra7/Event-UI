import React from 'react'
import glimp18 from '../assets/images/Get a glimpse/Rectangle 18.png';
import glimp19 from '../assets/images/Get a glimpse/Rectangle 19.png';
import glimp20 from '../assets/images/Get a glimpse/Rectangle 20.png';
import glimp21 from '../assets/images/Get a glimpse/Rectangle 21.png';
const BestWork = () => {
  return (
    <div className="work-section mt-5">
    <div className="container">
        <div className="row">
            <div className="col-8">
                <h2 className="mb-5">Get A Glimpse Of Some Of Our Best Work From The Past</h2>
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
                            <img src={glimp18} alt="Image 1" className="img-fluid"/>
                            <div className="image-title">
                                <h4>Arpith & Benjamin</h4>
                                <h6>10+ Photos</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-3">
                        <div className="image-container">
                            <img src={glimp19} alt="Image 2" className="img-fluid"/>
                            <div className="image-title">
                                <h4>Aurko & Vini</h4>
                                <h6>10+ Photos</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-3">
                        <div className="image-container">
                            <img src={glimp20} alt="Image 3" className="img-fluid"/>
                            <div className="image-title">
                                <h4>Nidhi & Dhruv</h4>
                                <h6>10+ Photos</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-3">
                        <div className="image-container">
                            <img src={glimp21} alt="Image 4" className="img-fluid"/>
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
