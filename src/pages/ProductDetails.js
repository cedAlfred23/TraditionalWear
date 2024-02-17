import React, {useContext} from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { ProductContext } from '../contexts/ProductContext';

const ProductDetails = () => {
  const { id } = useParams();
  // const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  const apiBaseUrl = "http://localhost:5000/api/"; // Update with the API base URL
  const products ={"similar_images": [{"id": 34057, "img_path": "data/cutout-img/cutout/14063249_18422874_300.jpg", "Detail_img_path": "data/model-img/model/14063249_18422875_300.jpg", "brand": "Burberry", "price": 3490, "shortDescription": "medium Cube tote bag", "stockTotal": 10}, {"id": 12518, "img_path": "data/cutout-img/cutout/14182146_19066089_300.jpg", "Detail_img_path": "data/model-img/model/14182146_20313392_300.jpg", "brand": "Herm\u00e8s Pre-Owned", "price": 22656, "shortDescription": "Birkin bag", "stockTotal": 1}, {"id": 144095, "img_path": "data/cutout-img/cutout/13351952_15594664_300.jpg", "Detail_img_path": "data/model-img/model/13351952_15594670_300.jpg", "brand": "Prada", "price": 4370, "shortDescription": "Cahier shoulder bag", "stockTotal": 1}, {"id": 36913, "img_path": "data/cutout-img/cutout/14040955_18597171_300.jpg", "Detail_img_path": "data/model-img/model/14040955_18597173_300.jpg", "brand": "Louis Vuitton Pre-Owned", "price": 5438, "shortDescription": "Limited Edition Etui Dom Perignon Bottle Holder", "stockTotal": 1}, {"id": 84906, "img_path": "data/cutout-img/cutout/13766105_17095717_300.jpg", "Detail_img_path": "data/model-img/model/13766105_17095724_300.jpg", "brand": "Dolce & Gabbana", "price": 279, "shortDescription": "printed push-up bikini  top", "stockTotal": 3}, {"id": 163071, "img_path": "data/cutout-img/cutout/12963957_13598523_300.jpg", "Detail_img_path": "data/model-img/model/12963957_13598524_300.jpg", "brand": "Burberry", "price": 3050, "shortDescription": "The Small Leather Belt Bag", "stockTotal": 35}, {"id": 17956, "img_path": "data/cutout-img/cutout/14151992_19028569_300.jpg", "Detail_img_path": "data/model-img/model/14151992_20270228_300.jpg", "brand": "Manu Atelier", "price": 803, "shortDescription": "Demi tote bag", "stockTotal": 7}, {"id": 162244, "img_path": "data/cutout-img/cutout/12976882_14955768_300.jpg", "Detail_img_path": "data/model-img/model/12976882_14955772_300.jpg", "brand": "Burberry", "price": 2190, "shortDescription": "The Giant Reversible Tote in Vintage Check", "stockTotal": 70}, {"id": 38602, "img_path": "data/cutout-img/cutout/14032956_18383238_300.jpg", "Detail_img_path": "data/model-img/model/14032956_18383240_300.jpg", "brand": "Burberry", "price": 3180, "shortDescription": "The Small Leather Triple Stud Belt Bag", "stockTotal": 58}, {"id": 108102, "img_path": "data/cutout-img/cutout/13616398_16425042_300.jpg", "Detail_img_path": "data/model-img/model/13616398_16425043_300.jpg", "brand": "Morgan Lane", "price": 562, "shortDescription": "Keira crop top", "stockTotal": 10}, {"id": 89104, "img_path": "data/cutout-img/cutout/13737242_17101748_300.jpg", "Detail_img_path": "data/model-img/model/13737242_17101750_300.jpg", "brand": "Fleur Du Mal", "price": 184, "shortDescription": "Grommet Triangle Top", "stockTotal": 20}, {"id": 2013, "img_path": "data/cutout-img/cutout/14262087_20218193_300.jpg", "Detail_img_path": "data/model-img/model/14262087_20218196_300.jpg", "brand": "Gianvito Rossi", "price": 2273, "shortDescription": "zip-up ankle boots", "stockTotal": 11}]}

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
            <img src={`${apiBaseUrl}/${img_path}`}  className='max-w-[200px] lg:max-w-sm'/>
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
