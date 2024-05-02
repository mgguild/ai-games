"use client"
import React from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-800 w-full"
    >
      <div className="flex pt-32 pl-16 pr-16 py-24 items-center text-center flex-col md:flex-row">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="text-md text-white tracking-widest font-medium title-font mb-1">
            Welcome to
          </h1>
            {/* mobile view */}
            <h1 className="sm:hidden title-font sm:text-6xl text-6xl mb-6 font-large text-white text-shadow text-bold">
              Astra Interactive Studios
            </h1>

            {/* Desktop view */}
            <div className="text-container hidden md:block">
            <TypeAnimation
              sequence={[
               
                'Astra Interactive Studios',
                1000, 
               
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '4em', display: 'inline-block', color: 'white', textShadow: '2px 2px 4px #000', fontWeight: '' }}
              repeat={1}
            />
            </div>

            
            
          <p className="mb-8 leading-relaxed sm:text-2xl text-white ">
            Where imagination meets innovation! Our studio pioneers in crafting
            captivating web3 and casual games that redefine entertainment.
            Explore our world of immersive gaming experiences and unlock the
            extraordinary.
          </p>
          {/* <div className="flex justify-center">
          <button className="ml-4 inline-flex text-white py-2 px-6 border-2 border-gray-300 focus:outline-none hover:bg-gray-300 rounded text-lg">Lorem Ipsum</button>
        </div> */}
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-full w-5/6">
          <Image
            src="/ais_logo_wht.png"
            alt="logo"
            width={500}
            height={400}
            objectPosition="relative"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
