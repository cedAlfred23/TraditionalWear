import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const ProductComponent = ({ products }) => {
  const { similar_images } = products;
  const apiBaseUrl = 'http://localhost:5000/api/'; // Update with the API base URL
  const { addToCart } = useContext(CartContext); // Make sure to import CartContext from your context file

  return (
    <div className="container mx-auto mt-8">
      {/* Display similar images */}
      <div id="results-container" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {similar_images.map((image) => (
          <div key={image.id} className="bg-white p-6 rounded-md shadow-lg overflow-hidden transition duration-300 transform hover:scale-105">
            <div className="relative">
              <img src={`${apiBaseUrl}/${image.img_path}`} alt="Similar" className="w-full h-64 object-cover mb-4 rounded-md" />
              <button
                onClick={() => addToCart(image.id)} // Assuming addToCart takes the product id
                className="absolute top-2 right-2 px-4 py-2 bg-gray-800 text-white rounded-md opacity-80 hover:opacity-100 focus:outline-none focus:ring focus:border-gray-500 transition-transform"
              >
                Add to Cart
              </button>
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-semibold text-gray-800">{image.brand}</h3>
              <p className="text-sm text-gray-600">{image.shortDescription}</p>
              <div className="mt-4 flex justify-between items-center">
                <p className="text-lg font-bold text-gray-700">{`${image.price}`}</p>
                <p className="text-sm text-gray-500">{`Stock: ${image.stockTotal}`}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductComponent;