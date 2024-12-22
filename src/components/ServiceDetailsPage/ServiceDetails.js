import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import Banner from './Banner/Banner';
import ProductDetails from './ProductDetails/ProductDetails';

const ServiceDetails = () => {
    const {product} = useParams();
    const [data, setData] = useState([]);
    useEffect(()=>{
        const fetchData = async () => {
          try {
           const response = await axios.get('http://localhost:4400/simsons/product/'+product);
           if (response && response.data && response.data.success) {
            setData(response.data.product);
          }
          } catch (error) {
            console.error("Error fetching cart details:", error);
          }
        };
        fetchData();
      },[product])
  return (
    <div>
        <Banner/>
        <ProductDetails/>
      <h1>This is product details page : {product}</h1>
    </div>
  )
}

export default ServiceDetails
