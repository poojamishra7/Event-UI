import React, { useState, useEffect , useContext} from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useBreadcrumbs } from '../context/BreadcrumContext';
import Breadcrumbs from '../components/Breadcrum';
import { CartContext } from '../context/CartContext';
import product_list from '../assets/json/services.json';
import axios from 'axios';
const FilterSection = ({ title, filters, setFilters }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const fetchFilteredData = async () => {
    try {
      // const response = await axios.get('/api/data', {
      //   params: { filters } 
      // });
      // console.log(response.data);
    } catch (error) {
      console.error('Error fetching filtered data:', error);
    }
  };

  useEffect(() => {
    fetchFilteredData();
  }, [filters]); 
  return (
    <>
      <h5 className="mt-4 mb-3" onClick={() => setIsCollapsed(!isCollapsed)} style={{ cursor: 'pointer' }}>
        <span>{title}</span>
        <span>{isCollapsed ? '+' : '-'}</span>
      </h5>

      {!isCollapsed && (
        <>
          {Object.keys(filters).map((key) => (
            <div className="form-check" key={key}>
              <input
                className="form-check-input"
                type="checkbox"
                id={key}
                checked={filters[key]}
                onChange={() => setFilters((prev) => ({ ...prev, [key]: !prev[key] }))}
              />
              <label className="form-check-label" htmlFor={key}>
                {key.replace(/([A-Z])/g, ' $1')} <small className="text-muted">(0)</small>
              </label>
            </div>
          ))}
        </>
      )}
      <hr />
    </>
  );
};
const EventService = () => {
  const { occasionType } = useParams();
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);
  const isSpecialService = pathSegments.includes('additional-service');
  const formattedOccasionType = occasionType.replace(/-/g, ' ');
  const { setBreadcrumbs } = useBreadcrumbs();
  // State for filters
  const [searchTerm, setSearchTerm] = useState('');
  const [priceFilters, setPriceFilters] = useState({
    'less5': false,
    '5to10': false,
    '10to20': false,
    '20plus': false,
  });
  const [ageFilters, setAgeFilters] = useState({
    '1stBirthday': false,
    '5thBirthday': false,
    '10thBirthday': false,
    '25thBirthday': false,
    '50thBirthday': false,
    '50plusBirthday': false,
  });
  const [genderFilters, setGenderFilters] = useState({
    'boys': false,
    'girls': false,
  });
  const [themeFilters, setThemeFilters] = useState({
    'cartoon': false,
    'floral': false,
    'animal': false,
    'superhero': false,
    'sport': false,
    'carnival': false,
  });
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);
  const ServiceDetails = (item) => {
    window.location.href = "/event-details/" + item.name;
  };
  // const products = (product_list && product_list.Products) || [];
  const resetSelection = () => {
    setSearchTerm('');
    setPriceFilters({
      'less5': false,
      '5to10': false,
      '10to20': false,
      '20plus': false,
    });
    setAgeFilters({
      '1stBirthday': false,
      '5thBirthday': false,
      '10thBirthday': false,
      '25thBirthday': false,
      '50thBirthday': false,
      '50plusBirthday': false,
    });
    setGenderFilters({
      'boys': false,
      'girls': false,
    });
    setThemeFilters({
      'cartoon': false,
      'floral': false,
      'animal': false,
      'superhero': false,
      'sport': false,
      'carnival': false,
    });
  };

  useEffect(() => {
    setBreadcrumbs([
      { label: 'Home', path: '/' },
      { label: 'Events', path: '/events' },
      { label: formattedOccasionType || 'Event', path: `/events/${occasionType}` }
    ]);
  }, [occasionType, formattedOccasionType, setBreadcrumbs]);

  useEffect(()=>{
    const fetchData = async () => {
      try {
       const response = await axios.get('http://localhost:4400/simsons/service');
       if (response && response.data && response.data.success) {
        setProducts(response.data.services);
      }
      } catch (error) {
        console.error("Error fetching cart details:", error);
      }
    };
    fetchData();
  },[]);

  return (
    <>
      <div className="Home-Part">
        <div className="d-flex justify-content-center align-items-center" style={{ 
          'width': '100%' , 
          'height': '60vh', 
          backgroundSize: 'cover',
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.8)), url(https://simsonseventimages.s3.ap-south-1.amazonaws.com/EventImages/Birthday/Image11.png)'}}>
          <div className="content text-center serviceCont">
            <h1>{isSpecialService ? formattedOccasionType : `${formattedOccasionType} Event Decoration Services`}</h1>
            <h6><Breadcrumbs /></h6>
          </div>
        </div>
      </div>

      <div className="birthday-product">
        <div className="product-section">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="filter-bar">
                <div className="filter-left">
                  <h5>Filter Birthday</h5>
                </div>
                <div className="filter-right">
                  <button onClick={resetSelection} className="reset-btn">Reset</button>
                </div>
              </div>
              <div className="search-bar">
                <input
                  type="text"
                  placeholder="Search Birthday"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type="button" className="search-icon">
                  <i className="fa fa-search"></i>
                </button>
              </div>
              <div className="pro-list p-4">
                <FilterSection title="Price" filters={priceFilters} setFilters={setPriceFilters} />
                <FilterSection title="By Age" filters={ageFilters} setFilters={setAgeFilters} />
                <FilterSection title="By Gender" filters={genderFilters} setFilters={setGenderFilters} />
                <FilterSection title="By Theme" filters={themeFilters} setFilters={setThemeFilters} />
                <br />
                <a href="/" className="">More</a>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="service-section ss2">
                <div className="cards-row">
                  {products && products.map((item, index) => (
                    <div className="card" key={index} onClick={()=> ServiceDetails(item)}>
                      <div className="card-image">
                        <img src={item.imageURL[0].url} alt={item.imageURL[0].public_id} />
                        <div className="cart-icon">
                          <i className="fa-solid fa-cart-plus" onClick={() => addToCart(item)}></i>
                        </div>
                        <div className="wishlist-btn">
                          <button>Add to Wishlist</button>
                        </div>
                      </div>
                      <div className="card-info">
                        <p>{item.review} <i className="fa fa-star"></i> <span>({item.noOfReview})</span></p>
                        <h2>{item.productTitle}</h2>
                      </div>
                      <hr />
                      <h6>Price <span>{item.productPrice}</span></h6>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EventService;
