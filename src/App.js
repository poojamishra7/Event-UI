import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useRef } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from "./components/LandingPage";
import Shop from './components/ShoppingCart';
import EventService from './components/EventService';
import Login from './components/Login_Signup';
import Cart from './components/ShoppingCart';
import { BreadcrumbProvider } from './context/BreadcrumContext';
import { CartProvider } from './context/CartContext';
import {DataProvider}  from './context/DataContext.js';

function App() {
  let homeRef = useRef(null);
  let servicesRef = useRef(null);
  let aboutRef = useRef(null);
  let ourOfficeRef = useRef(null); 
  const scrollToSection = (ref) => {
    if (ref.current) {
        const topOffset = ref.current.offsetTop;  // Get the top position of the section
        const headerHeight = document.querySelector('#top-header')?.offsetHeight || 0;  // Adjust for fixed header if any
        console.log( topOffset - headerHeight , '::' , headerHeight , ":::" ,topOffset);
        window.scrollTo({
            top: topOffset - headerHeight,  // Scroll to section position minus header height
            behavior: 'smooth',  // Smooth scrolling
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
