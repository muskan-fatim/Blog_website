'use client';
import { useState } from 'react';
import { HomeIcon, InboxIcon,  PhoneIcon, SearchIcon } from '@heroicons/react/outline';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-white text-2xl font-bold">Blog Brew</a>
          <div className="hidden md:flex">
            <a href="/" className="text-gray-100 flex hover:text-white mx-2">
              <HomeIcon className="w-5 h-5 mr-2" /> Home
            </a>
            <a href="/about" className="text-gray-100 flex hover:text-white mx-2">
              <InboxIcon className="w-5 h-5 mr-2" /> About
            </a>
            <a href="/contact" className="text-gray-100 flex hover:text-white mx-2">
              <PhoneIcon className="w-5 h-5 mr-2" /> Contact
            </a>
            <a href="/explore" className="text-gray-100 flex hover:text-white mx-2">
              <SearchIcon className="w-5 h-5 mr-2" /> Explore All
            </a>
          </div>
          <button
            className="md:hidden text-gray-300 hover:text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden fixed inset-0 flex z-50">
            <div className="flex-1 bg-black bg-opacity-50" onClick={() => setIsOpen(false)}></div>
            <div className="bg-gray-800 w-64 h-full p-4 fixed right-0">
              <button
                className="text-gray-300 hover:text-white focus:outline-none mb-4"
                onClick={() => setIsOpen(false)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
              <a href="/" className="block text-gray-300 hover:text-white px-2 py-1 text-lg flex items-center">
                <HomeIcon className="w-5 h-5 mr-2" /> Home
              </a>
              <a href="/about" className="block text-gray-300 hover:text-white px-2 py-1 text-lg flex items-center">
                <InboxIcon className="w-5 h-5 mr-2" /> About
              </a>
              <a href="/Contact" className="block text-gray-300 hover:text-white px-2 py-1 text-lg flex items-center">
                <PhoneIcon className="w-5 h-5 mr-2" /> Contact
              </a>
              <a href="/explore" className="block text-gray-300 hover:text-white px-2 py-1 text-lg flex items-center">
                <SearchIcon className="w-5 h-5 mr-2" /> Explore All
              </a>
              
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}