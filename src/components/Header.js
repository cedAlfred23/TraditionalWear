import React, { useContext, useState, useEffect, useCallback } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import { ProductContext } from '../contexts/ProductContext';
import { CartContext } from '../contexts/CartContext';
import { BsBag, BsX } from 'react-icons/bs';
import { FiUpload } from 'react-icons/fi'; 
import { Link } from 'react-router-dom';
import Logo from '../img/logo.svg';
import Loading from './Loading'; // Import the Loading component
import './Header.css';

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [isCameraModalOpen, setIsCameraModalOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Add loading state
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  const { fetchProductData } = useContext(ProductContext);
  const [error, setError] = useState('');

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

  const searchImages = async (requestData) => {
    setIsLoading(true);
    setError(''); // Reset error state before fetching data
    try {
      await fetchProductData(requestData);
    } catch (error) {
      console.error('Error searching images:', error);
      setError('Failed to fetch image data. Please try again.'); // Set error message if fetching fails
    } finally {
      setIsLoading(false);
    }
  };
  
  const validateImageUrl = (url) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        if (img.width === 0 || img.height === 0) {
          reject('The provided URL does not point to a valid image.');
        } else {
          resolve();
        }
      };
      img.onerror = () => {
        reject('The provided URL does not point to a valid image.');
      };
      img.src = url;
    });
  };

  const searchImagesFromUrl = async () => {
    setIsLoading(true);
    setError(''); // Reset error state before validating URL
    try {
      await validateImageUrl(imageUrl);
      const requestData = new FormData();
      requestData.append('url', imageUrl);
      await searchImages(requestData);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };  

  const searchImagesFromUpload = useCallback(() => {
    if (selectedFile) {
      const requestData = new FormData();
      requestData.append('image', selectedFile);
      searchImages(requestData);
      closeCameraModal();
    }
  }, [selectedFile]);

  useEffect(() => {
    searchImagesFromUpload();
  }, [selectedFile]);

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
              <FiUpload className='text-2xl' />
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

      {isLoading && <Loading />} {/* Render loading component when loading */}
      {error && (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-2 ml-4 cursor-pointer transition-opacity duration-500"
          role="alert"
          onClick={() => setError('')}
        >
          {error}
          <span className="absolute top-0 bottom-0 right-0 px-4 py-3" onClick={() => setError('')}>
            <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <title>Close</title>
              <path
                fillRule="evenodd"
                d="M14.348 5.652a.5.5 0 01.707.708l-8.485 8.485a.5.5 0 01-.707-.708l8.485-8.485zM5.653 5.652a.5.5 0 00-.707.708l8.485 8.485a.5.5 0 00.707-.708L5.653 5.652z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>
      )}

      {/* Camera Modal */}
      {isCameraModalOpen && (
        <div className='camera-modal'>
          <div className={`camera-modal-content ${isActive ? 'scale-110' : ''}`}>
            <div className='flex justify-end'>
              <BsX className='text-gray-600 cursor-pointer text-2xl' onClick={closeCameraModal} />
            </div>
            <h2 className='text-lg font-bold mb-4'>Fashion Search Engine</h2>
            <div className='drag-drop-section border-dashed border border-black'>
              <div className='border-gray-300 p-4 mb-4 text-center'>
                Drag an image here or{' '}
                <label htmlFor='imageUpload' className='text-blue-500 cursor-pointer'>
                  upload a file
                </label>
                <input
                  type='file'
                  id='imageUpload'
                  className='hidden'
                  onChange={(e) => {
                    setSelectedFile(e.target.files[0]);
                  }}
                />
              </div>
              <div className='mb-4 line-separator'>
                <div></div>
                <p className='mx-2'>OR</p>
                <div></div>
              </div>
              <div className='image-link-search-section p-4 rounded-md mb-4'>
                <div className='flex'>
                  <input
                    type='text'
                    id='imageUrl'
                    placeholder='Paste image link'
                    className='border p-2 w-full rounded-l-md focus:outline-none focus:ring focus:border-white'
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                  />
                  <button
                    className='bg-black text-white px-4 py-2 rounded-r-md hover:bg-gray-800 focus:outline-none focus:ring focus:border-white'
                    onClick={() => {
                      searchImagesFromUrl();
                      closeCameraModal(); // Close the modal immediately after clicking the search button
                    }}
                  >
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
