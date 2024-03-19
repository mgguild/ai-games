import React from 'react';
import Image from 'next/image';

const ContactUs = () => {
  return (
    <>
      <section id="contact_us" className="text-gray-700 body-font relative bg-gray-800">
        <div className=" flex px-16 py-24 md:flex-row flex-col items-center">
          <div className="container">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">CONTACT US</h1>
            <p className="leading-relaxed mb-5 text-white">Got questions, ideas, or collaboration inquiries? Reach out to us! We’re here to listen and connect. </p>
            <p className="leading-relaxed mb-5 text-white">Drop us a message at <a href="mailto:astrainteractivestudio@gmail.com">astrainteractivestudio@gmail.com</a>, and our team will get back to you promptly. For updates and insights, follow us on [social media handles].</p>
            <Image src="/Contact_Us.png" alt="logo" width={400} height={300} />
          </div>
          <div className="container">
            <div className="lg:w-full md:w-full rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative">
              <input className="rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4" placeholder="Email" type="email"/>
              <input className="rounded border border-gray-400 focus:outline-none text-base px-4 py-2 mb-4" placeholder="Subject"/>
              <textarea className="bg-white rounded border border-gray-400 focus:outline-none h-32 focus:border-indigo-500 text-base px-4 py-2 mb-4 resize-none" placeholder="Message"></textarea>
              <div className="flex justify-center">
                <button className="ml-4 inline-flex text-white py-2 px-6 border-2 border-gray-300 focus:outline-none hover:bg-gray-300 rounded text-lg">Lorem Ipsum</button>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
