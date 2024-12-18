"use client";
import React from 'react';

function ProductPage() {
  const womenPerfumeData = [
      { 
      
      id: 1, 
        name: "Miss Dior Perfume", 
        price: 7500, 
        Description: "A timeless fragrance with notes of floral elegance and sophistication.", 
        image: `/11Miss-Dior-Perfume.jpg` 
      },
      { 
        id: 2, 
        name: "Passion Perfume", 
        price: 6500, 
        Description: "A romantic and alluring scent, perfect for special occasions.", 
        image: `/22passion.jpg` 
      },
      { 
        id: 3, 
        name: "Glitz Perfume", 
        price: 5800, 
        Description: "Sparkling with citrus and floral notes for a glamorous vibe.", 
        image: `/33GLITZ-perfume.jpg` 
      },
      { 
        id: 4, 
        name: "Pour Femme Perfume", 
        price: 7200, 
        Description: "An elegant fragrance that embodies femininity and grace.", 
        image: `/44pour-femme.jpg` 
      },
      { 
        id: 5, 
        name: "Rose Noir Perfume", 
        price: 6400, 
        Description: "Mysterious and bold, with a unique blend of woody and amber notes.", 
        image: `/55nosenoir.jpg` 
      },
      { 
        id: 6, 
        name: "Fierce Perfume", 
        price: 7000, 
        Description: "A dynamic scent for confident and empowered women.", 
        image: `/77fierce.jpg` 
      },
      { 
        id: 7, 
        name: "J. Uroosa Perfume", 
        price: 8000, 
        Description: "A sophisticated fragrance with a blend of fruity and floral aromas.", 
        image: `/88J.prfume.jpg` 
      },
      { 
        id: 8, 
        name: "J. Uroosa Perfume", 
        price: 5700, 
        Description: "A modern and fresh scent that adds a touch of charm to your day.", 
        image: `/99uroosa.jpg` 
      }
    ];
    

  const menPerfumeData = [
    
      { 
        id: 1, 
        name: "Iqbal Perfume", 
        price: 3500, 
        Description: "A timeless and bold fragrance with rich musky notes, perfect for any occasion.", 
        image: `/100iqbalperfume.jpg` 
      },
      { 
        id: 2, 
        name: "Black Noir Perfume", 
        price: 4000, 
        Description: "A sophisticated blend of spicy and woody notes for a mysterious appeal.", 
        image: `/122blacknoir.jpg` 
      },
      { 
        id: 3, 
        name: "Joop Perfume", 
        price: 4500, 
        Description: "An intense fragrance with floral and oriental notes, exuding power and charisma.", 
        image: `/133joop.jpg` 
      },
      { 
        id: 4, 
        name: "Bleu Perfume", 
        price: 3800, 
        Description: "Fresh and aromatic, with citrusy and woody notes for a clean, invigorating scent.", 
        image: `/144bleu.jpg` 
      },
      { 
        id: 5, 
        name: "Blue For Men Perfume", 
        price: 3900, 
        Description: "A fresh, aquatic fragrance with a blend of citrus, jasmine, and musk for a balanced scent.", 
        image: `/155Blue-For-Men.jpg` 
      },
      { 
        id: 6, 
        name: "Janan Perfume", 
        price: 4200, 
        Description: "A sophisticated, spicy fragrance with notes of leather and tobacco, ideal for evening wear.", 
        image: `/166janan.jpg` 
      },
      { 
        id: 7, 
        name: "Rhythm Perfume", 
        price: 4600, 
        Description: "An energetic and vibrant fragrance with floral and citrus notes, perfect for an active day.", 
        image: `/188rhythm.jpg` 
      },
      { 
        id: 8, 
        name: "Woody Perfume", 
        price: 5000, 
        Description: "A rich, deep fragrance with earthy and woody notes, offering a lasting impression.", 
        image: `/199woody.jpg` 
      }
    ];
    

  return (
    <div>
      {/* Women Perfume Section */}
      <h2 className="bg-pink-900 text-white text-xl text-center mt-4 py-3">
        Perfumes For Women Use
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-2 mt-4">
        {womenPerfumeData.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden border hover:shadow-2xl transition-transform duration-300 transform hover:scale-105"
          >
            <div className="relative flex justify-center items-center h-60">
              <img
                src={item.image}
                alt={item.name}
                className="h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
              <p className="text-sm text-gray-600 mt-2">{item.Description}</p>
              <div className="text-lg font-bold text-pink-800 mt-2">
                Rs. {item.price}
              </div>
            </div>
            <div className="p-4 pt-0">
              <button className="w-full bg-pink-800 text-white py-2 rounded hover:bg-pink-600 hover:scale-105 transition-all duration-200">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Men Perfume Section */}
      <h2 className="bg-blue-900 text-white text-xl text-center mt-8 py-2">
        Perfumes For Men Use
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-2 mt-4">
        {menPerfumeData.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden border hover:shadow-2xl transition-transform duration-300 transform hover:scale-105"
          >
            <div className="relative flex justify-center items-center h-60">
              <img
                src={item.image}
                alt={item.name}
                className="h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
              <p className="text-sm text-gray-600 mt-2">{item.Description}</p>
              <div className="text-lg font-bold text-blue-900 mt-2">
                Rs. {item.price}
              </div>
            </div>
            <div className="p-4 pt-0">
              <button className="w-full bg-blue-900 text-white py-2 rounded hover:bg-blue-600 hover:scale-105 transition-all duration-200">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductPage;
