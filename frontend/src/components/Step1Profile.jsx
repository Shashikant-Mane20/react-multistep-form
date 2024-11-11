// import React, { useState } from 'react';

// const Step1Profile = ({ nextStep, handleChange }) => {
//     const [previewImage, setPreviewImage] = useState(null);

//     // Handle file input change and set preview
//     const handleFileChange = (file) => {
//         handleChange(file); // Pass file to parent component or state
//         const reader = new FileReader();
//         reader.onloadend = () => {
//             setPreviewImage(reader.result); // Set image preview
//         };
//         reader.readAsDataURL(file);
//     };

//     return (
//         <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
//             {/* Card Container */}
//             <div className="flex max-w-4xl w-full bg-white p-8 rounded-lg shadow-lg space-x-8">
//                 {/* Form Section (Left) */}
//                 <div className="w-1/2 bg-gray-50 p-6 rounded-lg shadow-md">
//                     <h2 className="text-xl font-semibold text-center mb-6">Step 1: Upload Profile Photo</h2>
//                     <input
//                         type="file"
//                         onChange={(e) => handleFileChange(e.target.files[0])}
//                         className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                     <button
//                         onClick={nextStep}
//                         className="w-full px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-200"
//                     >
//                         Next
//                     </button>
//                 </div>

//                 {/* Preview Section (Right) */}
//                 <div className="w-1/2 bg-gray-50 p-6 rounded-lg shadow-md text-center">
//                     <h3 className="text-lg font-medium mb-4">Profile Photo Preview</h3>
//                     {previewImage ? (
//                         <img src={previewImage} alt="Profile Preview" className="w-full h-auto max-h-80 object-cover rounded-lg" />
//                     ) : (
//                         <p>No image selected</p>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Step1Profile;

import React, { useRef, useState, useEffect } from "react";
import { BiPencil } from "react-icons/bi";
import Modal from "./Modal"; 

const Step1Profile = ({ nextStep, handleChange, values }) => {
  const avatarUrl = useRef(
    localStorage.getItem("avatar") || "https://avatarfiles.alphacoders.com/161/161002.jpg"
  );
  const [modalOpen, setModalOpen] = useState(false);
  const [avatar, setAvatar] = useState(avatarUrl.current);

  const updateAvatar = (imgSrc) => {
    avatarUrl.current = imgSrc;
    setAvatar(imgSrc);
    localStorage.setItem("avatar", imgSrc); // Store the new avatar in localStorage
  };

  useEffect(() => {
    const savedAvatar = localStorage.getItem("avatar");
    if (savedAvatar) {
      setAvatar(savedAvatar); // Load avatar from localStorage on component mount
    }
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      {/* Card Container */}
      <div className="flex max-w-4xl w-full bg-white p-8 rounded-lg shadow-lg space-x-8">
        
        {/* Profile Picture Section (Left) */}
        <div className="flex flex-col items-center pt-12 w-1/2">
          <div className="relative">
            <img
              src={avatar}
              alt="Avatar"
              className="w-[150px] h-[150px] rounded-full border-2 border-gray-400"
            />
            <button
              className="absolute -bottom-3 left-0 right-0 m-auto w-fit p-[.35rem] rounded-full bg-gray-800 hover:bg-gray-700 border border-gray-600"
              title="Change photo"
              onClick={() => setModalOpen(true)}
            >
              <BiPencil />
            </button>
          </div>
          {/* <h2 className="text-white font-bold mt-6">Shashikant Mane</h2>
          <p className="text-gray-500 text-xs mt-2">FullStack Developer</p> */}
          {modalOpen && (
            <Modal
              updateAvatar={updateAvatar}
              closeModal={() => setModalOpen(false)}
            />
          )}
        </div>

        {/* Form Section (Right) */}
        <div className="w-full bg-gray-50 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-center mb-6">Step 1: Profile Information</h2>

          {/* Name Input
          <div className="w-full mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
            //   value={values.name}
              onChange={handleChange('name')}
              className="w-full px-4 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div> */}

          {/* Email Input */}
          {/* <div className="w-full mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={values.email}
              onChange={handleChange('email')}
              className="w-full px-4 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div> */}

          {/* Contact Number Input */}
          {/* <div className="w-full mb-6">
            <label className="block text-sm font-medium mb-2" htmlFor="contactNumber">Contact Number</label>
            <input
              id="contactNumber"
              type="text"
              value={values.contactNumber}
              onChange={handleChange('contactNumber')}
              className="w-full px-4 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div> */}

          {/* Navigation Buttons */}
          <div className="flex justify-between w-full mt-4">
            <button
              onClick={nextStep}
              className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-200"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step1Profile;


