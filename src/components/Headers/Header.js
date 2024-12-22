import React, { useContext, useState } from 'react';
import { Link , useNavigate} from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import './Header.css';
const additionalItems = [
  'Photography',
  'Anchor',
  'Cold Pyro',
  'Smoke',
  'Magician',
  'Kids Games Activities',
  'Centerpiece',
  'Mascot',
  'Selfie booth',
  '360 Selfie Booth',
  'Color Blast',
  'Varmala',
  'Invitation Cards'
];
const SearchBar = ({ searchQuery, handleSearchChange, handleSearchSubmit }) => (
  <form onSubmit={handleSearchSubmit} className="d-flex align-items-center">
    <div className="input-group">
      <input
        className="form-control border-end-0 border rounded-pill px-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <button className="btn searchBtn border-bottom-0 border rounded-pill ms-n5" type="submit">
        <i className="fas fa-search"></i>
      </button>
    </div>
    <a className="nav-link m-0 p-4 cartIcon d-md-none" href="#">
      <i className="fa-solid fa-magnifying-glass text-white fa-1x"></i>
    </a>
  </form>
);

const NavDropdown = ({ id, label, items }) => (
  <li className="nav-item dropdown">
    <a
      className="nav-link dropdown-toggle"
      href="#"
      id={`${id}Dropdown`}
      role="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      {label} <i className="fas fa-chevron-down"></i>
    </a>
    <ul className="dropdown-menu" aria-labelledby={`${id}Dropdown`}>
      {items.map((item, index) => (
        <li key={index}>
          <Link className="dropdown-item" to={additionalItems.indexOf(item) > -1 ? `/event/additional-service/${item.replace(/\s/g,'-')}` : `/event/${item.replace(/\s/g,'-')}`}>
            {item}
          </Link>
        </li>
      ))}
    </ul>
  </li>
);

const Header = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [isCollapsed, setIsCollapsed] = useState(true);
  const {cartItems} = useContext(CartContext);
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
  };

  const occasionItems = [
    'Birthday Parties',
    'Anniversaries',
    'Welcome Baby Celebrations',
    'Baby Showers',
    'Housewarming',
    'Inauguration Ceremonies',
    'Festive Decor',
    'Spiritual or Cultural Ceremonies',
    'Bachelor Parties',
    'Farewell Parties'
  ];

  const weddingItems = [
    'Mehendi Or Henna Ceremony',
    'Sangeet',
    'Wedding Ceremony',
    'Reception',
    'Destination Wedding',
    'Themed Weddings'
  ];

  const corporateItems = [
    'Conferences',
    'Seminars',
    'Workshops',
    'Product Launches',
    'Award Ceremonies',
    'Exhibitions'
  ];

  const engagementItems = [
    'Engagement Option 1',
    'Engagement Option 2'
  ];

  
  const handleLoginClick = () => {
      navigate('/sign-in'); // Navigate to the login page
  };
  return (
    <>
      {/* First Navbar */}
      <div style={{
        position: 'sticky',
        top: 0,
        backgroundColor: '#fff',
        padding: '10px 20px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', 
        zIndex: 1000, 
      }} id="top-header">
      <nav className="navbar navbar-expand-lg navbar-light bg-light navbar1" >
        <div className="brand-location">
          <Link className="navbar-brand fw-bold" to="/">Event Planner</Link>
          <a className="navbar-brand" href="index.html">
            <i className="fa-solid fa-location-dot fa-1x"></i>
          </a>
        </div>
        <div className="location-container">
          <p className="mb-0">Delivery to Mumbai 400001</p>
          <h6 className="mt-0">Use Current Location</h6>
        </div>
        <div className="ms-auto nav1-r-side" id="navbarSupportedContent1">
          <SearchBar 
            searchQuery={searchQuery}
            handleSearchChange={handleSearchChange}
            handleSearchSubmit={handleSearchSubmit}
          />
          <button className="btn getQuotesBtn mx-2 px-4" type="button">Get Free Quotes</button>
          <button className="btn getQuotesBtn mx-2 px-4" type="button" onClick={handleLoginClick}>Login Now</button>
          <a className="nav-link m-0 p-4 cartIcon" href="/cart" style={{position:'relative'}}>
            <i className="fas fa-shopping-cart"></i>
            {cartItems.length > 0 && <span className='cart-span'>{cartItems.length}</span>}
          </a>
        </div>
      </nav>

      <hr className="mx-5 mb-0 mt-0" />

      {/* Second Navbar */}
      <nav className="navbar navbar-expand-lg navbar2">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent2"
          aria-controls="navbarSupportedContent2"
          aria-expanded={!isCollapsed}
          aria-label="Toggle navigation"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isCollapsed ? 'collapse' : ''}`} id="navbarSupportedContent2">
          <ul className="navbar-nav mr-auto">
            <NavDropdown id="occasion" label="Occasion" items={occasionItems} />
            <NavDropdown id="wedding" label="Wedding" items={weddingItems} />
            <NavDropdown id="corporate" label="Corporate Events" items={corporateItems} />
            <NavDropdown id="engagement" label="Engagements Ceremony" items={engagementItems} />
            <NavDropdown id="additional" label="Additional Events" items={additionalItems} />
            <li className="nav-item">
              <Link className="nav-link" to="/account">Account</Link>
            </li>
          </ul>
        </div>
      </nav>
      </div>
    </>
  );
};

export default Header;
