"use client";
import React from 'react';
import Image from 'next/image';
import { Carousel, IconButton } from '@material-tailwind/react';

const PreviewCards = () => {
  return (
    <section
      id="previewcard"
      className="min-h-screen lg:flex flex-col items-center justify-center bg-cover bg-center w-full hidden md:flex"
      style={{ backgroundImage: "url('/helltoons/BG Swirl.png')" }}
    >
      <div className="px-8 py-24 items-center md:px-0">
        <div className="flex flex-col text-center w-full mb-15 lg:pb-0 md:pb-32">
          <h1 className="sm:text-4xl text-3xl mb-6 font-bold text-white">
            GAMES PORTFOLIO
          </h1>
        </div>
        <Carousel
          className="rounded-xl"
          prevArrow={({ handlePrev }) => (
            <IconButton
              variant="text"
              color="white"
              size="lg"
              onClick={handlePrev}
              className="!absolute top-2/4 sm:left-16 left-48 -translate-y-2/4 bg-white rounded-full p-2 shadow-md"
              onPointerEnterCapture={() => { }}
              onPointerLeaveCapture={() => { }}
              placeholder="" // Add placeholder prop
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6 text-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
            </IconButton>
          )}
          nextArrow={({ handleNext }) => (
            <IconButton
              variant="text"
              color="white"
              size="lg"
              onClick={handleNext}
              className="!absolute top-2/4 sm:right-16 right-48 -translate-y-2/4 bg-white rounded-full p-2 shadow-md"
              onPointerEnterCapture={() => { }}
              onPointerLeaveCapture={() => { }}
              placeholder="" // Add placeholder prop
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6 text-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </IconButton>
          )}
          placeholder="" // Add placeholder prop
          onPointerEnterCapture={() => { }}
          onPointerLeaveCapture={() => { }}
        >
          <div className="relative p-0 flex flex-row items-center justify-center mx-auto gap-4" style={{ height: '460px', width: '100%', maxWidth: '740px' }}>
            <div className="relative z-15 flex justify-center mb-4">
              <Image src="/helltoons/Advance Strategy.png" alt="icon" width={460} height={240} />
            </div>
            <div className="container flex items-center justify-end text-center">
              <div className="flex flex-col items-start">
                <h1 className="sm:text-2xl text-2xl px-6 mb-6 text-left font-bold text-white">Advance Strategy</h1>
                <p className="sm:mb-0 mb-0 mx-6 leading-none lg:text-sm md:text-xs text-base font-medium text-white text-left">
                  A former general became a butler but he retained his battle prowess usually fighting against the rivals of his master.
                  Burning Vestal
                </p>
              </div>
            </div>
          </div>

          <div className="relative p-0 flex flex-row items-center justify-center mx-auto gap-4" style={{ height: '460px', width: '100%', maxWidth: '740px' }}>
            <div className="relative z-15 flex justify-center mb-4">
              <Image src="/helltoons/PS Attack.png" alt="icon" width={460} height={240} />
            </div>
            <div className="container flex items-center justify-end text-center">
              <div className="flex flex-col items-start">
                <h1 className="sm:text-2xl text-2xl px-6 mb-6 text-left font-bold text-white">Burning Vestal</h1>
                <p className="sm:mb-0 mb-0 mx-6 leading-none lg:text-sm md:text-xs text-base font-medium text-white text-left">
                  She must keep the fire alive or else the world will freeze. Well, according to her, we can't really confirm that.
                </p>
              </div>
            </div>
          </div>

          <div className="relative p-0 flex flex-row items-center justify-center mx-auto gap-4" style={{ height: '460px', width: '100%', maxWidth: '740px' }}>
            <div className="relative z-15 flex justify-center mb-4">
              <Image src="/helltoons/Defense Formation.png" alt="icon" width={460} height={240} />
            </div>
            <div className="container flex items-center justify-end text-center">
              <div className="flex flex-col items-start">
                <h1 className="sm:text-2xl text-2xl px-6 mb-6 text-left font-bold text-white">Defense Formation</h1>
                <p className="sm:mb-0 mb-0 mx-6 leading-none lg:text-sm md:text-xs text-base font-medium text-white text-left">
                  The leader of the charge! always head on. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </p>
              </div>
            </div>
          </div>

          <div className="relative p-0 flex flex-row items-center justify-center mx-auto gap-4" style={{ height: '460px', width: '100%', maxWidth: '740px' }}>
            <div className="relative z-15 flex justify-center mb-4">
              <Image src="/helltoons/Burning Vestal.png" alt="icon" width={460} height={240} />
            </div>
            <div className="container flex items-center justify-end text-center">
              <div className="flex flex-col items-start">
                <h1 className="sm:text-2xl text-2xl px-6 mb-6 text-left font-bold text-white">PS Attack</h1>
                <p className="sm:mb-0 mb-0 mx-6 leading-none lg:text-sm md:text-xs text-base font-medium text-white text-left">
                  Master calligrapher, but can't write a confession letter to his crush!
                </p>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default PreviewCards;
