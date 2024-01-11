// import React, { useContext, useState, useEffect } from 'react';
// import { SidebarContext } from '../contexts/SidebarContext';
// import { CartContext } from '../contexts/CartContext';
// import { BsBag } from 'react-icons/bs';
// import { Link } from 'react-router-dom';
// import Logo from '../img/logo.svg';

// const CameraModal = ({ onClose, onCapture }) => {
//   const handleCapture = () => {
//     onCapture();
//     onClose();
//   };

//   return (
//     <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
//       <div className="bg-white p-6 rounded-lg">
//         <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
//           Close
//         </button>
//         <h2 className="text-2xl font-semibold mb-4">Camera Capture</h2>
//         <button onClick={handleCapture} className="bg-blue-500 text-white px-4 py-2 rounded-md">
//           Capture
//         </button>
//       </div>
//     </div>
//   );
// };

// const Header = () => {
//   const [isActive, setIsActive] = useState(false);
//   const [isCameraModalOpen, setIsCameraModalOpen] = useState(false);
//   const { isOpen, setIsOpen } = useContext(SidebarContext);
//   const { itemAmount } = useContext(CartContext);

//   useEffect(() => {
//     window.addEventListener('scroll', () => {
//       window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
//     });
//   }, []);

//   const handleFileUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = (e) => {
//         const uploadedImage = e.target.result;
//         console.log('File Uploaded:', uploadedImage);
//         // Handle the uploaded image as needed
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleCameraCapture = () => {
//     setIsCameraModalOpen(true);
//   };

//   const closeCameraModal = () => {
//     setIsCameraModalOpen(false);
//   };

//   const captureImageFromCamera = async () => {
//     try {
//       const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//       const video = document.createElement('video');
//       video.srcObject = stream;
//       video.play();

//       // Optionally, you can set the stream to state for further use
//       // setCameraStream(stream);
//     } catch (error) {
//       console.error('Error accessing camera:', error);
//     }
//   };

//   return (
//     <header className={`${isActive ? 'bg-white py-4 shadow-md' : 'bg-none py-6'} fixed w-full z-10 transition-all`}>
//       <div className='container flex flex-1 justify-between items-center h-full mx-auto py-[10px]'>
//         <Link to={'/'}>
//           <div className=''>
//             <img src={Logo} className='w-[40px]' alt='Logo' />
//           </div>
//         </Link>
//         <div className='flex space-x-4'>
//           <input type="file" onChange={handleFileUpload} className='hidden' id='fileInput' />
//           <label htmlFor='fileInput' className='cursor-pointer'>
//             Upload
//           </label>
//           <button onClick={handleCameraCapture} className='cursor-pointer'>
//             Capture
//           </button>
//           <BsBag className='text-2xl' />
//           <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer flex relative'>
//             <BsBag className='text-2xl' />
//             <div className='absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[12px] text-white rounded-full flex justify-center items-center bg-red-500 p-2'>
//               {itemAmount}
//             </div>
//           </div>
//         </div>
//       </div>
//       {isCameraModalOpen && (
//         <CameraModal onClose={closeCameraModal} onCapture={captureImageFromCamera} />
//       )}
//     </header>
//   );
// };

// export default Header;


import React, { useContext, useState, useEffect } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';
import { BsBag } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Logo from '../img/logo.svg';

const CameraModal = ({ onClose, onCapture }) => {
  const videoRef = React.useRef(null);

  useEffect(() => {
    const setupCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      } catch (error) {
        console.error('Error accessing camera:', error);
      }
    };

    setupCamera();

    return () => {
      // Cleanup - stop the camera stream when the modal is closed
      if (videoRef.current.srcObject) {
        const tracks = videoRef.current.srcObject.getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  }, []);

  const handleCapture = () => {
    // Capture logic
    onCapture();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
          Close
        </button>
        <h2 className="text-2xl font-semibold mb-4">Camera Capture</h2>
        <video ref={videoRef} className="w-full h-auto mb-4" />
        <button onClick={handleCapture} className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Capture
        </button>
      </div>
    </div>
  );
};

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [isCameraModalOpen, setIsCameraModalOpen] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  }, []);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const uploadedImage = e.target.result;
        console.log('File Uploaded:', uploadedImage);
        // Handle the uploaded image as needed
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCameraCapture = () => {
    setIsCameraModalOpen(true);
  };

  const closeCameraModal = () => {
    setIsCameraModalOpen(false);
  };

  const captureImageFromCamera = async () => {
    // Capture image logic
    console.log('Capturing image from camera');
  };

  return (
    <header className={`${isActive ? 'bg-white py-4 shadow-md' : 'bg-none py-6'} fixed w-full z-10 transition-all`}>
      <div className='container flex flex-1 justify-between items-center h-full mx-auto py-[10px]'>
        <Link to={'/'}>
          <div className=''>
            <img src={Logo} className='w-[40px]' alt='Logo' />
          </div>
        </Link>
        <div className='flex space-x-4'>
          <input type="file" onChange={handleFileUpload} className='hidden' id='fileInput' />
          <label htmlFor='fileInput' className='cursor-pointer'>
            Upload
          </label>
          <button onClick={handleCameraCapture} className='cursor-pointer'>
            Capture
          </button>
          {/* <BsBag className='text-2xl' /> */}
          <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer flex relative'>
            <BsBag className='text-2xl' />
            <div className='absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[12px] text-white rounded-full flex justify-center items-center bg-red-500 p-2'>
              {itemAmount}
            </div>
          </div>
        </div>
      </div>
      {isCameraModalOpen && (
        <CameraModal onClose={closeCameraModal} onCapture={captureImageFromCamera} />
      )}
    </header>
  );
};

export default Header;

