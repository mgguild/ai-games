import React from "react";
import Image from "next/image";

const Aboutpage = () => {
  return (
    <section
      id="aboutpage"
      className="flex flex-col items-center justify-center py-2 mt-6 bg-white border-8 border-white"
    >
      <div className="text-center mb-8">
        <h1 className="sm:text-2xl text-lg sm:mb-7 mb-0 font-large text-purple-900 text-shadow font-bold">
          "Build your toon army with this card collecting game with short but tense matches"
        </h1>
 
        <div className="flex flex-row justify-center items-stretch mb-5">
          <div className="flex flex-col text-left w-full lg:w-full lg:pr-4 lg:pb-0 md:pb-32">
            <h1 className="sm:text-2xl text-2xl px-16 mb-6 font-bold text-black">About</h1>
            <p className="sm:pl-16 pl-3 pb-5 leading-none sm:text-xl text-sm text-gray-800 font-medium mb-5">
              The King of Hell has fallen! The denizens have scrambled to take the throne of the Overlord. Team up with your favorite sinners and wallop the opposition or get pummeled by psychos! RULE TOGETHER or DOUBLE-CROSS EACH OTHER!
            </p>
            <p className="sm:pl-16 pl-3 pb-5 leading-none sm:text-xl text-sm text-gray-800 font-medium mb-5">
              Helltoons: Card Clash is a card-collecting game with short but tense matches! Build your best team with the cards you have and discover synergies between them. Or be the fun police and predict and counter opposing teams!
              Collect 60 unique cards with synergies, and wacky effects that can make or break your team. Visit the bounty board! Winning against these foes gets one of their cards to join you.
            </p>
          </div>
          <div className="flex flex-col text-center w-full lg:w-1/2 lg:pl-4 lg:pb-0 md:pb-32">
            <div className="flex flex-col text-right">
              <h1 className="sm:text-2xl pr-16 text-2xl mb-6 font-bold text-black">Release Date</h1>
              <p className="sm:pl-16 pl-3 pr-16 pb-5 leading-none sm:text-xl text-xs text-gray-800 font-medium mb-5">
                ETA August 2024
              </p>
            </div>
            <div className="flex flex-col text-right">
              <h1 className="sm:text-2xl pr-16 text-2xl mb-6 font-bold text-black">Publisher</h1>
              <p className="sm:pl-16 pl-3 pr-16 pb-5 leading-none sm:text-xl text-xs text-gray-800 font-medium mb-5">
                Astra Interactive Studios
              </p>
            </div>
            <div className="flex flex-col text-right">
              <h1 className="sm:text-2xl pr-16 text-2xl mb-6 font-bold text-black">Rating</h1>
              <p className="sm:pl-16 pl-3 pr-16 pb-5 leading-none sm:text-xl text-xs text-gray-800 font-medium mb-5">
                Teen
              </p>
            </div>
          </div>
        </div>
      </div>


      <div className="flex flex-row justify-center mt-4">
        <div className="relative p-1 m-1 flex flex-col items-center justify-center" style={{ height: '460px', width: '100%', maxWidth: '540px' }}>
          <div className="relative z-15 flex justify-center mb-4">
            <Image src="/helltoons/scoop.png" alt="icon" width={460} height={240} className="rounded-3xl" />
          </div>
          <div className="container flex items-center justify-center text-center">
            <p className="sm:mb-0 mb-0 mx-6 leading-none lg:text-lg md:text-xs text-lg font-medium text-gray-600">
              All original hand drawn graphics
            </p>
          </div>
        </div>
        <div className="relative p-1 m-1 flex flex-col items-center justify-center" style={{ height: '460px', width: '100%', maxWidth: '540px' }}>
          <div className="relative z-15 flex justify-center mb-4">
            <Image src="/helltoons/rumble.png" alt="icon" width={460} height={240} className="rounded-3xl" />
          </div>
          <div className="container flex items-center justify-center text-center">
            <p className="sm:mb-0 mb-0 mx-6 leading-none lg:text-lg md:text-xs text-lg font-medium text-gray-600">
              Daily Bounty Board
            </p>
          </div>
        </div>
        <div className="relative p-1 m-1 flex flex-col items-center justify-center" style={{ height: '460px', width: '100%', maxWidth: '540px' }}>
          <div className="relative z-15 flex justify-center mb-4">
            <Image src="/helltoons/cookup.png" alt="icon" width={460} height={240} className="rounded-3xl" />
          </div>
          <div className="container flex items-center justify-center text-center">
            <p className="sm:mb-0 mb-0 mx-6 leading-none lg:text-lg md:text-xs text-lg font-medium text-gray-600">
              Auto battle with crazy combos!
            </p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Aboutpage;
