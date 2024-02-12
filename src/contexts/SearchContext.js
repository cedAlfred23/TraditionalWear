import React, { createContext, useState, useEffect } from "react";

export const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [uploadedPicture, setUploadedPicture] = useState(null);

 useEffect(() => {
    if (uploadedPicture) {
      console.log("Uploaded picture:", uploadedPicture);
    }
  }, [uploadedPicture]);

const handlePictureUpload = async (event) => {
    if (event.target.files.length > 0) {
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append('image', file);

        try {
            const response = await fetch('http://localhost:5000/api/predict', 
            {
                method: 'POST',
                body: formData
            });

            const data = await response.json();
            console.log('Response from server:', data);
            setResults(data);
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    }
};


 

//   useEffect(() => {
//     const fetchResult = async () => {
//       const response = await fetch("https://fakestoreapi.com/products");
//       const data = await response.json();
//       console.log("Hello Word");
//       console.log(data);
//       setResults(data);
//     };
//     fetchResult();
//   }, []);

  return (
    <SearchContext.Provider value={{ results, handlePictureUpload }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
