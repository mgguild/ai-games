import React from "react";
import Image from "next/image";

const ContactUs = () => {
  return (
    <>
      <section
        id="contact_us"
        className="text-gray-700 body-font relative bg-gray-800"
      >
        <div className=" flex px-16 py-24 md:flex-row flex-col items-center">
          <div className="container">
            <Image src="/Contact_Us.png" alt="logo" width={400} height={300} />
          </div>
          <div className="container">
            <div className="lg:w-full md:w-full rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative">

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
