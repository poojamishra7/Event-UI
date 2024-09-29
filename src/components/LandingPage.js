import React from 'react';
import PropTypes from 'prop-types';
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
import {DataProvider}  from '../context/DataContext.js';
const LandingPage = props => {
    return (
        <DataProvider>
        <div>
            <Home />
            <Services />
            <Additional />
            <Wedding />
            <TrendingDesign />
            <BestWork />
            <BestSelling />
            <Testimonials />
            <About />
            <CommonQuestion />
            <OurOffice />
        </div>
        </DataProvider>
    )
}

LandingPage.propTypes = {

}

export default LandingPage
