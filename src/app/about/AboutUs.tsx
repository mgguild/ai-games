import React from "react";

const AboutUs = () => {
  return (
    <section id="about_us" className="text-gray-700 body-font min-h-screen w-screen flex justify-center"> {/* Updated */}
      <div className="container px-16 pt-40 pb-24 mx-auto">
        <div className="flex flex-wrap w-full mb-1 flex-col items-center text-center relative">
          <h1 className="title-font sm:text-4xl text-5xl mb-4 font-medium text-gray-900">About Us</h1>
          <div className="inline-block border-t border-black w-1/4 mb-2"></div>
          <div className="absolute top-0 -left-12 w-72 h-72 bg-gray-200 rounded-full mix-blend-multiply filter opacity-100 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-gray-300 rounded-full mix-blend-multiply filter  opacity-100 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gray-400 rounded-full mix-blend-multiply filter  opacity-100 animate-blob animation-delay-4000"></div>
          <p className="lg:w-7/12 w-full leading-relaxed text-xl font-medium mb-5 text-center">Astra Interactive Studios is a team of passionate creators dedicated to pushing the boundaries of gaming experiences. Our vision is to blend innovation with entertainment, aiming to make games that stand out in the industry.</p>
          <p className="lg:w-7/12 w-full leading-relaxed text-xl font-medium text-center">Our team consists of diverse talents, including developers, designers, and strategists, all driven by the desire to craft exceptional games that resonate with audiences globally. We are committed to excellence and constantly seek to raise the bar in gaming through innovation and creativity.</p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;