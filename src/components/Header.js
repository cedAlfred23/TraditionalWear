import React, { useContext, useState, useEffect } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';
import { BsBag, BsCamera } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Logo from '../img/logo.svg';
import './Header.css'; // Import CSS file for additional styling

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  useEffect(() => {
    const handleScroll = () => {
      setIsActive(window.scrollY > 60);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed w-full z-10 transition-all ${isActive ? 'bg-white py-4 shadow-md' : 'bg-none py-6'}`}>
      <div className='container flex flex-1 justify-between items-center h-full mx-auto py-[10px]'>
        <Link to={'/'}>
          <div className=''>
            <img src={Logo} className='w-[40px]' alt='Logo' />
          </div>
        </Link>
        <div className='flex space-x-4 items-center'>
          <Link to={'/cameras'} className='text-gray-600 hover:text-blue-500 transition duration-300'>
            <div className='camera-icon-container'>
              <BsCamera className='text-2xl camera-icon' />
            </div>
          </Link>
          <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer flex relative'>
            <BsBag className='text-2xl camera-icon' />
            <div className='absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[12px] text-white rounded-full flex justify-center items-center bg-red-500 p-2'>
              {itemAmount}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
