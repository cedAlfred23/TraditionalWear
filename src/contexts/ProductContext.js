// ProductContext.js

import React, { createContext, useState } from 'react';

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  // Function to update products with new data
  const updateProducts = (newProducts) => {
    setProducts(newProducts);
    console.log('Updated Products:', newProducts); // Log the updated products
  };

  return (
    <ProductContext.Provider value={{ products, updateProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
