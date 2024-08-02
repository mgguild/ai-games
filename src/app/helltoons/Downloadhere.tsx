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
                <Image
                  src="/helltoons/google play.png"
                  alt="logo"
                  width={320}
                  height={200}
                  className="shadow-lg"
                />
                <p className="w-full leading-loose text-based font-medium text-black">
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
                <p className="w-full leading-loose text-based font-medium text-black">
                Coming Soon
                </p>
              </div>
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