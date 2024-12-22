import React from 'react';
import OurOffice from './OurOffice/OurOffice.js';
import CommonQuestion from './AskQuestionPage/CommonQuestion.js';
import About from './CustomerReviewPage/About.js';
import Testimonials from '../Testimonials.js';
import BestSelling from './ExploreMorePage/BestSelling.js';
import BestWork from '../LandingPage/PastWorkPage/BestWork.js';
import TrendingDesign from './TrandingPage/TrendingDesign.js';
import Wedding from '../LandingPage/Weddings/Wedding.js';
import Additional from './AdditionalForm/Additional.js';
import Services from "./ServicePage/Services.js";
import Home from './MainSectionPage/Home.js';
let LandingPage =  ({
    homeRef,
    servicesRef,
    aboutRef,
    ourOfficeRef
}) => {
    return (
        <div>
            <div ref={homeRef}><Home /></div>
            <div ref={servicesRef}><Services /></div>
            <Additional />
            <Wedding />
            <TrendingDesign />
            <BestWork />
            <BestSelling />
            <Testimonials />
            <div ref={aboutRef}><About /></div>
            <CommonQuestion />
            <div ref={ourOfficeRef}><OurOffice /></div>
        </div>
    )
}

LandingPage.propTypes = {

}

export default LandingPage
