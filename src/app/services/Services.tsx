import React from 'react'
import Image from "next/image"

const Services = () => {
  return (
        <section id="services" className="text-gray-700 body-font min-h-screen ">
        <div className=" pl-16 pr-16 py-24 items-center md:px-0">
            <div className="flex flex-col text-center w-full mb-15 pt-4 lg:pb-0 md:pb-32">
                <h1 className="sm:text-4xl text-3xl mb-16 font-bold text-purple-800">SERVICES</h1>
            </div>
            
              {/* desktop view */}
              <div className="hidden sm:flex sm:flex-col flex-row justify-center">
                <div className="flex justify-center items-center pt-12">
                  <div className="flex justify-between gap-6">
                    <div className="relative bg-violet-100 rounded-3xl p-4 m-2 shadow-lg flex flex-col items-center" style={{ height: '460px', width: '340px' }}>
                      <div className="mb-4 mt-4">
                        <Image src="/game development icon.png" alt="icon" width={150} height={140} />
                      </div>
                      <div className="text-center">
                        <h1 className="text-xl lg:text-xl md:text-lg font-bold text-violet-700 mb-4">Game Development</h1>
                        <p className="text-sm lg:text-sm md:text-xs font-medium text-gray-800 mx-6">
                          We handle every stage of game creation, from initial concept and design to development and final launch, ensuring a polished and engaging product.
                        </p>
                      </div>
                    </div>
                    <div className="relative bg-violet-100 rounded-3xl p-4 m-2 shadow-lg flex flex-col items-center" style={{ height: '460px', width: '340px' }}>
                      <div className="mb-4 mt-4">
                        <Image src="/web3 icon.png" alt="icon" width={140} height={140} />
                      </div>
                      <div className="text-center">
                        <h1 className="text-xl lg:text-xl md:text-lg font-bold text-violet-700 mb-4">Web3 Integration</h1>
                        <p className="text-sm lg:text-sm md:text-xs font-medium text-gray-800 mx-6">
                          Embrace the future of gaming with our seamless integration of Blockchain and Web3 functionalities. We're revolutionizing 
                          gameplay and ownership, enabling secure, transparent interactions and true digital ownership that transform player experiences.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center pt-12">
                  <div className="flex justify-between gap-6">
                    <div className="relative bg-violet-100 rounded-3xl p-4 m-2 shadow-lg flex flex-col items-center" style={{ height: '460px', width: '340px' }}>
                      <div className="mb-4 mt-4">
                        <Image src="/custom solutions icon.png" alt="icon" width={150} height={140} />
                      </div>
                      <div className="text-center">
                        <h1 className="text-xl lg:text-xl md:text-lg font-bold text-violet-700 mb-4">Custom Solutions</h1>
                        <p className="text-sm lg:text-sm md:text-xs font-medium text-gray-800 mx-6">
                          We offer tailored solutions designed to meet your specific needs, fostering innovation and uniqueness in every project. 
                          Our team works closely with you to create unique features that enhance gameplay, engage users, and ensure your 
                          game stands out in the competitive market.
                        </p>
                      </div>
                    </div>
                    <div className="relative bg-violet-100 rounded-3xl p-4 m-2 shadow-lg flex flex-col items-center" style={{ height: '460px', width: '340px' }}>
                      <div className="mb-4 mt-4">
                        <Image src="/consultation icon.png" alt="icon" width={179} height={160} />
                      </div>
                      <div className="text-center">
                        <h1 className="text-xl lg:text-xl md:text-lg font-bold text-violet-700 mb-4">Consultation</h1>
                        <p className="text-sm lg:text-sm md:text-xs font-medium text-gray-800 mx-6">
                          Leverage the expertise of our seasoned professionals for comprehensive guidance tailored to your project. 
                          We ensure your game aligns perfectly with current industry trends and user preferences, helping you 
                          make informed decisions that elevate your game’s impact and success.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* mobile view */}
              <div className="flex flex-col sm:hidden justify-center flex-wrap">
                    <div className="flex justify-center items-center pt-6 w-full">
                      <div className="flex flex-col justify-between gap-6">
                        <div className="relative bg-violet-100 rounded-3xl p-4 m-2 shadow-lg flex flex-col items-center" style={{ height: '460px', width: '100%', maxWidth: '340px' }}>
                          <div className="mb-4 mt-4">
                            <Image src="/game development icon.png" alt="icon" width={150} height={140} />
                          </div>
                          <div className="text-center">
                            <h1 className="text-xl font-bold text-violet-700 mb-4">Game Development</h1>
                            <p className="text-sm font-medium text-gray-800 mx-6">
                              We handle every stage of game creation, from initial concept and design to development and final launch, ensuring a polished and engaging product.
                            </p>
                          </div>
                        </div>
                        <div className="relative bg-violet-100 rounded-3xl p-4 m-2 shadow-lg flex flex-col items-center" style={{ height: '480px', width: '100%', maxWidth: '340px' }}>
                          <div className="mb-4 mt-4">
                            <Image src="/web3 icon.png" alt="icon" width={140} height={140} />
                          </div>
                          <div className="text-center">
                            <h1 className="text-xl font-bold text-violet-700 mb-4">Web3 Integration</h1>
                            <p className="text-sm font-medium text-gray-800 mx-6">
                              Embrace the future of gaming with our seamless integration of Blockchain and Web3 functionalities. We're revolutionizing gameplay and ownership, enabling secure, transparent interactions and true digital ownership that transform player experiences.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center items-center pt-6 w-full">
                      <div className="flex flex-col justify-between gap-6">
                        <div className="relative bg-violet-100 rounded-3xl p-4 m-2 shadow-lg flex flex-col items-center" style={{ height: '540px', width: '100%', maxWidth: '340px' }}>
                          <div className="mb-4 mt-4">
                            <Image src="/custom solutions icon.png" alt="icon" width={150} height={140} />
                          </div>
                          <div className="text-center">
                            <h1 className="text-xl font-bold text-violet-700 mb-4">Custom Solutions</h1>
                            <p className="text-sm font-medium text-gray-800 mx-6">
                              We offer tailored solutions designed to meet your specific needs, fostering innovation and uniqueness in every project. Our team works closely with you to create unique features that enhance gameplay, engage users, and ensure your game stands out in the competitive market.
                            </p>
                          </div>
                        </div>
                        <div className="relative bg-violet-100 rounded-3xl p-4 m-2 shadow-lg flex flex-col items-center" style={{ height: '540px', width: '100%', maxWidth: '340px' }}>
                          <div className="mb-4 mt-4">
                            <Image src="/consultation icon.png" alt="icon" width={179} height={160} />
                          </div>
                          <div className="text-center">
                            <h1 className="text-xl font-bold text-violet-700 mb-4">Consultation</h1>
                            <p className="text-sm font-medium text-gray-800 mx-6">
                              Leverage the expertise of our seasoned professionals for comprehensive guidance tailored to your project. We ensure your game aligns perfectly with current industry trends and user preferences, helping you make informed decisions that elevate your game’s impact and success.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
              </div>



          </div>
        </section>
  )
}

export default Services