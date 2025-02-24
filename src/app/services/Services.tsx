import React from 'react';
import Image from 'next/image';

const Services = () => {
  return (
    <section id="services" className="bg-gradient-to-b from-black via-black to-purple-900 min-h-screen py-20">
      {/* Desktop view */}
        <div className="hidden sm:flex flex-col items-center justify-center">
          <h1 className="text-5xl font-bold text-white mb-16 mt-20">SERVICES</h1>
          <div className="grid grid-cols-4 gap-8 max-w-6xl mx-auto items-start">

          <div className="bg-transparent border border-purple-500 rounded-xl p-8 text-center shadow-lg hover:shadow-purple-500/50 flex flex-col items-center">
            <Image src="/game development icon.png" alt="Game Development" width={120} height={120} />
            <h2 className="text-xl font-bold text-purple-400 mt-4">Game Development</h2>
            <p className="text-gray-300 mt-2">We handle every stage of game creation, from initial concept and design to development and final launch, ensuring a polished and engaging product.</p>
          </div>
          
          <div className="bg-transparent border border-purple-500 rounded-xl p-8 text-center shadow-lg hover:shadow-purple-500/50 flex flex-col items-center mt-16">
            <Image src="/web3 icon.png" alt="Web3 Integration" width={120} height={120} />
            <h2 className="text-xl font-bold text-purple-400 mt-4">Web3 Integration</h2>
            <p className="text-gray-300 mt-2">Integrating blockchain and Web3 for secure, transparent interactions and true digital ownership.</p>
          </div>
          
          <div className="bg-transparent border border-purple-500 rounded-xl p-8 text-center shadow-lg hover:shadow-purple-500/50 flex flex-col items-center mt-32">
            <Image src="/custom solutions icon.png" alt="Custom Solutions" width={120} height={120} />
            <h2 className="text-xl font-bold text-purple-400 mt-4">Custom Solutions</h2>
            <p className="text-gray-300 mt-2">Tailored solutions to meet your unique needs and create standout features.</p>
          </div>
          
          <div className="bg-transparent border border-purple-500 rounded-xl p-8 text-center shadow-lg hover:shadow-purple-500/50 flex flex-col items-center mt-48">
            <Image src="/consultation icon.png" alt="Consultation" width={120} height={120} />
            <h2 className="text-xl font-bold text-purple-400 mt-4">Consultation</h2>
            <p className="text-gray-300 mt-2">Expert guidance to align your game with industry trends and maximize impact.</p>
          </div>
        </div>
      </div>

      {/* Mobile view */}
      <div className="block lg:hidden"> 
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold text-white mb-16">SERVICES</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 md:px-16">
          {[
            { img: "/game development icon.png", title: "Game Development", desc: "We handle every stage of game creation, from initial concept and design to development and final launch, ensuring a polished and engaging product." },
            { img: "/web3 icon.png", title: "Web3 Integration", desc: "Integrating blockchain and Web3 for secure, transparent interactions and true digital ownership." },
            { img: "/custom solutions icon.png", title: "Custom Solutions", desc: "Tailored solutions to meet your unique needs and create standout features." },
            { img: "/consultation icon.png", title: "Consultation", desc: "Expert guidance to align your game with industry trends and maximize impact." }
          ].map((service, index) => (
            <div key={index} className="bg-transparent border border-purple-500 rounded-xl p-8 text-center shadow-lg hover:shadow-purple-500/50 h-full flex flex-col items-center">
              <Image src={service.img} alt={service.title} width={120} height={120} />
              <h2 className="text-xl font-bold text-purple-400 mt-4">{service.title}</h2>
              <p className="text-gray-300 mt-2">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
      </div>
      
    </section>
  );
};

export default Services;
