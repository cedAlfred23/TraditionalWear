import React, { createContext, useState, useEffect } from "react";
import { PRODUCT_URL } from "../util/api";

const useFetch = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  const fetchProducts = async () => {
    try {
      const response = await fetch(`${PRODUCT_URL}/products`);
      const data = await response.json();
      if (response.ok) {
        setProducts(data);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error?.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return {
    products: products,
    error: error,
    loading: loading,
  };
};

export default useFetch;
