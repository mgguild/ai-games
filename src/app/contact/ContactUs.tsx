"use client"
import React, { ChangeEvent, FormEvent, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const form = useRef<HTMLFormElement>(null);
  const [emailSent, setEmailSent] = useState(false);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm('service_e9btzyq', 'template_7e0t19z', form.current!, {
        publicKey: 'Swh2UVkdXF8mXAzvQ',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setEmailSent(true);
          setTimeout(() => {
            setEmailSent(false);
            form.current?.reset(); // Reset the form after popup disappears
          }, 3000);
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <>
      <section id="contact_us" className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center w-full "
        style={{ 
          backgroundImage: "url('/BG_contactus.png')", 
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          backgroundBlendMode: "darken" 
        }}>

        <div className="items-center mt-10 w-full max-w-2xl flex justify-evenly">
          {/* Text Section */}
          {/* <div className="w-full hidden sm:flex items-center justify-center">
            <p className="text-4xl font-bold text-white tracking-wide uppercase text-center">Have Questions?<br/>Feel Free to Reach Out</p>
          </div> */}
          {/* Form Section */}
          <div className="w-full relative">
            <div className="flex items-center justify-center space-x-4 pt-0 pb-12">
              <h1 className="text-6xl font-bold text-white drop-shadow-lg text-center">CONTACT US</h1>
            </div>
            <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-4 relative">
              <div className="flex space-x-4">
                <input type="text" name="user_name" placeholder="Name" className="w-1/2 p-3 bg-gray-800 text-white rounded-lg border border-purple-500 focus:ring-2 focus:ring-purple-300 outline-none" required />
                <input type="email" name="user_email" placeholder="Email" className="w-1/2 p-3 bg-gray-800 text-white rounded-lg border border-purple-500 focus:ring-2 focus:ring-purple-300 outline-none" required />
              </div>
              <textarea name="message" placeholder="Your Message" className="w-full p-3 h-48 bg-gray-800 text-white rounded-lg border border-purple-500 focus:ring-2 focus:ring-purple-300 outline-none" required></textarea>
              <button
                type="submit"
                className="w-full p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white font-bold transition-colors hover:from-purple-600 hover:to-purple-600"
              >
                SEND MESSAGE
              </button>
              {/* Popup Message */}
              {emailSent && (
                <div className="absolute top-14 left-1/2 transform -translate-x-1/2 bg-green-500 text-white p-2 rounded-lg shadow-lg transition-opacity">
                  Message Sent!
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
