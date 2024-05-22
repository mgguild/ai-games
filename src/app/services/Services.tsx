import React from 'react'
import Image from "next/image"

const Services = () => {
  return (
        <section id="services" className="text-gray-700 body-font min-h-screen ">
        <div className=" pl-16 pr-16 py-24 items-center md:px-0">
            <div className="flex flex-col text-center w-full mb-15 pt-4 lg:pb-0 md:pb-32">
                <h1 className="title-font sm:text-4xl text-5xl mb-16 font-bold text-purple-800">SERVICES</h1>
            </div>
            
            <div className="hidden below-1024:hidden md:block ">
                  <div className="flex justify-center items-center pt-12">
                    <div className="flex justify-between gap-6">
                      <div className="relative bg-violet-100 rounded-3xl p-4 m-2 shadow-lg" style={{ height: '460px', width: '340px' }}>
                        <div className="relative left-20 right-20 z-15">
                          <Image src="/team/icon.png" alt="icon" width={150} height={140} />
                        </div>
                        <div className="container pb-24">
                          <h1 className="pb-0 text-center lg:text-xl md:text-lg text-xl font-bold text-violet-700 mb-4">Game Development</h1>
                          <p className="sm:mb-10 mb-0 mx-6 text-center leading-none lg:text-sm md:text-xs text-based font-medium text-gray-800">
                          We handle every stage of game creation, from initial concept and design to development and final launch, ensuring a 
                          polished and engaging product.
                          </p>
                        </div>
                      </div>
                      <div className="relative bg-violet-100 rounded-3xl p-4 m-2 shadow-lg" style={{ height: '460px', width: '340px' }}>
                        <div className="relative left-20 right-20 z-15">
                          <Image src="/team/icon.png" alt="icon" width={150} height={140} />
                        </div>
                        <h1 className="pb-0 text-center md:text-xl text-2xl font-bold text-violet-700">Web3 Integration</h1>
                        <p className="sm:mb-10 mb-0 mx-2 text-center md:text-sm leading-none text-based font-medium text-gray-800">
                        Embrace the future of gaming with our seamless integration of Blockchain and Web3 functionalities. We're revolutionizing 
                        gameplay and ownership, enabling secure, transparent interactions and true digital ownership that transform player experiences. 
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center items-center pt-12">
                    <div className="flex justify-between gap-6">
                      <div className="relative bg-violet-100 rounded-3xl p-4 m-2 shadow-lg" style={{ height: '460px', width: '340px' }}>
                        <div className="relative left-20 right-20 z-15">
                          <Image src="/team/icon.png" alt="icon" width={150} height={140} />
                        </div>
                        <div className="container pb-24">
                          <h1 className="pb-0 text-center lg:text-xl md:text-lg text-xl font-bold text-violet-700 mb-4">Custom Solutions</h1>
                          <p className="sm:mb-10 mb-0 mx-6 text-center leading-none lg:text-sm md:text-xs text-based font-medium text-gray-800">
                          We offer tailored solutions designed to meet your specific needs, fostering innovation and uniqueness in every project. 
                          Our team works closely with you to create unique features that enhance gameplay, engage users, and ensure your 
                          game stands out in the competitive market.
                          </p>
                        </div>
                      </div>
                      <div className="relative bg-violet-100 rounded-3xl p-4 m-2 shadow-lg" style={{ height: '460px', width: '340px' }}>
                        <div className="relative left-20 right-20 z-15">
                          <Image src="/team/icon.png" alt="icon" width={150} height={140} />
                        </div>
                        <h1 className="pb-0 text-center md:text-xl text-2xl font-bold text-violet-700">Consultation</h1>
                        <p className="sm:mb-10 mb-0 mx-2 text-center md:text-sm leading-none text-based font-medium text-gray-800">
                        Leverage the expertise of our seasoned professionals for comprehensive guidance tailored to your project. 
                        We ensure your game aligns perfectly with current industry trends and user preferences, helping you 
                        make informed decisions that elevate your game’s impact and success.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
        </div>
        </section>
  )
}

export default Services