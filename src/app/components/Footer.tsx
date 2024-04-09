import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className="text-gray-700 body-font">
        <div className="container pt-14 mx-auto">
          <div className="flex flex-wrap md:text-left text-center -mb-10 ">
            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
              <a href="https://astrainteractive.studios" className=" mb-10">
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
                        href="https://www.facebook.com/astraistudios"
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
                        href="https://twitter.com/astraistudios"
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
                        href="http://astraistudios.medium.com/"
                        target="_blank"
                      >
                       <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="16" height="16" viewBox="0 0 24 24">
                      <path d="M7 8c2.757 0 5 2.243 5 5s-2.243 5-5 5-5-2.243-5-5S4.243 8 7 8M7 6c-3.866 0-7 3.134-7 7s3.134 7 7 7 7-3.134 7-7S10.866 6 7 6L7 6zM18 8.693c.409.582 1 2.081 1 4.307s-.591 3.725-1 4.307c-.409-.582-1-2.081-1-4.307S17.591 9.275 18 8.693M18 6.5c-1.657 0-3 2.91-3 6.5s1.343 6.5 3 6.5 3-2.91 3-6.5S19.657 6.5 18 6.5L18 6.5zM23 8A1 5 0 1023 18 1 5 0 1023 8z"></path>
                      </svg>
                      </a>
                    </li>

                    {/* <li className="ml-3">
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
                    </li> */}
                    <li className="ml-3">
                      <a
                        className=" text-gray-800"
                        href="https://www.youtube.com/@astraistudios"
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
                        href="https://www.reddit.com/r/astraistudios/"
                        target="_blank"
                      >
                      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="16" height="16" viewBox="0 0 48 48">
                      <path fill="#FFF" d="M12.193 19.555c-1.94-1.741-4.79-1.727-6.365.029-1.576 1.756-1.301 5.023.926 6.632L12.193 19.555zM35.807 19.555c1.939-1.741 4.789-1.727 6.365.029 1.575 1.756 1.302 5.023-.927 6.632L35.807 19.555zM38.32 6.975A3.5 3.5 0 1 0 38.32 13.975 3.5 3.5 0 1 0 38.32 6.975z"></path><path fill="#FFF" d="M24.085 15.665000000000001A18.085 12.946 0 1 0 24.085 41.557A18.085 12.946 0 1 0 24.085 15.665000000000001Z"></path><g><path fill="#D84315" d="M30.365 23.506A2.884 2.884 0 1 0 30.365 29.274 2.884 2.884 0 1 0 30.365 23.506zM17.635 23.506A2.884 2.884 0 1 0 17.635 29.274 2.884 2.884 0 1 0 17.635 23.506z"></path></g><g><path fill="#37474F" d="M24.002 34.902c-3.252 0-6.14-.745-8.002-1.902 1.024 2.044 4.196 4 8.002 4 3.802 0 6.976-1.956 7.998-4C30.143 34.157 27.254 34.902 24.002 34.902zM41.83 27.026l-1.17-1.621c.831-.6 1.373-1.556 1.488-2.623.105-.98-.157-1.903-.721-2.531-.571-.637-1.391-.99-2.307-.994-.927.013-1.894.365-2.646 1.041l-1.336-1.488c1.123-1.008 2.545-1.523 3.991-1.553 1.488.007 2.833.596 3.786 1.658.942 1.05 1.387 2.537 1.221 4.081C43.961 24.626 43.121 26.096 41.83 27.026zM6.169 27.026c-1.29-.932-2.131-2.401-2.306-4.031-.166-1.543.279-3.03 1.221-4.079.953-1.062 2.297-1.651 3.785-1.658.009 0 .018 0 .027 0 1.441 0 2.849.551 3.965 1.553l-1.336 1.488c-.753-.676-1.689-1.005-2.646-1.041-.916.004-1.735.357-2.306.994-.563.628-.826 1.55-.721 2.53.115 1.067.657 2.023 1.488 2.624L6.169 27.026zM25 16.84h-2c0-2.885 0-10.548 4.979-10.548 2.154 0 3.193 1.211 3.952 2.096.629.734.961 1.086 1.616 1.086h1.37v2h-1.37c-1.604 0-2.453-.99-3.135-1.785-.67-.781-1.198-1.398-2.434-1.398C25.975 8.292 25 11.088 25 16.84z"></path><path fill="#37474F" d="M24.085 16.95c9.421 0 17.085 5.231 17.085 11.661 0 6.431-7.664 11.662-17.085 11.662S7 35.042 7 28.611C7 22.181 14.664 16.95 24.085 16.95M24.085 14.95C13.544 14.95 5 21.066 5 28.611c0 7.546 8.545 13.662 19.085 13.662 10.54 0 19.085-6.116 19.085-13.662C43.17 21.066 34.625 14.95 24.085 14.95L24.085 14.95zM38.32 7.975c1.379 0 2.5 1.122 2.5 2.5s-1.121 2.5-2.5 2.5-2.5-1.122-2.5-2.5S36.941 7.975 38.32 7.975M38.32 5.975c-2.484 0-4.5 2.015-4.5 4.5s2.016 4.5 4.5 4.5c2.486 0 4.5-2.015 4.5-4.5S40.807 5.975 38.32 5.975L38.32 5.975z"></path></g>
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
                  <li className="inline-block pt-5 -mr-40">
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
