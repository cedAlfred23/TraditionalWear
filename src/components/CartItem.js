import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdClose, IoMdAdd, IoMdRemove } from "react-icons/io";
import { CartContext } from "../contexts/CartContext";

const CartItem = ({ item }) => {
  const { removeFromCart, increaseAmount, decreaseAmount } = useContext(CartContext);
  const { id, shortDescription, img_path, price, amount } = item;
  const apiBaseUrl = "http://localhost:5000/api/"; // Update with the API base URL

  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 text-gray-500 w-full">
      <div className="w-full min-h-[50px] flex items-center gap-x-4">
        <Link to={`/product/${id}`}>
          <img className=" max-w-[80px]" src={`${apiBaseUrl}/${img_path}`} alt='{item.img_path}' />
        </Link>
        <div className=" w-full flex flex-col">
          <div className=" flex justify-between mb-2">
            <Link
              to={`/product/${id}`}
              className="text-sm uppercase font-medium max-w-[240px] text-primary hover:underline">
              {shortDescription}
            </Link>
            <div onClick={() => removeFromCart(id)} className="text-xl cursor-pointer">
              <IoMdClose className="text-gray-500 hover:text-red-500 transition" />
            </div>
          </div>
          <div className=" flex gap-x-2 h-[36px] text-sm">
            <div className=" flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium justify-center gap-3">
              <div onClick={() => decreaseAmount(id)} className="flex flex-1 h-full justify-center items-center cursor-pointer">
                <IoMdRemove />
              </div>
              <div className=" h-full flex justify-center items-center px-2">
                {amount}
              </div>
              <div onClick={() => increaseAmount(id)} className="flex flex-1 h-full justify-center items-center cursor-pointer">
                <IoMdAdd />
              </div>
            </div>
            <div className="flex-1 flex items-center justify-around">
            ¢ {price}
            </div>
            <div className=" flex-1 flex justify-end items-center text-primary font-medium">
              {`¢ ${parseFloat(price * amount).toFixed(2)}`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
