import React from "react";

const Helltoons = () => {
  return (
    <section
      id="landingpage"
      className="relative w-full h-screen overflow-hidden"
    >
      <div className="container w-full h-full">
        {/* Desktop Video */}
        <video
          autoPlay
          loop
          muted
          className="hidden sm:block absolute top-0 left-0 w-full h-full object-fill z-[-10]"
        >
          <source src="/helltoons/Helltoons Landing Page_2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Mobile Video */}
          <video
            autoPlay
            loop
            muted
            className="block sm:hidden absolute top-0 left-0 w-full h-full object-cover z-[-10] max-w-[375px]:mb-[20px]" 
          >
            <source src="/helltoons/Helltoons Landing Page Mobile_1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
      </div>
    </section>
  );
};

export default Helltoons;
