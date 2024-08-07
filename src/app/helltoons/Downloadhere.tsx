"use client"
import React from "react";
import Image from "next/image";

const Download= () => {
  return (
    <section
      id="downloadhere"
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center w-full"
      style={{ backgroundImage: "url('/helltoons/.png')" }}>
        
      <div className="flex pl-4 pr-4 mt-1 items-center text-center flex-col md:flex-row bg-white">
        <div className="mx-auto px-8 py-8">
          <h1 className="text-3xl font-bold mb-4 text-purple-900">Play Helltoons Card Clash</h1>
          <div className="grid grid-cols-2 gap-4">
            <div>
            <a
                href="https://play.google.com/store/apps/details?id=com.helltoons&hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/helltoons/google play.png"
                  alt="logo"
                  width={320}
                  height={200}
                  className="transition-transform transform-gpu hover:scale-105 shadow-lg"
                />
              </a>

              <p className="w-full leading-loose text-base font-medium text-black">
                Download Now
              </p>
            </div>
            <div>
              <Image
                src="/helltoons/app store.png"
                alt="logo"
                width={320}
                height={200}
                className="shadow-lg"
              />
              <p className="w-full leading-loose text-base font-medium text-black">
                Coming Soon
              </p>
            </div>
          </div>
          <div className="items-center pt-10">
              <p className="w-full leading-loose text-base font-medium text-black pb-4">
                Download our Press Kit Here!
              </p>
              <a href="https://drive.google.com/file/d/1YE29Gd1_wSm4DdCTfbfJ147wlo8qlbzT/view?usp=sharing" target="_blank" className="w-1/2 bg-transparent text-black py-2 px-16 border border-black rounded-md hover:bg-yellow-400 transition-transform transform-gpu hover:scale-105 shadow-lg">
                Download
              </a>
            </div>
        </div>

        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
          <Image
            src="/helltoons/clown.png"
            alt="logo"
            width={500}
            height={400}
          />
        </div>
      </div>
    </section>
  );
};

export default Download;
