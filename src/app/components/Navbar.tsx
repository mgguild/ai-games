"use client"
import React, { useState } from 'react';
import Image from "next/image";
import Link from 'next/link';

const Navbar = () => {
  const [isClick, setIsClick] = useState(false);

  const toggleNavbar = () => {
    setIsClick(!isClick);
  };

  const closeNavbar = () => {
    setIsClick(false);
  };

  return (
    <nav className="fixed w-full z-20 top-0 md:w-full ipadPro:w-full ipadPro:left-0 desktop:w-full bg-black/50">
      <div className="max-w-8xl mx-auto sm:px-20 px-5 flex justify-between sm:justify-between items-center py-4">
        <div className="flex items-center space-x-6">
          <a href="/" className="text-white" onClick={closeNavbar}>
            <Image src="/android-chrome-512x512.png" alt="logo" width={45} height={30} />
          </a>
          <h1 className="hidden ipadPro:block text-xl font-bold whitespace-nowrap text-white ">ASTRA INTERACTIVE STUDIOS, INC.</h1>
        </div>
        <div className="hidden ipadPro:block">
          <div className="flex space-x-4">
            <Link href="/#about_us" className="text-white text-xl font-medium  hover:text-pink-500 decoration-4 focus:text-pink-500  underline-offset-4" onClick={closeNavbar}>
                About
            </Link>
            <Link href="/#games" className="text-white text-xl font-medium  hover:text-pink-500 decoration-4 focus:text-pink-500 underline-offset-4" onClick={closeNavbar}>
              Portfolio
              </Link>
            <Link href="/#services" className="text-white text-xl font-medium  hover:text-pink-500 decoration-4 focus:text-pink-500 underline-offset-4" onClick={closeNavbar}>
              Services
              </Link>
            <Link href="/#team" className="text-white text-xl font-medium  hover:text-pink-500 decoration-4 focus:text-pink-500 underline-offset-4" onClick={closeNavbar}>
              Team
              </Link>
            <Link href="/#contact_us" className="text-white text-xl font-medium  hover:text-pink-500 decoration-4 focus:text-pink-500 underline-offset-4" onClick={closeNavbar}>
              Contact Us
            </Link>
          </div>
        </div>
        <div className="ipadPro:hidden">
          <button className="inline-flex p-4 rounded-md text-violet-500 md:text-white hover:text-pink-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" onClick={toggleNavbar}>
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
        <div className="ipadPro:hidden text-center bg-black/50">
          <div className="px-5 pt-5 pb-9 space-y-2">
            <Link href="/" className="text-white   font-medium text-2xl leading-10 block transition duration-300 focus:outline-none focus:text-pink-500 hover:text-pink-500" onClick={closeNavbar}>
              HOME
            </Link>
            <Link href="/#about_us" className="text-white  font-medium text-2xl leading-10 block transition duration-300 focus:outline-none focus:text-pink-500 hover:text-pink-500" onClick={closeNavbar}>
              ABOUT
            </Link>
            <Link href="/#games" className="text-white font-medium text-2xl leading-10 block transition duration-300 focus:outline-none focus:text-pink-500 hover:text-pink-500" onClick={closeNavbar}>
              PORTFOLIO
            </Link>
            <Link href="/#services" className="text-white font-medium text-2xl leading-10 block transition duration-300 focus:outline-none focus:text-pink-500 hover:text-pink-500" onClick={closeNavbar}>
              SERVICES
            </Link> 
            <Link href="/#team" className="text-white font-medium text-2xl leading-10 block transition duration-300 focus:outline-none focus:text-pink-500 hover:text-pink-500" onClick={closeNavbar}>
              TEAM
            </Link>
            <Link href="/#contact_us" className="text-white font-medium text-2xl leading-10 block transition duration-300 focus:outline-none focus:text-pink-500 hover:text-pink-500" onClick={closeNavbar}>
              CONTACT US
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
