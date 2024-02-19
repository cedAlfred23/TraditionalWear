import React, {useContext} from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { ProductContext } from '../contexts/ProductContext';
import { PRODUCT_URL } from "../util/api";

const ProductDetails = () => {
  const { id } = useParams();
  // const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  const products = {"similar_images": [{"id": 108107, "img_path": "data/cutout-img/cutout/13616393_17700784_300.jpg", "Detail_img_path": "data/model-img/model/13616393_17700785_300.jpg", "brand": "Morgan Lane", "price": 386, "shortDescription": "printed button shirt", "stockTotal": 12}, {"id": 83949, "img_path": "data/cutout-img/cutout/13774518_17107747_300.jpg", "Detail_img_path": "data/model-img/model/13774518_17107754_300.jpg", "brand": "Dolce & Gabbana", "price": 1100, "shortDescription": "floral wide-leg trousers", "stockTotal": 1}, {"id": 2744, "img_path": "data/cutout-img/cutout/14247494_20189261_300.jpg", "Detail_img_path": "data/model-img/model/14247494_20313162_300.jpg", "brand": "P.A.R.O.S.H.", "price": 607, "shortDescription": "sequin zebra T-shirt dress", "stockTotal": 10}, {"id": 6505, "img_path": "data/cutout-img/cutout/14220283_20216464_300.jpg", "Detail_img_path": "data/model-img/model/14220283_20277749_300.jpg", "brand": "Lost Daze", "price": 499, "shortDescription": "You're So Pretty T-shirt", "stockTotal": 4}, {"id": 43844, "img_path": "data/cutout-img/cutout/14006303_18118822_300.jpg", "Detail_img_path": "data/model-img/model/14006303_18118824_300.jpg", "brand": "Prada", "price": 1185, "shortDescription": "lightning bolt print shirt", "stockTotal": 26}, {"id": 138317, "img_path": "data/cutout-img/cutout/13423783_18108259_300.jpg", "Detail_img_path": "data/model-img/model/13423783_18108260_300.jpg", "brand": "Valentino", "price": 960, "shortDescription": "Valentino Garavani Rockstud large pouch", "stockTotal": 7}, {"id": 55172, "img_path": "data/cutout-img/cutout/13944380_17942903_300.jpg", "Detail_img_path": "data/model-img/model/13944380_17942906_300.jpg", "brand": "Johanna Ortiz", "price": 921, "shortDescription": "kimono coat", "stockTotal": 2}, {"id": 87586, "img_path": "data/cutout-img/cutout/13745776_17074726_300.jpg", "Detail_img_path": "data/model-img/model/13745776_17074727_300.jpg", "brand": "La Doublej", "price": 479, "shortDescription": "Clerk shirt", "stockTotal": 17}, {"id": 102712, "img_path": "data/cutout-img/cutout/13648618_17524485_300.jpg", "Detail_img_path": "data/model-img/model/13648618_17524488_300.jpg", "brand": "Etro", "price": 1280, "shortDescription": "panelled woven shoulder bag", "stockTotal": 4}, {"id": 3045, "img_path": "data/cutout-img/cutout/14243445_20206679_300.jpg", "Detail_img_path": "data/model-img/model/14243445_20317008_300.jpg", "brand": "Veronica Beard", "price": 940, "shortDescription": "floral flared dress", "stockTotal": 3}, {"id": 184188, "img_path": "data/cutout-img/cutout/11756124_8316902_300.jpg", "Detail_img_path": "data/model-img/model/11756124_8316904_300.jpg", "brand": "Emanuel Ungaro Pre-Owned", "price": 457, "shortDescription": "jacquard printed cropped jacket", "stockTotal": 1}, {"id": 11909, "img_path": "data/cutout-img/cutout/14185913_19124788_300.jpg", "Detail_img_path": "data/model-img/model/14185913_19124792_300.jpg", "brand": "Lhd", "price": 1220, "shortDescription": "The Star Island shirt", "stockTotal": 6}]}
  
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
