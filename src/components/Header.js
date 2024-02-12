import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";
import Logo from "../img/logo.svg";
import { SearchContext } from "../contexts/SearchContext";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  const { handlePictureUpload } = useContext(SearchContext);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  }, []);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
    setShowModal(true);
  };

  const handleHaveResult = () => {
    if (selectedImage) {
      handlePictureUpload({ target: { files: [selectedImage] } });
      setShowModal(false);
      setSelectedImage(null);
      navigate("/result");
    }
  };

  const handleCancel = () => {
    setShowModal(false);
    setSelectedImage(null);
  };

  return (
    <header
      className={`${
        isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"
      } fixed w-full z-10 transition-all`}
    >
      <div className="container flex flex-1 justify-between items-center h-full mx-auto py-[10px]">
        <Link to={"/"}>
          <div className="">
            <img src={Logo} className="w-[40px]" alt="Logo" />
          </div>
        </Link>
        <div className="flex space-x-4">
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer flex relative"
          >
            <BsBag className="text-2xl" />
            <div className="absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[12px] text-white rounded-full flex justify-center items-center bg-red-500 p-2">
              {itemAmount}
            </div>
          </div>
          <div>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileSelect}
              style={{ display: "none" }}
              id="uploadButton"
            />
            <label htmlFor="uploadButton" className="cursor-pointer">
              Upload
            </label>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-4 rounded-lg">
            <img
              src={URL.createObjectURL(selectedImage)}
              alt="Selected"
              className="w-64 h-64 mx-auto mb-4"
            />
            <div className="flex justify-center">
              <button
                onClick={handleHaveResult}
                className="bg-blue-500 text-white px-4 py-2 rounded mr-4"
              >
                Have Result
              </button>
              <button
                onClick={handleCancel}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
