import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // let response = await axios.get('https://api.example.com/shared-data');
        let response = {
          "Wedding": {
            MANDAP: [
              { src: "/Weddings/Image1.png", alt: 'Image 1', dataImage: 'MANDAP' },
              { src: "/Weddings/Image5.png", alt: 'Image 2', dataImage: 'MANDAP' },
              { src: "/Weddings/Image2.png", alt: 'Image 3', dataImage: 'MANDAP' },
              { src: "/Weddings/Image6.png", alt: 'Image 4', dataImage: 'MANDAP' },
              { src: "/Weddings/Image4.png", alt: 'Image 5', dataImage: 'MANDAP' },
              { src: "/Weddings/Image3.png", alt: 'Image 6', dataImage: 'MANDAP' }
            ],
            RECEPTION: [
              { src: "/Weddings/Image1.png", alt: 'Image 1', dataImage: 'RECEPTION' },
              { src: "/Weddings/Image4.png", alt: 'Image 5', dataImage: 'RECEPTION' },
              { src: "/Weddings/Image5.png", alt: 'Image 2', dataImage: 'RECEPTION' },
              { src: "/Weddings/Image2.png", alt: 'Image 3', dataImage: 'RECEPTION' },
              { src: "/Weddings/Image6.png", alt: 'Image 4', dataImage: 'RECEPTION' },
              { src: "/Weddings/Image3.png", alt: 'Image 6', dataImage: 'RECEPTION' }
            ],
            'HALDI & MEHENDI': [
              { src: "/Weddings/Image1.png", alt: 'Image 1', dataImage: 'HALDI & MEHENDI' },
              { src: "/Weddings/Image5.png", alt: 'Image 2', dataImage: 'HALDI & MEHENDI' },
              { src: "/Weddings/Image6.png", alt: 'Image 4', dataImage: 'HALDI & MEHENDI' },
              { src: "/Weddings/Image2.png", alt: 'Image 3', dataImage: 'HALDI & MEHENDI' },
              { src: "/Weddings/Image4.png", alt: 'Image 5', dataImage: 'HALDI & MEHENDI' },
              { src: "/Weddings/Image3.png", alt: 'Image 6', dataImage: 'HALDI & MEHENDI' }
            ],
            '3D DESIGN': [
              { src: "/Weddings/Image4.png", alt: 'Image 5', dataImage: '3D DESIGN' },
              { src: "/Weddings/Image1.png", alt: 'Image 1', dataImage: '3D DESIGN' },
              { src: "/Weddings/Image5.png", alt: 'Image 2', dataImage: '3D DESIGN' },
              { src: "/Weddings/Image2.png", alt: 'Image 3', dataImage: '3D DESIGN' },
              { src: "/Weddings/Image6.png", alt: 'Image 4', dataImage: '3D DESIGN' },
              { src: "/Weddings/Image3.png", alt: 'Image 6', dataImage: '3D DESIGN' }
            ]
          },
          "BestSelling": {
            weddings: [
              { src: "/Weddings/Image1.png", alt: 'Image 1', dataImage: 'weddings' },
              { src: "/Weddings/Image5.png", alt: 'Image 2', dataImage: 'weddings' },
              { src: "/Weddings/Image2.png", alt: 'Image 3', dataImage: 'weddings' },
              { src: "/Weddings/Image6.png", alt: 'Image 4', dataImage: 'weddings' },
              { src: "/Weddings/Image4.png", alt: 'Image 5', dataImage: 'weddings' },
              { src: "/Weddings/Image3.png", alt: 'Image 6', dataImage: 'weddings' }
            ],
            engagement: [
              { src: "/Weddings/Image4.png", alt: 'Image 1', dataImage: 'engagement' },
              { src: "/Weddings/Image3.png", alt: 'Image 2', dataImage: 'engagement' },
              { src: "/Weddings/Image1.png", alt: 'Image 3', dataImage: 'engagement' },
              { src: "/Weddings/Image5.png", alt: 'Image 4', dataImage: 'engagement' },
              { src: "/Weddings/Image2.png", alt: 'Image 5', dataImage: 'engagement' },
              { src: "/Weddings/Image6.png", alt: 'Image 6', dataImage: 'engagement' }
            ],
            birthday: [
              { src: "/Weddings/Image2.png", alt: 'Image 1', dataImage: 'birthday' },
              { src: "/Weddings/Image6.png", alt: 'Image 2', dataImage: 'birthday' },
              { src: "/Weddings/Image1.png", alt: 'Image 3', dataImage: 'birthday' },
              { src: "/Weddings/Image5.png", alt: 'Image 4', dataImage: 'birthday' },
              { src: "/Weddings/Image4.png", alt: 'Image 5', dataImage: 'birthday' },
              { src: "/Weddings/Image3.png", alt: 'Image 6', dataImage: 'birthday' }
            ],
            anniversary: [
              { src: "/Weddings/Image6.png", alt: 'Image 1', dataImage: 'anniversary' },
              { src: "/Weddings/Image1.png", alt: 'Image 2', dataImage: 'anniversary' },
              { src: "/Weddings/Image5.png", alt: 'Image 3', dataImage: 'anniversary' },
              { src: "/Weddings/Image2.png", alt: 'Image 4', dataImage: 'anniversary' },
              { src: "/Weddings/Image4.png", alt: 'Image 5', dataImage: 'anniversary' },
              { src: "/Weddings/Image3.png", alt: 'Image 6', dataImage: 'anniversary' }
            ]
          }
        };
        setData(response);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  if (loading) {
    return <div>Loading...</div>; 
  }
  return (
    <DataContext.Provider value={{ data }}>
      {children}
    </DataContext.Provider>
  );
};
