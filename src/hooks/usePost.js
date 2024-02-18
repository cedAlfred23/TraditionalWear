import React, { createContext, useState, useEffect } from "react";
import { PRODUCT_URL } from "../util/api";

const useFetch = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${PRODUCT_URL}/products`);
      const data = await response.json();
      if (response?.ok) {
        setProducts(data);
      } else {
        throw new Error(data?.message);
      }
    } catch (error) {
      setError(error?.message ?? "An error occurred while fetching data");
    } finally {
      setLoading(false);
    }
  };

  const createProduct = async (newProductData) => {
    setLoading(true);
    try {
      const response = await fetch(`${PRODUCT_URL}/products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProductData),
      });
      const data = await response.json();
      if (response.ok) {
        // Update products state with the newly created product
        setProducts([...products, data]);
      } else {
        throw new Error(data?.message);
      }
    } catch (error) {
      setError(error?.message ?? "An error occurred while creating product");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return {
    products: products,
    error: error,
    loading: loading,
    createProduct: createProduct,
  };
};

// HOW TO USE IT
/**
 *   const { error, loading, products, createProduct } = useFetch();
 *   const handleCreateProduct = async () => {
     const newProductData = {
      // define your new product data here
     };

     await createProduct(newProductData);
    // Optionally, you can refetch the products after creating a new one
  };
 */

export default useFetch;
