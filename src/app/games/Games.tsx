import React from 'react'
import Image from "next/image"

const Games = () => {
  return (
            <section id="games" className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center w-full"
            style={{ backgroundImage: "url('/blue BG.png')"}}>
            <div className="pl-8 pr-8 py-24 items-center md:px-0 ">
                <div className="flex flex-col text-center w-full mb-15 lg:pb-0 md:pb-32">
                    <h1 className="title-font sm:text-4xl text-5xl mb-6 font-bold text-white">GAMES PORTFOLIO</h1>
                </div>

                  {/* Game Collections */}
                  
                  <div className="py-0 px-0 md:px-32">
                    <div className="flex flex-nowrap justify-center mt-4">
                      
                      <div className="relative p-4 m-2 flex flex-col items-center justify-center" style={{ height: '460px', width: '340px' }}>
                        <div className="relative z-15 flex justify-center mb-4">
                        <a href="https://msw.gg" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-105">  
                          <Image src="/METASAGA WARRIORS.png" alt="icon" width={200} height={140} />
                        </a>
                        </div>
                        <div className="container flex items-center justify-center text-center">
                          <p className="sm:mb-0 mb-0 mx-6 leading-none lg:text-sm md:text-xs text-base font-medium text-white">
                            A free-to-own NFT roguelike where you lead a party to stop encroaching corruption.
                          </p>
                        </div>
                      </div>
                      <div className="relative p-4 m-2 flex flex-col items-center justify-center" style={{ height: '460px', width: '340px' }}>
                        <div className="relative z-15 flex justify-center mb-4">
                          <Image src="/ORBLITZ.png" alt="icon" width={200} height={140} />
                        </div>
                        <div className="container flex items-center justify-center text-center">
                          <p className="sm:mb-0 mb-0 mx-6 leading-none lg:text-sm md:text-xs text-base font-medium text-white">
                            An arena shooter where you utilize orbiting orbs to defeat waves of enemies.
                          </p>
                        </div>
                      </div>
                      <div className="relative p-4 m-2 flex flex-col items-center justify-center" style={{ height: '460px', width: '340px' }}>
                        <div className="relative z-15 flex justify-center mb-4">
                          <Image src="/HELTOONS.png" alt="icon" width={200} height={140} />
                        </div>
                        <div className="container flex items-center justify-center text-center">
                          <p className="sm:mb-0 mb-0 mx-6 leading-none lg:text-sm md:text-xs text-base font-medium text-white">
                            Build your toon army with this card collecting game with short but tense matches!
                          </p>
                        </div>
                      </div>
                      
                    </div>
                  </div>



             
                
              
            </div>
          </section>
  )
}

export default Games