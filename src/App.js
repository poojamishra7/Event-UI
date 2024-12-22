import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useRef } from 'react';
import Header from './components/Headers/Header.js';
import Footer from './components/Footers/Footer.js';
import Home from "./components/LandingPage/LandingPage.js";
import Shop from './components/ServiceCart/ShoppingCart.js';
import EventService from './components/EventService';
import Login from './components/Account/IsLoginNo/Login_Signup.js';
import Cart from './components/ServiceCart/ShoppingCart.js';
import { BreadcrumbProvider } from './context/BreadcrumContext';
import { CartProvider } from './context/CartContext';
import { DataProvider }  from './context/DataContext.js';
import ServiceDetails from './components/ServiceDetailsPage/ServiceDetails.js';

function App() {
  let homeRef = useRef(null);
  let servicesRef = useRef(null);
  let aboutRef = useRef(null);
  let ourOfficeRef = useRef(null); 
  const scrollToSection = (ref) => {
    if (ref.current) {
        const topOffset = ref.current.offsetTop;  
        const headerHeight = document.querySelector('#top-header')?.offsetHeight || 0; 
        console.log( topOffset - headerHeight , '::' , headerHeight , ":::" ,topOffset);
        window.scrollTo({
            top: topOffset - headerHeight,  
            behavior: 'smooth',  
        });
    }
};

  return (
    <Router>      
      <BreadcrumbProvider>
        <CartProvider>
        <Header />
        <DataProvider>
          <Routes>
            <Route path="/" element={<Home homeRef = {homeRef} aboutRef = {aboutRef} ourOfficeRef = {ourOfficeRef} servicesRef = {servicesRef}/>} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/event/:occasionType" element={<EventService />} />
            <Route path="/event-details/:product" element={<ServiceDetails/>}/>
            <Route path="/event/additional-service/:occasionType" element={<EventService />} /> 
            <Route path="/cart" element={<Cart />} />
            <Route path='/sign-in' element={<Login />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          </DataProvider>
        </CartProvider>
      </BreadcrumbProvider>
      <Footer  scrollToSection={scrollToSection} refs={{homeRef , aboutRef , ourOfficeRef , servicesRef}}/> 
    </Router>
  );
}

export default App;
