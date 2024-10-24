import React from 'react';
import OurOffice from './OurOffice';
import CommonQuestion from './CommonQuestion';
import About from './About';
import Testimonials from './Testimonials';
import BestSelling from './BestSelling';
import BestWork from './BestWork';
import TrendingDesign from './TrendingDesign';
import Wedding from './Wedding.js';
import Additional from './Additional';
import Services from "./Services";
import Home from './Home';
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
