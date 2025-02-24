"use client"
import React from "react";
import Image from "next/image";

const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center bg-cover bg-center w-full"
    >
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover z-[-10]"
      >
        <source src="/homevid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover z-[-10] md:hidden"
      >
        <source src="/home_mobile.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>


      {/* Dark Overlay */}
      {/* <div className="absolute inset-0 bg-black opacity-70 z-[-5]" /> */}

      
      {/*  BIG LOGO     
      <div className="flex flex-col justify-center items-center min-h-screen pt-32 px-16 py-24 z-10">
        <Image
          src="/astra logo new.png"
          alt="logo"
          width={660}
          height={560}
          objectPosition="relative"
          className="relative drop-shadow-custom-black" // Add more prominent shadow to the image
        /> */}
        {/* <h1 className="text-5xl text-white text-center font-bold title-font mt-5 drop-shadow-2xl">
          ASTRA INTERACTIVE STUDIOS, INC.
        </h1> */}

      {/* </div> */}

    </section>
  );
};

export default Home;
