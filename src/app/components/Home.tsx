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
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover z-[-10] md:hidden"
      >
        <source src="/mobile bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>


      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-70 z-[-5]" />

      
      
      <div className="flex flex-col justify-center items-center min-h-screen pt-32 px-16 py-24 z-10">
        <Image
          src="/AIS Logo Gradient 768x768.png"
          alt="logo"
          width={460}
          height={360}
          objectPosition="relative"
          className="drop-shadow-2xl" // Add more prominent shadow to the image
        />
        <h1 className="text-5xl text-white text-center font-bold title-font mt-5 drop-shadow-2xl">
          ASTRA INTERACTIVE STUDIOS, INC.
        </h1>

      </div>

    </section>
  );
};

export default Home;
