"use client"
import React from "react";
import Image from "next/image";

const Home = () => {
  return (
    <section
    id="home"
    className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center w-full"
    style={{ backgroundImage: "url('/hero image 1.png')" }}
  >
     <div className="flex flex-col justify-center items-center min-h-screen pt-32 px-16 py-24 ">
        <Image
          src="/logo.png"
          alt="logo"
          width={300}
          height={200}
          objectPosition="relative"
        />
        <h1 className=" sm:text-7xl text-4xl text-white text-center font-bold title-font mt-5">
          ASTRA INTERACTIVE STUDIOS, INC
        </h1>
      </div>

    </section>
  );
};

export default Home;
