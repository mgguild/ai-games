import React from "react";

const AboutUs = () => {
  return (
    <section
      id="about_us"
      className="text-gray-700 min-h-screen body-font w-full flex justify-center relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/ABOUT_OFFICIAL.png')" }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>

      <div className="flex items-center justify-center mb-28 relative z-10">
        <div className="container sm:px-0 px-8 py-24 mx-auto h-full">
          <div className="flex flex-wrap w-full mb-1 flex-col items-center text-center mt-48 sm:mt-20">
            <h1 className="title-font sm:text-6xl text-6xl mb-16 font-bold text-white mt-8">
              ABOUT
            </h1>
            <p className="sm:px-16 px-3 w-4/6 leading-loose lg:text-3xl sm:text-xl text-xl text-white font-medium mb-20">
              Astra Interactive Studios is a team of passionate creators dedicated to pushing the boundaries of gaming experiences.
              Our vision is to blend innovation with entertainment, aiming to make games that stand out in the industry.
            </p>
            <p className="sm:px-16 px-3 w-4/6 leading-loose lg:text-3xl sm:text-xl text-xl text-white font-medium">
              Our team consists of diverse talents, including developers, designers, and strategists, all driven by the desire
              to craft exceptional games that resonate with audiences globally. We are committed to excellence and constantly
              seek to raise the bar in gaming through innovation and creativity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
