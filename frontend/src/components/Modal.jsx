import React, { useState } from 'react';

const Modal = ({ updateAvatar, closeModal }) => {
  const [imgSrc, setImgSrc] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImgSrc(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    updateAvatar(imgSrc);
    closeModal(); // Close modal after saving the avatar
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-1/2">
        <h2 className="text-xl font-semibold text-center mb-4">Update Profile Picture</h2>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="mb-4"
        />
        {imgSrc && (
          <div className="mb-4">
            <img src={imgSrc} alt="Preview" className="w-[150px] h-[150px] rounded-full border-2 border-gray-400" />
          </div>
        )}
        <div className="flex justify-between">
          <button onClick={closeModal} className="px-4 py-2 bg-gray-500 text-white rounded-md">Cancel</button>
          <button onClick={handleSave} className="px-4 py-2 bg-blue-500 text-white rounded-md">Save</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
