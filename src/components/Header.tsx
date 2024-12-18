"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaShoppingBag } from "react-icons/fa";
import { IoIosWoman } from "react-icons/io";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50">
      <h1 className="text-center mt-4 font-extrabold leading-tight tracking-widest bg-white py-4 text-black text-base sm:text-lg md:text-xl lg:text-4xl">
        ~S_J Cosmetics~
      </h1>

      <div className=" bg-[#a6245a]">
        <nav className="flex items-center py-3 text-white text-base sm:text-lg md:text-xl lg:text-2xl">
          {/* Left: Search */}
          <div className="flex items-center space-x-2 ml-5">
            <input
              type="text"
              placeholder="Search..."
              className="px-2 py-1 w-48 rounded-md text-black focus:outline-none focus:ring focus:ring-purple-300 hidden sm:block"
            />
            <button className="px-2 py-1 bg-[#b94475] text-white rounded-md hover:bg-red-300 hidden sm:block">
              Search
            </button>
          </div>

          {/* Center: Navigation */}
          <div className="flex-grow">
            <div className="hidden md:flex justify-center space-x-7">
              <Link href="/" className="hover:text-red-400">Home</Link>
              <Link href="/Makeup" className="hover:text-red-400">MakeUp</Link>
              <Link href="/Skin" className=" hover:text-red-400">Skin Care</Link>
              <Link href="/Hair" className=" hover:text-red-400">Hair Care</Link>
              <Link href="/Fragrance" className=" hover:text-red-400">Fragrances</Link>
            </div>

            {/* Hamburger Menu */}
            <div className="md:hidden flex items-center justify-end">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white text-2xl mr-5 focus:outline-none"
              >
                {isMenuOpen ? <HiX /> : <HiMenu />}
              </button>
            </div>
          </div>

          {/* Right: Icons */}
          <div className="flex items-center space-x-5 mr-5">
            <FaShoppingBag className="text-white text-2xl" />
            <IoIosWoman className="text-white text-3xl" />
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#a6245a] text-white p-4">
            <Link href="/" className="block py-2 hover:text-red-400">Home</Link>
            <Link href="/Makeup" className="block py-2 hover:text-red-400">MakeUp</Link>
            <Link href="/Skin" className="block py-2 hover:text-red-400">Skin Care</Link>
            <Link href="/Hair" className="block py-2 hover:text-red-400">Hair Care</Link>
            <Link href="/Fragrance" className="block py-2 hover:text-red-400">Fragrances</Link>
            <div className="flex space-x-3 mt-4">
              <input
                type="text"
                placeholder="Search..."
                className="px-2 py-1 flex-grow rounded-md text-black focus:outline-none focus:ring focus:ring-purple-300"
              />
              <button className="px-2 py-1 bg-[#b94475] text-white rounded-md hover:bg-red-300">
                Search
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
