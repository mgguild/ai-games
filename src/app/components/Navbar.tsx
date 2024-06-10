"use client"
import React, { useState } from 'react';
import Image from "next/image"

const Navbar = () => {
  const [isClick, setIsClick] = useState(false);

  const toggleNavbar = () => {
    setIsClick(!isClick);
  };

  const closeNavbar = () => {
    setIsClick(false);
  };

  return (
    <nav className="bg-brand fixed sm:w-3/4 w-full z-10 top-0 sm:left-40 left-0">
      <div className="max-w-8xl mx-auto px-4 flex sm:justify-around justify-between items-center py-4">
        <div className="flex items-center space-x-4">
          <a href="/" className="text-white" onClick={closeNavbar}>
            <Image src="/aig_logo_small.png" alt="logo" width={45} height={30} />
          </a>
          <h1 className="hidden sm:block text-xl font-bold whitespace-nowrap text-white">ASTRA INTERACTIVE STUDIOS, INC.</h1>
        </div>
        <div className="hidden md:block">
          <div className="flex space-x-4">
           
            <a href="#about_us" className="text-white font-medium focus:underline hover:underline hover:text-violet-600 " onClick={closeNavbar}>
              About
            </a>
            <a href="#services" className="text-white font-medium focus:underline hover:underline hover:text-violet-600 " onClick={closeNavbar}>
              Services
            </a>
            <a href="#games" className="text-white font-medium focus:underline hover:underline hover:text-violet-600 " onClick={closeNavbar}>
              Portfolio
            </a>
            <a href="#team" className="text-white font-medium focus:underline hover:underline hover:text-violet-600 " onClick={closeNavbar}>
              Team
            </a>
            <a href="#contact_us" className="text-white font-medium  focus:underline hover:underline hover:text-violet-600 " onClick={closeNavbar}>
              Contact Us
            </a>
          </div>
        </div>
        <div className="md:hidden">
          <button className="inline-flex p-4 rounded-md text-violet-500 md:text-whitehover:text-pink-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" onClick={toggleNavbar}>
            {isClick ? (
              <svg className="h-8 w-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>
      {isClick && (
        <div className="md:hidden text-center">
          <div className="px-5 pt-5 pb-9 space-y-2">
          
            <a href="/" className="text-white font-medium text-2xl leading-10 block transition duration-300 focus:outline-none  focus:underline hover:underline hover:text-violet-600 " onClick={closeNavbar}>
              HOME
            </a>
            <a href="#about_us" className="text-white font-medium text-2xl leading-10 block transition duration-300 focus:outline-none  focus:underline hover:underline hover:text-violet-600 " onClick={closeNavbar}>
              ABOUT
            </a>
            <a href="#services" className="text-white font-medium text-2xl leading-10 block transition duration-300 focus:outline-none  focus:underline hover:underline hover:text-violet-600 " onClick={closeNavbar}>
              SERVICES
            </a> 
            <a href="#games" className="text-white font-medium text-2xl leading-10 block transition duration-300 focus:outline-none  focus:underline hover:underline hover:text-violet-600 " onClick={closeNavbar}>
              PORTFOLIO
            </a>
            <a href="#team" className="text-white font-medium text-2xl leading-10 block transition duration-300 focus:outline-none  focus:underline hover:underline hover:text-violet-600 " onClick={closeNavbar}>
              TEAM
            </a>
            <a href="#contact_us" className="text-white font-medium text-2xl leading-10 block transition duration-300 focus:outline-none  focus:underline hover:underline hover:text-violet-600 " onClick={closeNavbar}>
              CONTACT US
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar;
