import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaYoutube, FaTwitter, FaInstagram, FaTiktok, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { MdOutlinePhoneCallback } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

function Footer() {
  return (
    <div>
      <footer className='bg-gray-300 py-8 px-6 md:px-20 text-black mt-5'>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8'>
        
          <div>
            <h3 className='text-2xl font-normal mb-4 text-black'>Contact Us</h3>
            <p className='mt-2'>Questions? We're here for you <br /> Monday - Saturday 9am-6pm.</p>
            <p className="flex items-center space-x-3  mt-4">
              <MdOutlinePhoneCallback size={20} />
              <div>+92 330 7893066</div>
            </p>
            <p className="flex items-center space-x-3 mt-3">
              <AiOutlineMail size={20} />
              <div>Sj_cosmetics344@gmail.com</div>
            </p>
            <p className="flex items-center space-x-3 mt-3">
              <CiLocationOn size={40} />
              <div>183-S, Quaid E Azam Industrial Estate, Karachi Pakistan.</div>
            </p>
            <h3 className="flex items-center space-x-2 text-black mt-8">Follow Us</h3>
            <div className='flex space-x-4 mb-7 mt-3'>
              <Link href="#"><FaFacebookF className='text-white bg-blue-800 w-8 h-8 rounded-full p-2' /></Link>
              <Link href="#"><FaLinkedin className='text-white bg-blue-600 w-8 h-8 rounded-full p-2' /></Link>
              <Link href="#"><FaInstagram className='text-white bg-gradient-to-br from-pink-500 to-orange-500 w-8 h-8 rounded-full p-2' /></Link>
              <Link href="#"><FaTiktok className='text-white bg-black w-8 h-8 rounded-full p-2' /></Link>
            </div>
            <p>Copyright © 2024, S_J — Powered by Shopify</p>
          </div>

        
          <div>
            <h3 className='text-2xl font-normal mb-4 text-black'>Company</h3>
            <ul className='space-y-2 md:space-y-6 text-lg '>
              <Link href="#"><li className='py-1 hover:underline hover:text-blue-400'>Returns & Exchanges</li></Link>
              <Link href="#"><li className='py-1 hover:underline  hover:text-blue-400'>Privacy Policy</li></Link>
              <Link href="#"><li className='py-1 hover:underline  hover:text-blue-400'>Contact us</li></Link>
              <Link href="#"><li className='py-1 hover:underline  hover:text-blue-400'>FAQs</li></Link>
              <Link href="#"><li className='py-1 hover:underline  hover:text-blue-400'>Refund Policy</li></Link>
              <Link href="#"><li className='py-1 hover:underline  hover:text-blue-400'>Terms of Service</li></Link>
              <Link href="#"><li className='py-1 hover:underline  hover:text-blue-400'>CAREER@S_J</li></Link>
            </ul>
          </div>

          <div>
            <h3 className='text-2xl font-normal mb-4 text-black'>Info</h3>
            <ul className='space-y-2 md:space-y-6 text-lg'>
              <Link href="#"><li className='py-1 hover:underline hover:text-blue-400'>About S_J Cosmetics</li></Link>
              <Link href="#"><li className='py-1 hover:underline hover:text-blue-400'>Happy Customers</li></Link>
              <Link href="#"><li className='py-1 hover:underline hover:text-blue-400'>Store Locator</li></Link>
              <Link href="#"><li className='py-1 hover:underline hover:text-blue-400'>Shipping Policy</li></Link>
              <Link href="#"><li className='py-1 hover:underline hover:text-blue-400'>New Arrival</li></Link>
              <Link href="#"><li className='py-1 hover:underline hover:text-blue-400'>TRACK YOUR ORDER</li></Link>
            </ul>
          </div>
          
          <div>
            <h3 className="text-2xl font-normal mb-4 text-black">Newsletter</h3>
            <p>Subscribe for store updates and discounts.</p>
            <div className="mt-4 flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your Email"
                className="px-2 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
              <button
                type="submit"
                className="bg-black text-white px-2 py-2 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;