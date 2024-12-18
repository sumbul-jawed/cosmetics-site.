"use client";
import React from 'react';

const page = () => {
  const collectionData = [
    { id: 1, name: "Eye Pencil", price: 500, Description: "Long-lasting waterproof eye pencil", image: `/eye-pencil.jpg` },
    { id: 2, name: "Stamp Eyeliner", price: 800, Description: "Dual-ended winged eyeliner stamp", image: `/stamp.jpg` },
    { id: 3, name: "Gel Eyeliner", price: 1000, Description: "Smudge-proof gel eyeliner for bold eyes", image: `/gel.jpg` },
    { id: 4, name: "Eyebrow pencil with brush", price: 1200, Description: "Eyebrow styling set", image: `/eyebrow.jpg` },
    { id: 5, name: "Eyebrow Pencil", price: 600, Description: "Natural-looking eyebrow pencil", image: `/eyebrow2.jpg` },
    { id: 6, name: "Concealer", price: 1500, Description: "Full-coverage liquid concealer", image: `/canceler.jpg` },
    { id: 7, name: "Miss Rose concealer", price: 2000, Description: "Miss-Rose-one color liquid concealer", image: `/canceler2.jpg` },
    { id: 8, name: "Shimmer Highlighter", price: 1800, Description: "Glow-enhancing highlighter with shimmer", image: `/shimmer highliter.jpg` },
    { id: 9, name: "Iconic Liquid Highlighter", price: 1600, Description: "Liquid highlighter for a radiant finish", image: `/hightlighter.jpg` },
    { id: 10, name: "palette Highlighter", price: 1500, Description: "Pressed powder highlighter for all-day glow", image: `/hightlighter2.jpg` },
    { id: 11, name: "Curl Mascara", price: 900, Description: "Volumizing and curling mascara", image: `/curl-maskara.jpg` },
    { id: 12, name: "Waterproof Mascara", price: 1000, Description: "Long-lasting waterproof mascara", image: `/maskara.jpg` },
    { id: 13, name: "Kashees foundation", price: 3500, Description: "Professional-longlasting water-proof foundation", image: `/kashees.jpg` },
    { id: 14, name: "Lit Liquid Foundation", price: 1800, Description: "Lightweight liquid foundation for smooth skin", image: `/liquid.jpg` },
    { id: 15, name: "Maybelline Foundation", price: 2000, Description: "Long-lasting matte foundation by Maybelline", image: `/maybeline.jpg` },
    { id: 16, name: "Miss Rose Foundation", price: 1200, Description: "Perfect glow for all skin color by Miss Rose", image: `/missrose.jpg` },
    { id: 17, name: "Mate and Shimmer Color Palette", price: 2500, Description: "Versatile eyeshadow palette mate and shimmer shades", image: `/plattes.jpg` },
    { id: 18, name: "Glitter Palette", price: 3500, Description: "Sparkling glitter palette for bold looks", image: `/glitter.jpg` },
    { id: 19, name: "96-eyeshadow Palette", price: 4000, Description: "Compact blush palette with 96 shades", image: `/96plattes.jpg` },
    { id: 20, name: "8 different Blushes color", price: 1500, Description: "Smooth powder blush for a natural flush", image: `/8blush.jpg` },
    { id: 20, name: "Pinkish Blush", price: 800, Description: "Smooth pinkish blush for a natural look", image: `/blush.jpg` },
    { id: 20, name: "Miss Rose Face Powder", price: 1000, Description: "Smooth face powder for fix foundation", image: `/missrosepowder.jpg` },
    { id: 21, name: "Makeup Fixer", price: 1500, Description: "Setting spray to lock in your look", image: `/fixer.jpg` },
    { id: 21, name: "Makeup Fixer", price: 1600, Description: "Setting spray to lock in your look", image: `/makefixer.jpg` },
  ];

  return (
    <div className="makeup grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-2 mt-4">
      {collectionData.map((makeup) => (
        <div
          key={makeup.id}
          className="makeup-card bg-white shadow-lg rounded-lg overflow-hidden border hover:shadow-2xl transition-transform duration-300 transform hover:scale-105"
        >
          {/* Product Image */}
          <div className="relative">
            <img src={makeup.image} alt={makeup.name} className="relative flex justify-center items-center h-60" />
            
          </div>

          {/* Card Content */}
          <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-800">{makeup.name}</h3>
            <p className="text-sm text-gray-600 mt-2">{makeup.Description}</p>
            <div className="text-lg font-bold text-pink-500 mt-2">Rs. {makeup.price}</div>
          </div>

          {/* Add to Cart Button */}
          <div className="p-4 pt-0">
            <button className="w-full bg-pink-500 text-white py-2 rounded hover:bg-pink-600 hover:scale-105 transition-all duration-200">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default page;
