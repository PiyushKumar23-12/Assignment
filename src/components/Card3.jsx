import React, { useState } from "react";
import {
  FaQuestionCircle,
  FaThLarge,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import image from "../images/image1.jpeg";

const ProfileCard = () => {
  const [images, setImages] = useState([image, image, image]); // Initial three images

  const addImage = () => {
    setImages([...images, image]); // Add a new image to the array
  };

  return (
    <div className="bg-gray-700 text-white p-6 rounded-xl shadow-lg max-w-[37rem] h-[300px] relative opacity-60">
      <div className="absolute top-4 left-4 flex flex-col space-y-24">
        <FaQuestionCircle className="text-gray-400 text-xl cursor-pointer mt-4" />
        <FaThLarge className="text-gray-400 text-xl cursor-pointer" />
      </div>
      <div className="flex justify-between items-center mb-4 p-2 rounded-xl w-full">
        <div className="flex justify-between items-center mb-4 p-2 mx-8 bg-black rounded-3xl w-[8rem]">
          <button className="px-4 py-1 text-sm rounded-full bg-black text-white w-[8rem] h-10">
            GALLERY
          </button>
        </div>
        <div className="flex justify-between mb-4 rounded-full w-[9rem] h-12 relative">
  <button
    className="flex justify-center items-center p-2 bg-gray-400 rounded-full w-[11rem] h-12 text-white"
    onClick={addImage}
    style={{
      boxShadow: '3px 5px 9px black, -4px -4px 8px gray',
    }}
  >
    +ADD IMAGE
  </button>
</div>

        <div className="flex justify-between mb-4 p-4 bg-black rounded-full w-[3rem] h-[3rem] px-4 py-3 text-sm text-white" style={{
      boxShadow: '3px 5px 9px black, -5px -5px 10px gray',
    }}>
          <FaArrowLeft className="text-gray-400 text-xl cursor-pointer" />
        </div>
        <div className="flex justify-between mb-4 p-4 bg-black rounded-full w-[3rem] h-[3rem] px-4 py-3 text-sm text-white" style={{
      boxShadow: '3px 5px 9px black, -5px -5px 10px gray',
    }}>
          <FaArrowRight className="text-gray-400 text-xl cursor-pointer" />
        </div>
      </div>
      <div className="flex space-x-4 mx-10 my-6 overflow-x-auto">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Placeholder ${index + 1}`}
            className="w-36 h-36 object-cover rounded-md"
          />
        ))}
      </div>
      <div class="border-t border-gray-500 opacity-60 border-4 my-8"></div>
    </div>
  );
};

export default ProfileCard;
