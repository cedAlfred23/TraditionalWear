import React from 'react';
import hero from '../img/hero.webp';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
  <section className='h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24'>
    <div className='container mx-auto flex justify-around h-full'>
      <div className='flex flex-col p-14 justify-center m-3'>
        <div className=' font-semibold flex items-center uppercase'>
          <div className='w-10 h-[2px] bg-blue-500 mr-3 uppercase'></div>New Trend
        </div>
        <h1 className='  p-0 text-[50px] leading-[1.1] font-light mb-4 uppercase md:text-[70px]'>
          Vision Search Engine <br/>
          <span className='font-semibold uppercase'> AI powered</span>
        </h1>
        <div className=' font-semibold flex items-center uppercase'>
          <div className='w-10 h-[2px] bg-blue-500 mr-3 uppercase'></div>
        </div>
        {/* <Link to={'/'} className='self-start uppercase font-semibold border-b-2 border-primary hover:border-b-0'>Discover more</Link> */}
      </div>
      <div>
        <img src={hero} alt='Description of hero' className='hidden lg:block w-full h-[695px] items-end justify-end md:h-[500]'/>
      </div>
    </div>
  </section>)
};

export default Hero;