import React, { useContext, useState, useEffect } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';
import { BsBag, BsCamera, BsX } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Logo from '../img/logo.svg';
import './Header.css';

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [isCameraModalOpen, setIsCameraModalOpen] = useState(false);
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

  const openCameraModal = () => {
    setIsCameraModalOpen(true);
  };

  const closeCameraModal = () => {
    setIsCameraModalOpen(false);
  };

  return (
    <header className={`fixed w-full z-10 transition-all ${isActive ? 'bg-white py-4 shadow-md' : 'bg-none py-6'}`}>
      <div className='container flex flex-1 justify-between items-center h-full mx-auto py-[10px]'>
        <Link to={'/'}>
          <div className={`logo-container ${isActive ? 'scale-110' : ''}`}>
            <img src={Logo} className={`w-[40px] ${isActive ? 'scale-125' : ''}`} alt='Logo' />
          </div>
        </Link>
        <div className='flex space-x-4 items-center'>
          <div onClick={openCameraModal} className='camera-icon-container text-gray-600 hover:text-blue-500 transition duration-300 cursor-pointer'>
            <div className={`camera-icon ${isActive ? 'scale-110' : ''}`}>
              <BsCamera className='text-2xl' />
            </div>
          </div>
          <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer flex relative'>
            <BsBag className={`text-2xl camera-icon ${isActive ? 'scale-110' : ''}`} />
            <div className={`absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[12px] text-white rounded-full flex justify-center items-center bg-red-500 p-2 transition-all ${isActive ? 'scale-110' : ''}`}>
              {itemAmount}
            </div>
          </div>
        </div>
      </div>

      {/* Camera Modal */}
      {isCameraModalOpen && (
        <div className='camera-modal'>
          <div className={`camera-modal-content ${isActive ? 'scale-110' : ''}`}>
            <div className='flex justify-end'>
              <BsX className='text-gray-600 cursor-pointer text-2xl' onClick={closeCameraModal} />
            </div>
            <h2 className='text-lg font-bold mb-4'>Fashion Search Engine</h2>
            <div className='drag-drop-section border-dashed border border-black'>
              
              {/* Drag and Drop Section */}
              <div className='border-gray-300 p-4 mb-4 text-center'>
                Drag an image here or{' '}
                <label htmlFor='imageUpload' className='text-blue-500 cursor-pointer'>
                  upload a file
                </label>
                <input type='file' id='imageUpload' className='hidden' />
              </div>

              {/* Line separator */}
              <div className='mb-4 line-separator'>
                <div></div>
                <p className='mx-2'>OR</p>
                <div></div>
              </div>


              {/* Image Link Search Section */}
              <div className='image-link-search-section p-4 rounded-md mb-4'>
                <div className='flex'>
                  <input
                    type='text'
                    id='imageUrl'
                    placeholder='Paste image link'
                    className='border p-2 w-full rounded-l-md focus:outline-none focus:ring focus:border-white'
                  />

                  <button className='bg-black text-white px-4 py-2 rounded-r-md hover:bg-gray-800 focus:outline-none focus:ring focus:border-white'>
                    Search
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

    </header>
  );
};

export default Header;