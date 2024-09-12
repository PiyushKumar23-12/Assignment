import React, { useState } from "react";
import { FaQuestionCircle, FaThLarge } from "react-icons/fa";

const ProfileCard = () => {
  const [selected, setSelected] = useState("About Me");

  return (
    <div>
      <div className="bg-gray-700 text-white p-6 rounded-xl shadow-lg w-full max-w-[37rem] h-auto relative opacity-60">
        <div className="absolute top-4 left-4 flex flex-col space-y-24">
          <FaQuestionCircle className="text-gray-400 text-xl cursor-pointer mt-4" />
          <FaThLarge className="text-gray-400 text-xl cursor-pointer" />
        </div>
        <div className="flex justify-between mb-4 p-2 bg-black rounded-xl w-full max-w-[30rem] mx-auto">
          <button
            className={`px-4 py-1 text-sm rounded-md w-[8rem] ${
              selected === "About Me"
                ? "bg-gray-500" // Remove the Tailwind shadow class
                : "text-white hover:bg-gray-600"
            }`}
            style={{
              boxShadow:
                selected === "About Me" ? "6px 6px 10px 10px black" : "none",
            }}
            onClick={() => setSelected("About Me")}
          >
            About Me
          </button>

          <button
            className={`px-4 py-1 text-sm rounded-md w-[8rem] ${
              selected === "Experiences"
                ? "bg-gray-500"
                : "text-white hover:bg-gray-600"
            }`}
            style={{
              boxShadow:
                selected === "Experiences" ? "6px 6px 10px 10px black" : "none",
            }}
            onClick={() => setSelected("Experiences")}
          >
            Experiences
          </button>

          <button
            className={`px-4 py-1 text-sm rounded-md w-[8rem] ${
              selected === "Recommended"
                ? "bg-gray-500"
                : "text-white hover:bg-gray-600"
            }`}
            style={{
              boxShadow:
                selected === "Recommended" ? "6px 6px 10px 10px black" : "none",
            }}
            onClick={() => setSelected("Recommended")}
          >
            Recommended
          </button>
        </div>
        <p className="text-gray-300 mx-4 md:mx-16">
          Hello! I'm Dave, your sales rep here from Salesforce. I've been
          working at this awesome company for 3 years now.
          <br />
          <br />I was born and raised in Albany, NY. I've been living in Santa
          Carla for the past 10 years. My wife Tiffany and my 4-year-old twin
          daughters, Emma and Ella, are my world. Both of them are just starting
          school, so my calendar is usually blocked between 9-10 AM.
        </p>
        
      </div>
      <div class="border-t border-gray-500 opacity-40 border-4 my-4 w-[34rem] mx-7"></div>
    </div>
  );
};

export default ProfileCard;
