// ProductContext.js
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
      console.log('Data:', data);
      const sanitizedJson = data.replace(/"availableSizes":\s*NaN/g, '"availableSizes": "N/A"');
      console.log('Sanitized:', sanitizedJson);
      const parsedResponse = JSON.parse(sanitizedJson);
      console.log('Parsed:', parsedResponse);
      setProducts(parsedResponse.similar_images);
      console.log('Products:', products);

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
