// Home.js
import React, { useContext } from 'react';
import ProductComponent from '../components/Product';
import Hero from '../components/Hero';
import { ProductContext } from '../contexts/ProductContext';

const Home = () => {
  // const { products } = useContext(ProductContext);

  // console.log('Products:', products);

  const products = {"similar_images": [{"id": 34057, "img_path": "data/model-img/model/14063249_18422875_300.jpg", "brand": "Burberry", "price": "$3,490", "availableSizes": "[{'scaleId': 0, 'size': 'One Size'}]", "shortDescription": "medium Cube tote bag", "stockTotal": 10}, {"id": 12518, "img_path": "data/model-img/model/14182146_20313392_300.jpg", "brand": "Herm\u00e8s Pre-Owned", "price": "$22,656", "availableSizes": "[{'scaleId': 0, 'size': 'One Size'}]", "shortDescription": "Birkin bag", "stockTotal": 1}, {"id": 144095, "img_path": "data/model-img/model/13351952_15594670_300.jpg", "brand": "Prada", "price": "$4,370", "availableSizes": "[{'scaleId': 0, 'size': 'One Size'}]", "shortDescription": "Cahier shoulder bag", "stockTotal": 1}, {"id": 36913, "img_path": "data/model-img/model/14040955_18597173_300.jpg", "brand": "Louis Vuitton Pre-Owned", "price": "$5,438", "availableSizes": "[{'scaleId': 0, 'size': 'One Size'}]", "shortDescription": "Limited Edition Etui Dom Perignon Bottle Holder", "stockTotal": 1}, {"id": 84906, "img_path": "data/model-img/model/13766105_17095724_300.jpg", "brand": "Dolce & Gabbana", "price": "$279", "availableSizes": "[{'scaleId': 0, 'size': 'XS'}, {'scaleId': 0, 'size': 'S'}]", "shortDescription": "printed push-up bikini  top", "stockTotal": 3}, {"id": 163071, "img_path": "data/model-img/model/12963957_13598524_300.jpg", "brand": "Burberry", "price": "$3,050", "availableSizes": "[{'scaleId': 0, 'size': 'One Size'}]", "shortDescription": "The Small Leather Belt Bag", "stockTotal": 35}, {"id": 17956, "img_path": "data/model-img/model/14151992_20270228_300.jpg", "brand": "Manu Atelier", "price": "$803", "availableSizes": "[{'scaleId': 0, 'size': 'One Size'}]", "shortDescription": "Demi tote bag", "stockTotal": 7}, {"id": 162244, "img_path": "data/model-img/model/12976882_14955772_300.jpg", "brand": "Burberry", "price": "$2,190", "availableSizes": "[{'scaleId': 0, 'size': 'One Size'}]", "shortDescription": "The Giant Reversible Tote in Vintage Check", "stockTotal": 70}, {"id": 38602, "img_path": "data/model-img/model/14032956_18383240_300.jpg", "brand": "Burberry", "price": "$3,180", "availableSizes": "[{'scaleId': 0, 'size': 'One Size'}]", "shortDescription": "The Small Leather Triple Stud Belt Bag", "stockTotal": 58}, {"id": 108102, "img_path": "data/model-img/model/13616398_16425043_300.jpg", "brand": "Morgan Lane", "price": "$562", "availableSizes": "[{'scaleId': 0, 'size': 'XS'}, {'scaleId': 0, 'size': 'S'}, {'scaleId': 0, 'size': 'M'}, {'scaleId': 0, 'size': 'L'}]", "shortDescription": "Keira crop top", "stockTotal": 10}, {"id": 89104, "img_path": "data/model-img/model/13737242_17101750_300.jpg", "brand": "Fleur Du Mal", "price": "$184", "availableSizes": "[{'scaleId': 0, 'size': 'XS'}, {'scaleId': 0, 'size': 'S'}, {'scaleId': 0, 'size': 'M'}, {'scaleId': 0, 'size': 'L'}]", "shortDescription": "Grommet Triangle Top", "stockTotal": 20}, {"id": 2013, "img_path": "data/model-img/model/14262087_20218196_300.jpg", "brand": "Gianvito Rossi", "price": "$2,273", "availableSizes": NaN, "shortDescription": "zip-up ankle boots", "stockTotal": 11}]}
  return (
    <div>
      <Hero />
      <ProductComponent products={products} />
    </div>
  );
};

export default Home;
