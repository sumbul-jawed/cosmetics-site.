import React from 'react';

const page = () => {
  const collectionData = [
    { id: 1, name: "24K Gold Facial", price: 2500, Description: "Luxury facial kit enriched with 24K gold for glowing skin", image: `/24k-goldfacial.jpg` },
    { id: 2, name: "6pc Golden pearl Facial Kit", price: 1000, Description: "Complete facial kit for home spa experience", image: `/6pc-facial.jpg` },
    { id: 3, name: "Zara Facial Kit", price: 2500, Description: "Professional-grade facial kit for a rejuvenated look", image: `/zara-facial.jpg` },
    { id: 4, name: "Derma Mega Facial Kit", price: 3000, Description: "Advanced derma facial kit for deep cleansing", image: `/derma-megafacial-kit.jpg` },
    { id: 5, name: "Charcoal Facial Mask", price: 800, Description: "Detoxifying mask with activated charcoal", image: `/charcoal-facial-mask.jpg` },
    { id: 6, name: "BNB Face Wash", price: 600, Description: "Gentle daily face wash for radiant skin", image: `/bnb-facewash.jpg` },
    { id: 7, name: "Pond's Face Wash", price: 800, Description: "Deep-cleaning formula for fresh skin", image: `/ponds-wash.jpg` },
    { id: 8, name: "Seaweed Face Wash", price: 1200, Description: "Natural seaweed face wash for hydration", image: `/seaweed-face-wash.jpg` },
    { id: 9, name: "Vitamin C Face Wash", price: 1400, Description: "Brightening face wash with vitamin C", image: `/Vitamin-C-Face-Wash.jpg` },
    { id: 10, name: "Vince Sunblock", price: 700, Description: "Broad-spectrum sun protection for all skin types", image: `/vince-sunblock.jpg` },
    { id: 11, name: "Derma Sunblock", price: 1500, Description: "Long-lasting sunblock with SPF 50+", image: `/derma-sunblock.jpg` },
    { id: 12, name: "Whitening Sunblock", price: 1200, Description: "Whitening formula with UVA/UVB protection", image: `/whitening-sunblock.jpg` },
    { id: 13, name: "Glow Face Serum", price: 3500, Description: "Intensive brightening serum for glowing skin", image: `/glow-face-serum.jpg` },
    { id: 14, name: "Vitamin C Serum", price: 3000, Description: "Potent antioxidant serum with vitamin C", image: `/vitamin-c-serum.jpg` },
    { id: 15, name: "Whitening Cleanser", price: 1200, Description: "Gentle cleansing formula for brighter skin", image: `/whitening-cleanser.jpg` },
    { id: 16, name: "Dove Cleanser", price: 1000, Description: "Hydrating cleanser for everyday use", image: `/dove-cleanser.jpg` },
    { id: 17, name: "Golden Pearl Cleanser", price: 1100, Description: "Softening cleanser for a radiant complexion", image: `/goldenpearl-cleanser.jpg` },
    { id: 18, name: "Makeup Remover Cleanser", price: 1500, Description: "Effective makeup remover and cleanser in one", image: `/makeup-remover-cleanser.jpg` },
    { id: 19, name: "Pond's Cream", price: 700, Description: "Moisturizing cream for soft and smooth skin", image: `/ponds-cream.jpg` },
    { id: 20, name: "Night Cream", price: 1000, Description: "Nourishing night cream for overnight hydration", image: `/night-cream.jpg` },
    { id: 21, name: "Saeed Ghani Cream", price: 1200, Description: "Herbal cream for natural skin care", image: `/saed-ghani-cream.jpg` },
    { id: 22, name: "Vaseline Lotion", price: 900, Description: "Deep moisturizing lotion for dry skin", image: `/vaseline-lotion.jpg` },
    { id: 23, name: "Pond's Lotion", price: 1000, Description: "Non-greasy lotion for daily hydration", image: `/ponds-lotion.jpg` },
    { id: 24, name: "Nivea Lotion", price: 1200, Description: "Rich moisturizing lotion for smooth skin", image: `/nivea-lotion.jpg` },
    { id: 25, name: "Care Lotion", price: 800, Description: "Gentle care lotion with aloe vera", image: `/care-lotion.jpg` },
    { id: 26, name: "Hair Gel", price: 1000, Description: "Strong hold hair gel for long-lasting style", image: `/hair-gel.jpg` },

  ];

  return (
    <div className="makeup grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-2 mt-4">
      {collectionData.map((skinCare) => (
        <div
          key={skinCare.id}
          className="makeup-card bg-white shadow-lg rounded-lg overflow-hidden border hover:shadow-2xl transition-transform duration-300 transform hover:scale-105"
        >
          {/* Product Image */}
          <div className="relative">
            <img
              src={skinCare.image}
              alt={skinCare.name}
              className="relative flex justify-center items-center h-60"
            />
          </div>

          {/* Card Content */}
          <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-800">{skinCare.name}</h3>
            <p className="text-sm text-gray-600 mt-2">{skinCare.Description}</p>
            <div className="text-lg font-bold text-pink-500 mt-2">
              Rs. {skinCare.price}
            </div>
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
