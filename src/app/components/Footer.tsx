import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className="text-gray-700 body-font">
        <div className="container pt-14 mx-auto">
          <div className="flex flex-wrap md:text-left text-center -mb-10 ">
            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
              <a href="#" className=" mb-10">
                <Image
                  src="/aig_logo_small_black.png"
                  alt="logo"
                  width={50}
                  height={50}
                />
              </a>
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm pt-5 mb-7">
                Stay Connected:
              </h2>
              <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
                <nav className="list-none mb-10">
                  <div className="flex items-center">
                    <li className="">
                      <a
                        className=" text-gray-800"
                        href="https://www.facebook.com/profile.php?id=61556627987795"
                        target="_blank"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-facebook"
                          viewBox="0 0 16 16"
                        >
                          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                        </svg>
                      </a>
                    </li>
                    <li className="ml-3">
                      <a
                        className=" text-gray-800"
                        href="https://twitter.com/astraiastudio"
                        target="_blank"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-twitter-x"
                          viewBox="0 0 16 16"
                        >
                          <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                        </svg>
                      </a>
                    </li>
                    <li className="ml-3">
                      <a
                        className=" text-gray-800"
                        href="https://www.instagram.com/astrainteractive/?hl=en"
                        target="_blank"
                      >
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <rect
                            width="20"
                            height="20"
                            x="2"
                            y="2"
                            rx="5"
                            ry="5"
                          ></rect>
                          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                        </svg>
                      </a>
                    </li>
                    <li className="ml-3">
                      <a
                        className=" text-gray-800"
                        href="https://www.youtube.com/@astraiastudio"
                        target="_blank"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-youtube"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
                        </svg>
                      </a>
                    </li>
                    <li className="ml-3">
                      <a
                        className=" text-gray-800"
                        href="mailto:astrainteractivestudio@gmail.com"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-envelope-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                        </svg>
                      </a>
                      <a href="mailto:astrainteractivestudio@gmail.com"></a>
                    </li>
                  </div>
                  <li className="inline-block pt-5 -mr-32">
                    <p className="lg:w-full text-xs">
                      {" "}
                      Copyright © 2024 Astra Interactive Studios. All rights
                      reserved.{" "}
                    </p>
                  </li>
                </nav>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
