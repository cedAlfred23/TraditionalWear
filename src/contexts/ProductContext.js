import React, { createContext, useEffect, useState } from "react";
import { PRODUCT_URL } from "../util/api";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await fetch(`${PRODUCT_URL}/products`);
    const data = await response.json();
    console.log("Here we are ", data);
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
