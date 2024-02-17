import React, { createContext, useState } from 'react';

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  // Function to fetch product data from the API
  const fetchProductData = async (requestData) => {
    const apiUrl = 'http://localhost:5000/api/predict';

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        body: requestData,
      });

      const data = await response.json();
      setProducts((prevProducts) => {
        console.log('Previous Products:', prevProducts);
        console.log('New Products:', data);
        return data;
      });
    } catch (error) {
      console.error('Error:', error);
      // Handle errors
    }
  };

  return (
    <ProductContext.Provider value={{ products, fetchProductData }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
