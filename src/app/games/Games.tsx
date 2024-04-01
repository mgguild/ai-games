import React from "react";
import Image from "next/image";

const Games = () => {
  return (


        <div className="container mx-auto flex px-16 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Innovative Concepts:
            </h1>
            <p className="mb-8 leading-relaxed">
              Engage with our unique concepts that push boundaries and redefine
              gaming experiences.
            </p>
            <div className="flex justify-center"></div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              src="/Innovative Concepts.png"
              alt="logo"
              width={400}
              height={300}
              objectPosition="relative"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Games;
