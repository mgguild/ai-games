import React from "react";
import Image from "next/image";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gray-800"
    >
      <div className="flex pl-16 pr-16 py-24 items-center text-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="text-lg text-white tracking-widest font-medium title-font mb-1">
            Welcome to
          </h1>
          <h1 className="title-font sm:text-6xl text-3xl mb-4 font-large text-white text-shadow text-bold">
            Astra Interactive Studios
          </h1>
          <p className="mb-8 leading-relaxed text-white sm:text-2xl">
            Where imagination meets innovation! Our studio pioneers in crafting
            captivating web3 and casual games that redefine entertainment.
            Explore our world of immersive gaming experiences and unlock the
            extraordinary.
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-full w-5/6">
          <Image
            src="/AIS_logo.png"
            alt="logo"
            width={1000}
            height={1000}
            objectPosition="relative"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
