import React, { useContext } from 'react';
import { SearchContext } from '../contexts/SearchContext';
import Product from '../components/Product';

const ResultPage = () => {
  const { results } = useContext(SearchContext);
  if (!results) {
    return (
      <section className="h-screen flex justify-center items-center">
        Loading...
      </section>
    );
  }

  const filterdResult = results.filter(item => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  });

  return (
    <div>
        <div className=" h-16"></div>
    <section className='py-16'>
      <div className='container mx-auto'>
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
          {results.map((product) => {
            return (
              <Product product={product} key={product.id}/>
            )
          })}
        </div>
      </div>
    </section>
  </div>
  )
};

export default ResultPage;
