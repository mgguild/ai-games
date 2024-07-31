import React from 'react';

const Newsletter = () => {
  return (
    <div id="newsletter"
    className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center w-full"
    style={{ backgroundImage: "url('/helltoons/BG Checkered.png')" }}>

      <div className="bg-transparent p-6 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4 text-white">Join the Newsletter</h2>
        <p className="w-full leading-loose text-based font-medium text-white">
        Find out what your favorite helltoon denizen is up to, from enemies to their favorite attack combo.
      </p>
        <form>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="you@example.com"
            />
          </div>
     
          <button
            type="submit"
            className="w-full bg-transparent text-white py-2 px-4 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
