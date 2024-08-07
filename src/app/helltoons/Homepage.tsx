import React from "react";

const Helltoons = () => {
  return (
    <section
      id="landingpage"
      className="relative w-full h-screen overflow-hidden"
    >
      <div className="container w-full h-full">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-fill z-[-10]"
        >
          <source src="/helltoons/Helltoons Landing Page_2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default Helltoons;
