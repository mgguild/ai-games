'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const MAILCHIMP_URL = process.env.NEXT_PUBLIC_MAILCHIMP_URL;

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!MAILCHIMP_URL) {
      setStatus('Mailchimp URL is not defined.');
      return;
    }

    setStatus('Loading...');

    try {
      const response = await fetch(MAILCHIMP_URL, {
        method: 'POST',
        body: JSON.stringify({ EMAIL: email }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        setStatus('Thank you for subscribing!');
      } else {
        setStatus('Subscription failed. Please try again.');
      }
    } catch (error) {
      setStatus('An error occurred. Please try again.');
    }
  };

  return (
    <div
      id="newsletter"
      className=" pt-28 flex flex-col items-center justify-center bg-cover bg-center w-full py-0"
      style={{ backgroundImage: "url('/helltoons/BG Checkered.png')" }}
    >
      <div className="max-w-7xl w-full mx-auto lg:pr-52 items-center">
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8 ">
          <div className="bg-transparent pt-16 text-center lg:text-left">
            <h2 className="text-3xl font-bold mb-4 text-white">Join the Newsletter</h2>
            <p className="text-lg font-medium text-white mb-6">
            Find out what your favorite helltoon denizen is up to, from enemies to their favorite attack combo.
            </p>
            <form
              action="https://studio.us17.list-manage.com/subscribe/post?u=df445e28f9232d48b7abe3e1d&amp;id=da80051864&amp;f_id=0095c2e1f0"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              className="flex flex-col space-y-4"
              target="_blank"
            >
              <div className="mb-4">
                <label htmlFor="mce-EMAIL" className="block text-white mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="EMAIL"
                  className="p-3 rounded-md border border-gray-800 bg-gray-800 w-full"
                  id="mce-EMAIL"
                  required
                  placeholder="Your Email Address"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button
                type="submit"
                name="subscribe"
                id="mc-embedded-subscribe"
                className="bg-transparent text-white py-2 px-4 rounded-md border border-white hover:bg-gray-600"
              >
                Subscribe
              </button>

              {status && <p className="mt-4 text-white">{status}</p>}
            </form>
          </div>

          <div className="flex flex-col lg:flex-row items-end">
            <Image
              src="/helltoons/newsletter2.png"
              alt="Newsletter Graphic 1"
              width={500}
              height={400}
              className="w-full h-auto "
            />
            <Image
              src="/helltoons/newsletter1.png"
              alt="Newsletter Graphic 2"
              width={500}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
