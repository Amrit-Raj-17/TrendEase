import React from "react";
import img1 from '../../assets/frontend_assets/hero_2.png';

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Background Image */}
      <img
        src={img1}
        alt="E-commerce Background"
        className="absolute inset-0 w-full h-full block z-0" // Image needs z-0 (or lower)
      />
      
      {/* Optional: Semi-transparent Overlay for better text readability */}
      {/* This div should also be absolute and have a z-index between the image and text */}
      <div className="absolute inset-y-0 left-0 w-1/2 bg-black bg-opacity-50 z-10"></div> 

      {/* Text Content positioned over the image on the left */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 p-8 text-white max-w-xl z-20"> {/* Text needs z-20 (or higher) */}
        <h1 className="text-5xl font-bold mb-4 font-serif">Discover Your Style</h1>
        <p className="text-lg mb-6 font-serif">
          Explore our curated collection of trendy fashion. Shop now for the best deals!
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full text-xl transition duration-300 ease-in-out">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Hero;