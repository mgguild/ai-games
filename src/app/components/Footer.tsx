import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className="text-gray-700 body-font">
        <div className="container pt-14 pb-10 mx-auto">
          <div className="flex flex-wrap items-center justify-center text-center "> 
            <div className="lg:w-2/6 md:w-1/2 w-full px-4">
              <a href="https://astrainteractive.studios" className="inline-flex w-full justify-center md:justify-start md:w-auto mb-5"> 
                <Image
                  src="/aig_logo_small_black.png"
                  alt="logo"
                  width={100}
                  height={100}
                />
              </a>
              <p className="lg:w-full text-based text-gray-800 inline-flex w-full justify-center md:justify-start md:w-auto"> 
                Copyright © 2024 Astra Interactive Studios. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
