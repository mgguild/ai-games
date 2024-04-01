import React from "react";
import Image from "next/image";

const Games = () => {
  return (
    <section id="games" className="text-gray-700 body-font min-h-screen ">
      <div className="pl-16 pr-16 py-24 items-center ">
        <div className="flex flex-col text-center w-full mb-15">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Games
          </h1>
          <div className="border-t border-black w-1/4 mx-auto mb-4"></div>
          <h2 className="text-xs text-black tracking-widest font-medium title-font mb-1">
            Explore our diverse portfolio of games, each crafted with passion
            and precision:
          </h2>
        </div>

        <div className="container mx-auto flex px-16 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Casual Adventures:
            </h1>
            <p className="mb-8 leading-relaxed">
              Dive into enchanting worlds filled with puzzles, adventures, and
              endless fun for players of all ages.
            </p>
            <div className="flex justify-center"></div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              src="/Casual Adventures.png"
              alt="logo"
              width={400}
              height={300}
              objectPosition="relative"
            />
          </div>
        </div>

        <div className="container mx-auto flex px-16 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              src="/Web3 Immersion.png"
              alt="logo"
              width={400}
              height={300}
              objectPosition="relative"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Web3 Immersion
            </h1>
            <p className="mb-8 leading-relaxed">
              Experience the power of blockchain in gaming through our
              web3-enabled titles, offering ownership and immersive gameplay.
            </p>
            <div className="flex justify-center"></div>
          </div>
        </div>

        <div className="container mx-auto flex px-16 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Innovative Concepts:
            </h1>
            <p className="mb-8 leading-relaxed">
              Engage with our unique concepts that push boundaries and redefine
              gaming experiences.
            </p>
            <div className="flex justify-center"></div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              src="/Innovative Concepts.png"
              alt="logo"
              width={400}
              height={300}
              objectPosition="relative"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Games;
