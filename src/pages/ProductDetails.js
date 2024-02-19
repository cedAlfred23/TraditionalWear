import React, {useContext} from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { ProductContext } from '../contexts/ProductContext';
import { PRODUCT_URL } from "../util/api";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  const product = products.similar_images?.find((item) => {
    return item.id === parseInt(id);
  });

  if(!product){
    return <section className='h-screen flex justify-center items-center'>
      Loading...
    </section>
  }

  const {
    img_path,
    brand,
    price,
    shortDescription,
  } = product;

  return (
    <section className=' pt-32 pb-12 lg:py-32 h-screen flex items-center'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row items-center'>
          <div className='flex flex-1 justify-center items-center mb-8 lg:mb-0'>
            <img src={`${PRODUCT_URL}/${img_path}`}  className='max-w-[200px] lg:max-w-sm'/>
          </div>
          <div className='flex-1 text-center lg:text-left'>
            <h1 className='text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0'>
              {brand}
            </h1>
            <div className='text-xl text-red-500 font-medium mb-6'>
            ¢ {price}
            </div>
            <p className='mb-8'>{shortDescription}</p>
            <button onClick={()=> addToCart(product, product.id)} className=' text-yellow-500 bg-gray-700 py-4 px-8 mb-40 rounded'>Add to cart</button>
          </div>
        </div>
      </div>    
    </section>
  )
};

export default ProductDetails;
