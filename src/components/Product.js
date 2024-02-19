import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { BsPlus, BsEyeFill } from "react-icons/bs";

import { CartContext } from "../contexts/CartContext";
import { PRODUCT_URL } from "../util/api";

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const {
    id,
    img_path,
    price,
    brand,
    shortDescription,
    stockTotal,
  } = product;

  return (
  

    <div className="container mx-auto mt-8">
      <div>
        <div
          key={id}
          className="bg-white p-6 rounded-md shadow-lg overflow-hidden transition duration-300 transform hover:scale-105"
        >
          <div className="relative">
            <div className=" border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition rounded">
              <div className=" w-full h-full flex justify-center items-center">
                <div className=" w-[200px] mx-auto flex justify-center items-center">
                  <img
                    className="max-h-[160px] group-hover:scale-110 transition duration-300"
                    src={`${PRODUCT_URL}/${img_path}`} 
                    alt={id}
                  />
                </div>
              </div>

              <div className=" absolute top-6 -right-11 group-hover:right-0 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <button onClick={() => addToCart(product, id)}>
                  <div className=" flex justify-center items-center text-white w-12 h-12 bg-red-500 rounded-xl">
                    <BsPlus className=" text-3xl" />
                  </div>
                </button>
                <Link
                  to={`/product/${id}`}
                  className="w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl rounded-xl"
                >
                  <BsEyeFill />
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-800">{brand}</h3>
            <p className="text-sm text-gray-600">{shortDescription}</p>
            <div className="mt-4 flex justify-between items-center">
              <p className="text-lg font-bold text-gray-700">¢ {price}</p>
              <p className="text-sm text-gray-500">{`Stock: ${stockTotal}`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
