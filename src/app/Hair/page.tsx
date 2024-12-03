import React from 'react';

const page = () => {
  const collectionData = [
    { id: 1, name: "Argan Oil Hair Serum", price: 1500, Description: "Nourishing serum for silky and smooth hair", image: `/3hair-serum.jpg` },
    { id: 2, name: "Loreal Hair Treatment Oil", price: 2000, Description: "Professional-grade Loreal treatment for frizz-free hair", image: `/4-hairgrowth-serum.jpg` },
    { id: 3, name: "Nature Hair serum", price: 1200, Description: "Deep conditioning serum for damaged hair", image: `/5hair-serumnature.jpg` },
    { id: 4, name: "Onion Hair Oil", price: 1000, Description: "Strengthens roots and promotes hair growth3", image: `/1onionhair-oil.jpg` },
    { id: 5, name: "Vatika Hair Oil", price: 800, Description: "Nourishes hair from root to tip", image: `/7vatikahair-oil.jpg` },
    { id: 6, name: "Coconut Hair Oil", price: 600, Description: "Natural oil for deep hair nourishment", image: `/8hair-oil-coconut.jpg` },
    { id: 7, name: "Amla Hair Oil", price: 900, Description: "Enriched with Amla for thick and shiny hair", image: `/9amla-hair-oil.jpg` },
    { id: 8, name: "Golden Pearl Hair Oil", price: 1400, Description: "Moisturizing oil for healthy scalp and hair", image: `/10goldenpearl-hairoil.jpg` },
    { id: 9, name: "Garnier Hair color", price: 700, Description: "Garnier Hair Color delivers vibrant, long-lasting color", image: `/2garnier-color.jpg` },
    { id: 10, name: "Fiber Hair Spray", price: 1500, Description: "keeping your hairstyle intact all day.", image: `/6fiber-hairspray.jpg` },
    { id: 11, name: "Sabalon Hair Spray", price: 3500, Description: " Leaves hair feeling natural and lightweight.", image: `/14hairspray.jpg` },
    { id: 12, name: "Nova Gold Hair spray", price: 1800, Description: "Sets hairstyles instantly without a sticky feel", image: `/15novahairspray.jpg` },
  ];

  return (
    <div className="makeup grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-2 mt-4">
      {collectionData.map((hairCare) => (
        <div
          key={hairCare.id}
          className="makeup-card bg-white shadow-lg rounded-lg overflow-hidden border hover:shadow-2xl transition-transform duration-300 transform hover:scale-105"
        >
          {/* Product Image */}
          <div className="relative">
            <img
              src={hairCare.image}
              alt={hairCare.name}
              className="relative flex justify-center items-center h-60"
            />
          </div>

          {/* Card Content */}
          <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-800">{hairCare.name}</h3>
            <p className="text-sm text-gray-600 mt-2">{hairCare.Description}</p>
            <div className="text-lg font-bold text-pink-500 mt-2">
              Rs. {hairCare.price}
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
