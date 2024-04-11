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
    <nav className="bg-black fixed w-full z-10 top-0 ">
      <div className="max-w-xl mx-auto px-4 sm:px-4 lg:px-24" style={{height: "7.7vh"}}>
        <div className="hidden md:block">
          <div className="ml-4 flex justify-center items-center space-x-4">
            <a href="#services" className="text-white transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-white" onClick={closeNavbar}>
              Services
            </a>
            <a href="#games" className="text-white transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-white" onClick={closeNavbar}>
              Games
            </a>
            <a href="" className="" onClick={closeNavbar}> 
              <Image src="/aig_logo_small.png" alt="logo" width={50} height={40} objectPosition='relative' />
            </a>
            <a href="#about_us" className="text-white transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-white" onClick={closeNavbar}>
              About 
            </a>
            <a href="#contact_us" className="text-white transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-white" onClick={closeNavbar}>
              Contact
            </a>
          </div>
        </div>
        <div className="md:hidden flaot-right">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="/" className="text-white" onClick={closeNavbar}>
                <Image src="/aig_logo_small.png" alt="logo" width={50} height={40} objectPosition='relative' />
              </a>
            </div>
            <button className="inline-flex p-4 rounded-md text-white md:text-white hover:text-white focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white ml-auto" onClick={toggleNavbar}>
              {isClick ? (
                <svg className="h-8 w-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                </svg>
              ) : (
                <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7"/>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isClick && (
        <div className="md:hidden float-right">
          <div className="pl-5 pr-12 pt-5 pb-9 space-y-2 gap-4 sm:px-3">
            <a href="#" className="text-white text-2xl leading-10 block transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-white" onClick={closeNavbar}>
              Home
            </a> 
            <a href="#services" className="text-white text-2xl leading-10 block transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-white" onClick={closeNavbar}>
              Services
            </a>
            <a href="#games" className="text-white text-2xl leading-10 block transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-white" onClick={closeNavbar}>
              Games
            </a>
            <a href="#about_us" className="text-white text-2xl leading-10 block transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-white" onClick={closeNavbar}>
              About 
            </a>
            <a href="#contact_us" className="text-white text-2xl leading-10 block transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-white" onClick={closeNavbar}>
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar;
