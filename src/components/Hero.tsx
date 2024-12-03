import React from "react";

export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center h-screen flex items-center justify-center text-black mt-8"
      style={{ backgroundImage: "url('/back.jpg')" }}>
     
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 text-center">
        <h1 className="text-2xl md:text-6xl font-bold mb-4">
          Welcome to Cosmetics Products
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Elevate your beauty routine with our premium cosmetics collection. <br /> 
          Explore a world of luxurious products crafted to bring out your natural glow.
        </p>
        <button className="px-6 py-3 bg-[#a71552] hover:bg-[#f09ec0] text-white rounded-lg">
          Shop Now
        </button>
      </div>
    </section>
  );
}
