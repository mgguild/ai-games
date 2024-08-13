"use client";
import React from 'react';
import Image from 'next/image';
import { Carousel, IconButton } from '@material-tailwind/react';

const PreviewCardsmobile = () => {
  return (
    <section
    id="previewcardmobile"
    className="sm-custom:hidden min-h-screen flex flex-col items-center justify-center bg-cover bg-center w-full"
    style={{ backgroundImage: "url('/helltoons/BG Swirl.png')" }}
  >
        

      <div className="px-0 py-0 items-center md:px-0">
        <div className="flex flex-col text-center w-full mb-15 lg:pb-0 md:pb-32">
          <h1 className="text-3xl sm:text-4xl mb-6 font-bold text-white">GAMES PORTFOLIO</h1>
        </div>
        <Carousel
          className="rounded-xl"
          prevArrow={({ handlePrev }) => (
            <IconButton
              variant="text"
              color="white"
              size="lg"
              onClick={handlePrev}
              className="!absolute top-2/4 left-16 -translate-y-2/4 bg-white rounded-full p-2 shadow-md"
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
              className="!absolute top-2/4 right-16 -translate-y-2/4 bg-white rounded-full p-2 shadow-md"
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
        
        <div className="relative py-11 flex flex-col items-center justify-center mx-auto gap-4 w-full max-w-md">
            <div className="relative z-15 flex justify-center mb-4">
              <Image
                src="/helltoons/Advance Strategy.png"
                alt="icon"
                layout="responsive"
                width={460}
                height={240}
                className="w-full max-w-xs"
              />
            </div>
            <div className="flex flex-col items-center text-center px-0">
              <h1 className="text-lg sm:text-xl mb-4 font-bold text-white">
                Advance Strategy
              </h1>
              <p className="text-sm sm:text-base font-medium text-white mx-14">
                A former general became a butler but he retained his battle prowess usually fighting against the rivals of his master.
                Burning Vestal
              </p>
            </div>
          </div>

          <div className="relative p-4 flex flex-col items-center justify-center mx-auto gap-4 w-full max-w-md">
            <div className="relative z-15 flex justify-center mb-4">
              <Image src="/helltoons/PS Attack.png" alt="icon" layout="responsive" width={460} height={240} />
            </div>
            <div className="flex flex-col items-center text-center px-0">
              <h1 className="text-lg sm:text-xl mb-4 font-bold text-white">Burning Vestal</h1>
              <p className="text-sm sm:text-base font-medium text-white">
                She must keep the fire alive or else the world will freeze. Well, according to her, we can't really confirm that.
              </p>
            </div>
          </div>

          <div className="relative p-4 flex flex-col items-center justify-center mx-auto gap-4 w-full max-w-md">
            <div className="relative z-15 flex justify-center mb-4">
              <Image src="/helltoons/Defense Formation.png" alt="icon" layout="responsive" width={460} height={240} />
            </div>
            <div className="flex flex-col items-center text-center px-0">
              <h1 className="text-lg sm:text-xl mb-4 font-bold text-white">Defense Formation</h1>
              <p className="text-sm sm:text-base font-medium text-white">
                The leader of the charge! always head on.
              </p>
            </div>
          </div>

          <div className="relative p-4 flex flex-col items-center justify-center mx-auto gap-4 w-full max-w-md">
            <div className="relative z-15 flex justify-center mb-4">
              <Image src="/helltoons/Burning Vestal.png" alt="icon" layout="responsive" width={460} height={240} />
            </div>
            <div className="flex flex-col items-center text-center px-0">
              <h1 className="text-lg sm:text-xl mb-4 font-bold text-white">PS Attack</h1>
              <p className="text-sm sm:text-base font-medium text-white">
                Master calligrapher, but can't write a confession letter to his crush!
              </p>
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default PreviewCardsmobile;
