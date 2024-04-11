import React from 'react'
import Image from "next/image"

const Games = () => {
  return (
            <section id="games" className="text-gray-700 body-font min-h-screen ">
            <div className="pl-16 pr-16 py-24 items-center md:px-0 ">
                <div className="flex flex-col text-center w-full mb-15 lg:pb-0 md:pb-32">
                    <h1 className="title-font sm:text-4xl text-5xl mb-4 font-medium text-gray-900">Games</h1>
                    <div className="border-t border-black w-1/4 mx-auto mb-4"></div>
                    <h2 className="text-base text-black tracking-widest font-medium title-font mb-4 pb-8">
                    Explore our diverse portfolio of games, each crafted with passion and precision:
                    </h2>
                </div>

                <div className="container mx-auto flex lg:px-36 lg:py-24 md:flex-row flex-col md:py-1 md:px-1 items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Casual Adventures:
                        </h1>
                        <p className="mb-8 leading-relaxed text-lg">Dive into enchanting worlds filled with puzzles, adventures, and endless fun for players of all ages.</p>
                        {/* <div className="flex justify-center">
                        <button className="ml-4 inline-flex text-black py-2 px-6 border-2 border-gray-300 focus:outline-none hover:bg-gray-300 rounded text-lg">Lorem Ipsum</button>
                        </div> */}
                    </div>
                    
                     {/* desktop view only */}
                     <div className="hidden lg:block lg:max-w-lg lg:w-full md:w-full w-full">
                     <Image src="/Casual Adventures.png" alt="logo" width={400} height={300} objectPosition='relative' className="mx-auto" />
                    </div>

                    {/* mobile view only */}
                    <div className="block lg:hidden lg:max-w-lg lg:w-full md:w-full w-full pb-32">
                    <Image src="/Casual Adventures.png" alt="logo" width={400} height={300} objectPosition='relative' />
                    </div>

                </div>

                <div className="container mx-auto flex lg:px-36 lg:py-24 md:flex-row flex-col md:py-1 md:px-1 items-center">
                     {/* desktop view only */}
                     <div className="hidden lg:block lg:max-w-lg lg:w-full md:w-full w-full">
                     <Image src="/Web3 Immersion.png" alt="logo" width={400} height={300} objectPosition='relative'/>
                    </div>
                    
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-5xl text-4xl mb-4 font-medium text-gray-900">Web3 Immersion
                        </h1>
                        <p className="mb-8 leading-relaxed text-lg">Experience the power of blockchain in gaming through our web3-enabled titles, offering ownership and immersive gameplay.</p>
                        {/* <div className="flex justify-center">
                        <button className="ml-4 inline-flex text-black py-2 px-6 border-2 border-gray-300 focus:outline-none hover:bg-gray-300 rounded text-lg">Lorem Ipsum</button>
                        </div> */}
                    </div>

                      {/* mobile view only */}
                      <div className="block lg:hidden lg:max-w-lg lg:w-full md:w-full w-full pb-32">
                        <Image src="/Web3 Immersion.png" alt="logo" width={400} height={300} objectPosition='relative'/>
                      </div>
                </div>
                
                <div className="container mx-auto flex lg:px-36 lg:py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Innovative Concepts:
                    </h1>
                    <p className="mb-8 leading-relaxed text-lg">Engage with our unique concepts that push boundaries and redefine gaming experiences.</p>
                    {/* <div className="flex justify-center">
                    <button className="ml-4 inline-flex text-black py-2 px-6 border-2 border-gray-300 focus:outline-none hover:bg-gray-300 rounded text-lg">Lorem Ipsum</button>
                    </div> */}
                </div>
               
                  {/* desktop view only */}
                  <div className="hidden lg:block lg:max-w-lg lg:w-full md:w-full w-full">
                  <Image src="/Innovative Concepts.png" alt="logo" width={400} height={300} objectPosition='relative'/>
                    </div>

                    {/* mobile view only */}
                    <div className="block lg:hidden lg:max-w-lg lg:w-full md:w-full w-full pb-32">
                    <Image src="/Innovative Concepts.png" alt="logo" width={400} height={300} objectPosition='relative'/>
                    </div>

                </div>
            </div>
          </section>
  )
}

export default Games