import React, { createContext, useState } from 'react';
import { DETECTION_URL } from "../util/api";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  // Function to fetch product data from the API
  const fetchProductData = async (requestData) => {

    try {
      const response = await fetch(`${DETECTION_URL}`, {
        method: 'POST',
        body: requestData,
      });
      const data = await response.json();
      const parseData = JSON.parse(data);
      setProducts(parseData);
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
