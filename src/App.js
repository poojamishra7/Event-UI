import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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
  return (
    <Router>      
      <BreadcrumbProvider>
        <CartProvider>
        <Header />
        <DataProvider>
          <Routes>
            <Route path="/" element={<Home />} />
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
      <Footer /> 
    </Router>
  );
}

export default App;
