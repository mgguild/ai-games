import React from "react";

const Helltoons = () => {
  return (
    <section
      id="landingpage"
      className="relative min-h-screen flex flex-col items-center justify-center w-full overflow-hidden"
    >
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover z-[-10]"
      >
        <source src="/helltoons/Helltoons Landing Page_2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover z-[-10] md:hidden"
      >
        <source src="/mobile bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      
    </section>
  );
};

export default Helltoons;