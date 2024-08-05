"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { useSwipeable } from 'react-swipeable';


const Games = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      image: '/METASAGA WARRIORS.png',
      text: 'A free-to-own NFT roguelike where you lead a party to stop encroaching corruption.',
      link: 'https://msw.gg',
    },
    {
      image: '/ORBLITZ.png',
      text: 'An arena shooter where you utilize orbiting orbs to defeat waves of enemies.',
    },
    {
      image: '/HELTOONS.png',
      text: 'Build your toon army with this card collecting game with short but tense matches!',
    },
  ];

  const handlers = useSwipeable({
    onSwipedLeft: () => setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length),
    onSwipedRight: () => setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length),
  });
  
  return (
            <section id="games" className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center w-full"
            style={{ backgroundImage: "url('/blue BG.png')"}}>
            <div className="pl-8 pr-8 py-24 items-center md:px-0 ">
                <div className="flex flex-col text-center w-full mb-15 lg:pb-0 md:pb-32">
                    <h1 className="sm:text-4xl text-3xl  mb-6 font-bold text-white">GAMES PORTFOLIO</h1>
                </div>
                  <div className="hidden md:flex flex-wrap justify-center mt-4">
                    <div className="relative p-4 m-6 flex flex-col items-center justify-center" style={{ height: '460px', width: '100%', maxWidth: '340px' }}>
                      <div className="relative z-15 flex justify-center mb-4">
                        <a href="https://msw.gg" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-105">  
                          <Image src="/METASAGA WARRIORS.png" alt="icon" width={460} height={240} unoptimized />
                        </a>
                      </div>
                      <div className="container flex items-center justify-center text-center">
                        <p className="sm:mb-0 mb-0 mx-6 leading-none lg:text-sm md:text-xs text-base font-medium text-white">
                          A free-to-own NFT roguelike where you lead a party to stop encroaching corruption.
                        </p>
                      </div>
                    </div>
                    <div className="relative p-4 m-6 flex flex-col items-center justify-center" style={{ height: '460px', width: '100%', maxWidth: '340px' }}>
                      <div className="relative z-15 flex justify-center mb-4">
                        <Image src="/ORBLITZ.png" alt="icon" width={460} height={240} unoptimized />
                      </div>
                      <div className="container flex items-center justify-center text-center">
                        <p className="sm:mb-0 mb-0 mx-6 leading-none lg:text-sm md:text-xs text-base font-medium text-white">
                          An arena shooter where you utilize orbiting orbs to defeat waves of enemies.
                        </p>
                      </div>
                    </div>
                    <div className="relative p-4 m-6 flex flex-col items-center justify-center" style={{ height: '460px', width: '100%', maxWidth: '340px' }}>
                      <div className="relative z-15 flex justify-center mb-4">
                        <Image src="/HELTOONS.png" alt="icon" width={460} height={240} unoptimized />
                      </div>
                      <div className="container flex items-center justify-center text-center">
                        <p className="sm:mb-0 mb-0 mx-6 leading-none lg:text-sm md:text-xs text-base font-medium text-white">
                          Build your toon army with this card collecting game with short but tense matches!
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="block md:hidden">
                 
      <div {...handlers} className="overflow-hidden relative -right-28">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="flex-none" style={{ width: '100%' }}>
              <div className="relative p-4 m-6 flex flex-col items-center justify-center" style={{ height: '460px', width: '100%', maxWidth: '340px' }}>
                <div className="relative z-15 flex justify-center mb-4">
                  {slide.link ? (
                    <a href={slide.link} target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-105">
                      <Image src={slide.image} alt="icon" width={460} height={240} className="mx-auto" unoptimized />
                    </a>
                  ) : (
                    <Image src={slide.image} alt="icon" width={460} height={240} className="mx-auto" unoptimized />
                  )}
                </div>
                <div className="flex items-center justify-center text-center">
                  <p className="sm:mb-0 mb-5 mx-6 leading-none lg:text-sm md:text-xs text-base font-medium text-white">
                    {slide.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
  
                 
                  </div>
            </div>
          </section>
  )
}

export default Games