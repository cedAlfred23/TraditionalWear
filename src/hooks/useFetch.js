import React, { createContext, useState, useEffect } from "react";

const useFetch = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
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
