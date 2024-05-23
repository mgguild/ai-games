import React from "react";
import Image from "next/image";

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className=" flex flex-col  items-center justify-center bg-white w-full ">
        <div className="flex flex-col sm:pt-20 pt-28 sm:pb-2 pb-0 text-center">
          <h1 className="sm:text-4xl text-3xl sm:mb-7 mb-4 font-large text-violet-800 text-shadow font-bold">
          TEAM
          </h1>
        </div>
        <div className="flex justify-center items-center">
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-4 items-center sm:w-3/4 w-80">
        {/* Other Images */}
        <Image src="/team/ANDY.png" width={0} height={0} sizes="150vw" alt="andy" className="w-full h-auto order-1" />
        <Image src="/team/MIKE.png" width={0} height={0} sizes="150vw" alt="mike" className="w-full h-auto order-2" />
        <Image src="/team/RICO.png" width={0} height={0} sizes="150vw" alt="rico" className="w-full h-auto order-3" />

        {/* Ensure these images are in the same row on larger screens */}
        <Image src="/team/HARVIN.png" width={0} height={0} sizes="150vw" alt="harvin" className="w-full h-auto order-4 lg:order-5" />
        <Image src="/team/SALVADOR.png" width={0} height={0} sizes="150vw" alt="salvador" className="w-full h-auto order-5 lg:order-6" />
        <Image src="/team/ALDRICK.png" width={0} height={0} sizes="150vw" alt="aldrick" className="w-full h-auto order-6 lg:order-7" />
        <Image src="/team/BALBZ.png" width={0} height={0} sizes="100vw" alt="balbz" className="w-full h-auto order-7 lg:order-4" />

        {/* Other Images */}
        <Image src="/team/EMMANUEL.png" width={0} height={0} sizes="100vw" alt="emmanuel" className="w-full h-auto order-8" />
        <Image src="/team/ALFONSE.png" width={0} height={0} sizes="100vw" alt="alfonse" className="w-full h-auto order-9" />
        <Image src="/team/GEE.png" width={0} height={0} sizes="100vw" alt="gee" className="w-full h-auto order-10" />
      </div>
    </div>
    </section>
  );
};

export default Portfolio;
