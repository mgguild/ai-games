import React from "react";

const AboutUs = () => {
  return (
    <section id="about_us" className="text-gray-700 body-font  w-screen flex justify-center">
   
   <div className="flex items-center justify-center mb-28">
  <div className="container sm:px-0 px-8 py-24 mx-auto h-full">
    <div className="flex flex-wrap w-full mb-1 flex-col items-center text-center mt-8">
      <h1 className="title-font sm:text-4xl text-4xl mb-16 font-bold text-purple-800">
        ABOUT
      </h1>
      <p className="sm:px-0 px-3 lg:w-5/6 w-full leading-loose lg:text-3xl sm:text-xl text-xl text-based font-medium mb-24">
        Astra Interactive Studios is a team of passionate creators dedicated to pushing the boundaries of gaming experiences.
        Our vision is to blend innovation with entertainment, aiming to make games that stand out in the industry.
      </p>
      <p className="sm:px-0 px-3 lg:w-5/6 w-full leading-loose lg:text-3xl sm:text-xl text-xl text-based font-medium">
        Our team consists of diverse talents, including developers, designers, and strategists, all driven by the desire
        to craft exceptional games that resonate with audiences globally. We are committed to excellence and constantly
        seek to raise the bar in gaming through innovation and creativity.
      </p>
      {/* <button className="mt-16 bg-transparent font-bold text-purple-800 border-2 border-purple-800 rounded-full py-3 px-6 transition-colors duration-300 hover:bg-purple-500 hover:text-white">
        GET TO KNOW US
      </button> */}
    </div>
  </div>
</div>

    </section>
  );
};

export default AboutUs;