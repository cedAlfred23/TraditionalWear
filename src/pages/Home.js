// Home.js
import React, { useContext } from "react";
import ProductComponent from "../components/Product";
import Product from "../components/HeroProduct";
import Hero from "../components/Hero";
import { ProductContext } from "../contexts/ProductContext";

const Home = () => {
  // const { products } = useContext(ProductContext);

  // console.log('Products:', products);

  const products = {"similar_images": [{"id": 108107, "img_path": "data/cutout-img/cutout/13616393_17700784_300.jpg", "Detail_img_path": "data/model-img/model/13616393_17700785_300.jpg", "brand": "Morgan Lane", "price": 386, "shortDescription": "printed button shirt", "stockTotal": 12}, {"id": 83949, "img_path": "data/cutout-img/cutout/13774518_17107747_300.jpg", "Detail_img_path": "data/model-img/model/13774518_17107754_300.jpg", "brand": "Dolce & Gabbana", "price": 1100, "shortDescription": "floral wide-leg trousers", "stockTotal": 1}, {"id": 2744, "img_path": "data/cutout-img/cutout/14247494_20189261_300.jpg", "Detail_img_path": "data/model-img/model/14247494_20313162_300.jpg", "brand": "P.A.R.O.S.H.", "price": 607, "shortDescription": "sequin zebra T-shirt dress", "stockTotal": 10}, {"id": 6505, "img_path": "data/cutout-img/cutout/14220283_20216464_300.jpg", "Detail_img_path": "data/model-img/model/14220283_20277749_300.jpg", "brand": "Lost Daze", "price": 499, "shortDescription": "You're So Pretty T-shirt", "stockTotal": 4}, {"id": 43844, "img_path": "data/cutout-img/cutout/14006303_18118822_300.jpg", "Detail_img_path": "data/model-img/model/14006303_18118824_300.jpg", "brand": "Prada", "price": 1185, "shortDescription": "lightning bolt print shirt", "stockTotal": 26}, {"id": 138317, "img_path": "data/cutout-img/cutout/13423783_18108259_300.jpg", "Detail_img_path": "data/model-img/model/13423783_18108260_300.jpg", "brand": "Valentino", "price": 960, "shortDescription": "Valentino Garavani Rockstud large pouch", "stockTotal": 7}, {"id": 55172, "img_path": "data/cutout-img/cutout/13944380_17942903_300.jpg", "Detail_img_path": "data/model-img/model/13944380_17942906_300.jpg", "brand": "Johanna Ortiz", "price": 921, "shortDescription": "kimono coat", "stockTotal": 2}, {"id": 87586, "img_path": "data/cutout-img/cutout/13745776_17074726_300.jpg", "Detail_img_path": "data/model-img/model/13745776_17074727_300.jpg", "brand": "La Doublej", "price": 479, "shortDescription": "Clerk shirt", "stockTotal": 17}, {"id": 102712, "img_path": "data/cutout-img/cutout/13648618_17524485_300.jpg", "Detail_img_path": "data/model-img/model/13648618_17524488_300.jpg", "brand": "Etro", "price": 1280, "shortDescription": "panelled woven shoulder bag", "stockTotal": 4}, {"id": 3045, "img_path": "data/cutout-img/cutout/14243445_20206679_300.jpg", "Detail_img_path": "data/model-img/model/14243445_20317008_300.jpg", "brand": "Veronica Beard", "price": 940, "shortDescription": "floral flared dress", "stockTotal": 3}, {"id": 184188, "img_path": "data/cutout-img/cutout/11756124_8316902_300.jpg", "Detail_img_path": "data/model-img/model/11756124_8316904_300.jpg", "brand": "Emanuel Ungaro Pre-Owned", "price": 457, "shortDescription": "jacquard printed cropped jacket", "stockTotal": 1}, {"id": 11909, "img_path": "data/cutout-img/cutout/14185913_19124788_300.jpg", "Detail_img_path": "data/model-img/model/14185913_19124792_300.jpg", "brand": "Lhd", "price": 1220, "shortDescription": "The Star Island shirt", "stockTotal": 6}]}  

  return (
    <div>
      <Hero />
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-screen-xl mx-auto">
            {products.similar_images.map((product) => {
              return <Product key={product.id} product={product} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
