// import React, { useState } from 'react';
// import Hero from '../components/Hero';

// const CheckoutPage = () => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     address: '',
//     city: '',
//     zipCode: '',
//     country: '',
//     cardNumber: '',
//     expiryDate: '',
//     cvv: ''
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic
//   };

//   return (
//     <div className="container mx-auto py-40 h-full text-center items-center">

//       <h1 className="text-3xl font-bold mb-8">Checkout</h1>
//       <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
//             Full Name
//           </label>
//           <input
//             type="text"
//             id="fullName"
//             name="fullName"
//             value={formData.fullName}
//             onChange={handleChange}
//             className="block w-full border border-gray-300 rounded-md px-4 py-2 mt-1 focus:outline-none focus:ring-primary focus:border-primary"
//             required
//           />
//         </div>
//         {/* Add more form fields for email, address, city, zip code, country, etc. */}

//         <div className="mb-4">
//           <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
//             Card Number
//           </label>
//           <input
//             type="text"
//             id="cardNumber"
//             name="cardNumber"
//             value={formData.cardNumber}
//             onChange={handleChange}
//             className="block w-full border border-gray-300 rounded-md px-4 py-2 mt-1 focus:outline-none focus:ring-primary focus:border-primary"
//             required
//           />
//         </div>
//         {/* Add more form fields for card expiry date and CVV */}

//         <button
//           type="submit"
//           className="bg-primary text-white py-3 px-6 rounded-md hover:bg-primary-dark transition duration-300"
//         >
//           Place Order
//         </button>
//       </form>
//     </div>
//   );
// };

// export default CheckoutPage;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const CheckoutPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [selectedShippingOption, setSelectedShippingOption] =
    useState("standard");

  const handleFormSubmit = (event) => {
    event.preventDefault();

  };

  return (
    <div className=" flex flex-1 w-full h-full text-center justify-center">
        <div className=" w-full h-full  flex-1 block mt-24 justify-center">
            <h2 className="text-lg font-semibold mb-4">Checkout your order</h2>
            <div>

            </div>

        </div>
      <div className="flex flex-1 mt-24 p-6 rounded shadow text-center justify-center">
       
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label className="block mb-1">Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Phone:</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Address:</label>
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Card Number:</label>
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Expiry Date:</label>
            <input
              type="text"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">CVV:</label>
            <input
              type="text"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Shipping Options:</label>
            <div>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  value="standard"
                  checked={selectedShippingOption === "standard"}
                  onChange={() => setSelectedShippingOption("standard")}
                  className="mr-2"
                />
                Standard Shipping ($X.XX)
              </label>
            </div>
            <div>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  value="express"
                  checked={selectedShippingOption === "express"}
                  onChange={() => setSelectedShippingOption("express")}
                  className="mr-2"
                />
                Express Shipping ($X.XX)
              </label>
            </div>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold">Order Total: $XX.XX</h3>
          </div>
          <div className="mb-4">
            <label className="inline-flex items-center">
              <input type="checkbox" required className="mr-2" />I agree to the
              terms and conditions
            </label>
          </div>
          {/* <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Place Order</button> */}
          <Link
            to={`/checkout`}
            className="bg-primary flex p-4 justify-center items-center text-white w-full font-medium rounded"
          >
            Place Order
          </Link>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;
