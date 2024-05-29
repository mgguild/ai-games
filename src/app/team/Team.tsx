import React from "react";
import Image from "next/image";

const Team = () => {
  return (
    <section
      id="team"
      className=" flex flex-col  items-center justify-center bg-white w-full ">
        <div className="flex flex-col sm:pt-20 pt-28 sm:pb-2 pb-0 text-center">
          <h1 className="sm:text-4xl text-3xl sm:mb-7 mb-4 font-large text-violet-800 text-shadow font-bold">
          TEAM
          </h1>
        </div>
        {/* Image Grid Section 1 */}
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-4 items-center sm:w-3/4 w-80">
          <Image src="/team/ANDY.png" width={0} height={0} sizes="100vw" alt="andy" className="w-full h-auto" />
          <Image src="/team/RICO.png" width={0} height={0} sizes="100vw" alt="rico" className="w-full h-auto" />
          <Image src="/team/MORRIS.png" width={0} height={0} sizes="100vw" alt="rico" className="w-full h-auto" />
          <Image src="/team/MIKE.png" width={0} height={0} sizes="100vw" alt="salvador" className="w-full h-auto" />
        </div>
      </div>
       <div className="flex justify-center items-center mt-4">
        <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-4 items-center sm:w-3/4 w-80">
          <Image src="/team/TOFF.png" width={0} height={0} sizes="100vw" alt="andy" className="w-full h-auto" />
          <Image src="/team/JUSTIN.png" width={0} height={0} sizes="100vw" alt="rico" className="w-full h-auto" />
          <Image src="/team/KEVIN.png" width={0} height={0} sizes="100vw" alt="rico" className="w-full h-auto" />
          <Image src="/team/SALVADOR.png" width={0} height={0} sizes="100vw" alt="salvador" className="w-full h-auto" />
        </div>
      </div>
      {/* Image Grid Section 2 */}
      <div className="flex justify-center items-center mt-4 ">
        <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-4 items-center sm:w-3/4 w-80">
          <Image src="/team/HARVIN.png" width={0} height={0} sizes="100vw" alt="harvin" className="w-full h-auto" />
          <Image src="/team/ALDRICK.png" width={0} height={0} sizes="100vw" alt="aldrick" className="w-full h-auto" />
          <Image src="/team/BALBZ.png" width={0} height={0} sizes="100vw" alt="balbz" className="w-full h-auto" />
          <Image src="/team/EMMANUEL.png" width={0} height={0} sizes="100vw" alt="emmanuel" className="w-full h-auto" />
        </div>
      </div>
      
      {/* Image Grid Section 3 */}
      <div className="flex justify-center items-center mt-4 ">
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-4 items-center sm:w-3/4 w-80">
          <Image src="/team/ALFONSE.png" width={0} height={0} sizes="100vw" alt="alfonse" className="w-full h-auto" />
          <Image src="/team/SHANIE.png" width={0} height={0} sizes="100vw" alt="alfonse" className="w-full h-auto" />
          <Image src="/team/GEE.png" width={0} height={0} sizes="100vw" alt="gee" className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
};

export default Team;
