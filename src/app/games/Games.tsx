"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useSwipeable } from "react-swipeable";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Games = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      image: "/mole.png",
      text: "Mole Smash is an engaging clicker game where players tap their way to earning in-game currency, climbing leaderboards, and competing with friends.",
      title: "MOLE SMASH",
      subtitle: "PLAY NOW",  
      link: "https://t.me/MoleSmashBot/",
    },
    {
      image: "/msw.png",
      text: "A free-to-own NFT roguelike where you lead a party to stop encroaching corruption.",
      title: "METASAGA WARRIORS",
      subtitle: "ANDROID, IOS, PC", 
      link: "https://metasagawarriors.com/",
    },
    {
      image: "/helltoons.png",
      text: "Build your toon army with this card collecting game with short but tense matches!",
      title: "HELLTOONS",
      subtitle: "PLAY NOW", 
      link: "https://astrainteractive.studio/helltoons",
    },
  ];

  const handlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
  });

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <section id="games" className="min-h-screen flex flex-col items-center justify-center bg-black">
      <div className="text-center w-full mb-6">
        <h1 className="text-4xl sm:text-5xl font-bold text-white sm:mt-0 mt-40">GAMES PORTFOLIO</h1>
      </div>

      {/* Slider */}
      <div className="relative w-full max-w-6xl flex flex-col md:flex-row items-center justify-center">
        {/* Left Button */}
        <button
          onClick={prevSlide}
          className="absolute left-2 md:left-4 z-10 bg-purple-800 p-2 rounded-full text-white hover:bg-gray-700"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Swipeable Area */}
        <div {...handlers} className="hidden sm:flex overflow-hidden w-full">
          <div
            className="flex md:flex-row flex-col transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="flex-none w-full md:w-full flex flex-col md:flex-row items-center">
                <div className="md:w-2/3 p-0 flex justify-center">
                  {slide.link ? (
                    <a href={slide.link} target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition">
                      <Image src={slide.image} alt="Game" width={460} height={240} className="mx-auto" />
                    </a>
                  ) : (
                    <Image src={slide.image} alt="Game" width={460} height={240} className="mx-auto" />
                  )}
                </div>
                <div className="md:w-1/2 p-4 text-center md:text-left">
                  <h1 className="text-purple-400 text-2xl mb-2">{slide.title}</h1>
                  <h2 className="text-blue-300 text-sm mb-4 italic">{slide.subtitle}</h2>
                  <p className="text-white text-sm pr-24">{slide.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

           {/* Swipeable Area */}
           <div {...handlers} className="block lg:hidden w-full flex justify-center">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="flex-none w-full flex flex-col items-center p-4 text-center">
                <div className="w-full flex justify-center">
                  {slide.link ? (
                    <a href={slide.link} target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition">
                      <Image src={slide.image} alt="Game" width={320} height={180} className="mx-auto" />
                    </a>
                  ) : (
                    <Image src={slide.image} alt="Game" width={320} height={180} className="mx-auto" />
                  )}
                </div>
                <div className="mt-4">
                  <h1 className="text-purple-400 text-2xl mb-2">{slide.title}</h1>
                  <h2 className="text-blue-300 text-sm mb-4 italic">{slide.subtitle}</h2>
                  <p className="text-white text-sm">{slide.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Button */}
        <button
          onClick={nextSlide}
          className="absolute right-2 md:right-4 z-10 bg-purple-800 p-2 rounded-full text-white hover:bg-gray-700"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="flex mt-4 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full ${currentIndex === index ? "bg-white" : "bg-gray-500"}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Games;
