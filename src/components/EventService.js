import React, { useState, useEffect , useContext} from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useBreadcrumbs } from '../context/BreadcrumContext';
import Breadcrumbs from '../components/Breadcrum';
import { CartContext } from '../context/CartContext';
import product_list from '../assets/json/services.json';
const FilterSection = ({ title, filters, setFilters }) => (
  <>
    <h5 className="mt-4 mb-3">{title}</h5>
    {Object.keys(filters).map((key) => (
      <div className="form-check" key={key}>
        <input
          className="form-check-input"
          type="checkbox"
          id={key}
          checked={filters[key]}
          onChange={() => setFilters(prev => ({ ...prev, [key]: !prev[key] }))}
        />
        <label className="form-check-label" htmlFor={key}>
          {key.replace(/([A-Z])/g, ' $1')} <small className="text-muted">(0)</small>
        </label>
      </div>
    ))}
    <hr />
  </>
);

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
  const { addToCart } = useContext(CartContext);
  console.log(addToCart);
  const products = product_list.Products || [];
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
                  <a onClick={resetSelection} className="reset-btn">Reset</a>
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
                <a href="#" className="">More</a>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="service-section ss2">
                <div className="cards-row">
                  {products.map((item, index) => (
                    <div className="card" key={index}>
                      <div className="card-image">
                        <img src={`https://simsonseventimages.s3.ap-south-1.amazonaws.com/EventImages${item.image}`} alt={item.name} />
                        <div className="cart-icon">
                          <i className="fa-solid fa-cart-plus" onClick={() => addToCart(item)}></i>
                        </div>
                        <div className="wishlist-btn">
                          <button>Add to Wishlist</button>
                        </div>
                      </div>
                      <div className="card-info">
                        <p>{item.review.rating} <i className="fa fa-star"></i> <span>({item.review.total_reviews})</span></p>
                        <h2>{item.name}</h2>
                      </div>
                      <hr />
                      <h6>Price <a href="#">{item.price}</a></h6>
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
