import React from 'react'
import Image from "next/image"

const Services = () => {
  return (
        <section id="services" className="text-gray-700 body-font min-h-screen ">
        <div className=" pl-16 pr-16 py-24 items-center">
            <div className="flex flex-col text-center w-full mb-15 pt-4">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Our Services</h1>
                <div className="border-t border-black w-1/4 mx-auto mb-4"></div>
                <h2 className="text-xs text-black tracking-widest font-medium title-font mb-1">At Astra Interactive Games, we offer a spectrum of services tailored to elevate your gaming journey:</h2>
            </div>

            <div className="container mx-auto flex px-16 py-24 md:flex-row flex-col items-center">
            <div className="lg:w-full md:w-1/2 w-5/6">
            <Image src="/Game_Development.png" alt="logo" w-full h-full objectPosition='relative'/>
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Game Development
                </h1>
                <p className="mb-8 leading-relaxed">From conceptualization to launch, we breathe life into your ideas, leveraging cutting-edge technologies and creative prowess.</p>
                <div className="flex justify-center">
                <button className="ml-4 inline-flex text-black py-2 px-6 border-2 border-gray-300 focus:outline-none hover:bg-gray-300 rounded text-lg">Lorem Ipsum</button>
                </div>
            </div>
            </div>

            <div className="container mx-auto flex px-16 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Web3 Integration
                </h1>
                <p className="mb-8 leading-relaxed">Embrace the future of gaming with seamless integration of blockchain and web3 functionalities, revolutionizing gameplay and ownership.</p>
                <div className="flex justify-center">
                <button className="ml-4 inline-flex text-black py-2 px-6 border-2 border-gray-300 focus:outline-none hover:bg-gray-300 rounded text-lg">Lorem Ipsum</button>
                </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <Image src="/Web3_Integration.png" alt="logo" w-full h-full objectPosition='relative'/>
                </div>
            </div>

            <div className="container mx-auto flex px-16 py-24 md:flex-row flex-col items-center">
            <div className="lg:w-full md:w-1/2 w-5/6">
            <Image src="/Consultation.png" alt="logo" w-full h-full objectPosition='relative'/>
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Consultation
                </h1>
                <p className="mb-8 leading-relaxed">Our team of experts offers comprehensive guidance, ensuring your project aligns with industry trends and user preferences.</p>
                <div className="flex justify-center">
                <button className="ml-4 inline-flex text-black py-2 px-6 border-2 border-gray-300 focus:outline-none hover:bg-gray-300 rounded text-lg">Lorem Ipsum</button>
                </div>
            </div>
            </div>

            <div className="container mx-auto flex px-16 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Custom Solutions
                </h1>
                <p className="mb-8 leading-relaxed">Tailored solutions to meet your specific needs, fostering innovation and uniqueness in every project.</p>
                <div className="flex justify-center">
                <button className="ml-4 inline-flex text-black py-2 px-6 border-2 border-gray-300 focus:outline-none hover:bg-gray-300 rounded text-lg">Lorem Ipsum</button>
                </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <Image src="/Custom_Solutions.png" alt="logo" w-full h-full objectPosition='relative'/>
                </div>
            </div>
            </div>
        </section>
  )
}

export default Services