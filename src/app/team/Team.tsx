import React from "react";
import Image from "next/image";

const Team = () => {
  return (
    <section
      id="team"
      className="flex flex-col items-center justify-center bg-white w-full"
    >
      <div className="flex flex-col sm:pt-20 pt-28 sm:pb-2 pb-0 text-center">
        <h1 className="sm:text-4xl text-3xl sm:mb-7 mb-4 font-large text-violet-800 text-shadow font-bold">
          TEAM
          </h1>
        </div>
        {/* Desktop view */}
        <div className="hidden sm:block">
        <div className="flex justify-center items-center md:px-28 lg:px-32 ">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 items-center sm:w-4/5 w-80 ">
            <Image src="/team/ANDY.png" width={250} height={0} sizes="100vw" alt="andy" className="" unoptimized />
            <Image src="/team/MIKE.png" width={250} height={0} sizes="100vw" alt="salvador" className="" unoptimized />
            <Image src="/team/MORRIS.png" width={250} height={0} sizes="100vw" alt="rico" className="" unoptimized />
          </div>
        </div>
        <div className="flex justify-center items-center mt-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-4 items-center sm:w-4/5 w-80">
            <Image src="/team/RICO.png" width={250} height={0} sizes="100vw" alt="rico" className="" unoptimized />
            <Image src="/team/TOFF.png" width={250} height={0} sizes="100vw" alt="andy" className="" unoptimized />
            <Image src="/team/KEVIN.png" width={250} height={0} sizes="100vw" alt="rico" className="" unoptimized />
            <Image src="/team/SALVADOR.png" width={250} height={0} sizes="100vw" alt="salvador" className="" unoptimized />
          </div>
        </div>
        {/* Image Grid Section 2 */}
        <div className="flex justify-center items-center mt-4 ">
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-4 items-center sm:w-4/5 w-80">
            <Image src="/team/HARVIN.png" width={250} height={0} sizes="100vw" alt="harvin" className="" unoptimized />
            <Image src="/team/ALDRICK.png" width={250} height={0} sizes="100vw" alt="aldrick" className="" unoptimized />
            <Image src="/team/EMMANUEL.png" width={250} height={0} sizes="100vw" alt="emmanuel" className="" unoptimized />
            <Image src="/team/ALFONSE.png" width={250} height={0} sizes="100vw" alt="alfonse" className="" unoptimized />
          </div>
        </div>
        </div>
        {/* Image Grid Section 3 */}
        <div className="flex justify-center items-center mt-4 md:px-48 px-32">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 items-center sm:w-4/5 w-80">
            <Image src="/team/SHANIE.png" width={250} height={0} sizes="100vw" alt="alfonse" className="hidden sm:block" unoptimized />
            <Image src="/team/GEE.png" width={250} height={0} sizes="100vw" alt="gee" className="hidden sm:block" unoptimized />
          </div>
        </div>

        
        {/*mobile view */}
        <div className="block sm:hidden">
        <div className="flex justify-center items-center md:px-28 lg:px-32 ">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 items-center sm:w-4/5 w-80 ">
            <Image src="/team/ANDY.png" width={250} height={0} sizes="100vw" alt="andy" className="" unoptimized />
            <Image src="/team/MIKE.png" width={250} height={0} sizes="100vw" alt="salvador" className="" unoptimized />
            <Image src="/team/MORRIS.png" width={250} height={0} sizes="100vw" alt="rico" className="" unoptimized />
            <Image src="/team/RICO.png" width={250} height={0} sizes="100vw" alt="rico" className="" unoptimized />
          </div>
        </div>
        <div className="flex justify-center items-center mt-4">
          <div className="grid grid-cols-2 sm:grid-cols-4  gap-4 items-center sm:w-4/5 w-80">
            <Image src="/team/TOFF.png" width={250} height={0} sizes="100vw" alt="andy" className="" unoptimized />
            <Image src="/team/KEVIN.png" width={250} height={0} sizes="100vw" alt="rico" className="" unoptimized />
            <Image src="/team/SALVADOR.png" width={250} height={0} sizes="100vw" alt="salvador" className="" unoptimized />
            <Image src="/team/HARVIN.png" width={250} height={0} sizes="100vw" alt="harvin" className="" unoptimized />
          </div>
        </div>
        {/* Image Grid Section 2 */}
        <div className="flex justify-center items-center mt-4 ">
          <div className="grid grid-cols-2 sm:grid-cols-4  gap-4 items-center sm:w-4/5 w-80">
            <Image src="/team/ALDRICK.png" width={250} height={0} sizes="100vw" alt="aldrick" className="" unoptimized />
            <Image src="/team/EMMANUEL.png" width={250} height={0} sizes="100vw" alt="emmanuel" className="" unoptimized />
            <Image src="/team/ALFONSE.png" width={250} height={0} sizes="100vw" alt="alfonse" className="" unoptimized />
            <Image src="/team/SHANIE.png" width={250} height={0} sizes="100vw" alt="alfonse" className="" unoptimized />
          </div>
        </div>
       
        {/* Image Grid Section 3 */}
        <div className="flex justify-center items-center mt-4 md:px-48 px-32">
          <div className="grid grid-cols-2 sm:grid-cols-2  gap-4 items-center sm:w-4/5 w-80">
            <Image src="/team/GEE.png" width={250} height={0} sizes="100vw" alt="gee" className="" unoptimized />
          </div>
        </div>
        </div>
       
    </section>
  );
};

export default Team;
