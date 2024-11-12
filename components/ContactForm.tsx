"use client";

import React, { useState, useEffect } from "react";
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [isVisible, setIsVisible] = useState(false);  // Track visibility for animation

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs.send(
      'service_71vzppv',
      'template_8powmm1',
      formData,
      'QAsBIuPXDrlOKDEPK'
    ).then((result) => {
      console.log(result.text);
      setSuccessMessage("Message sent successfully!");
      setFormData({ name: '', email: '', message: '' });
    }).catch((error) => {
      console.log(error.text);
      alert("An error occurred, please try again.");
    });
  };

  useEffect(() => {
    // Trigger the animation after the component is mounted (for page load and navigation)
    setIsVisible(true);
  }, []);

  return (
    <div
      className={`form-complete p-6 rounded-xl shadow-lg flex flex-col lg:flex-row justify-between items-start w-full mx-auto -mt-0 lg:mt-5 pl-40 transition-all duration-700 ease-in-out ${
        isVisible ? 'fade-slide-in' : 'opacity-0 translate-y-10'
      }`}
      style={{
        background: 'rgba(0, 0, 0, 0.4)',
        minHeight: '90vh',
        maxHeight: '80vh',
        overflowY: 'scroll', // Enable scrolling
        scrollbarWidth: 'none', // Firefox
        msOverflowStyle: 'none', // IE and Edge
        WebkitOverflowScrolling: 'touch', // For smooth scrolling on iOS
      }}
      onWheel={(e) => {
        e.currentTarget.scrollBy({
          top: e.deltaY,
          behavior: 'smooth',
        });
        e.preventDefault();
      }}
    >
      <form onSubmit={sendEmail} className="w-full lg:w-[45%] mb-8 lg:mb-0">
        <h1 className="title-form text-3xl mb-5 text-gray-50 font-bold">
          LET&apos;S <span className="text-3xl font-bold text-purple-800">CONNECT</span> AND <span className="text-3xl font-bold text-purple-800">WORK</span> TOGETHER
        </h1>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Your name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="input-form w-full px-4 py-3 text-base text-gray-100 placeholder-gray-400 border-b border-black focus:outline-none"
            style={{ background: '#363636' }}
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="input-form w-full px-4 py-3 text-base text-gray-100 placeholder-gray-400 border-b border-black focus:outline-none"
            style={{ background: '#363636' }}
            required
          />
        </div>
        <div className="mb-4">
          <textarea
            placeholder="Your message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className="input-form w-full px-4 py-3 text-base text-gray-100 placeholder-gray-400 border-b border-black focus:outline-none resize-none"
            style={{ background: '#363636', height: '35vh' }}
            maxLength={350}
            required
          ></textarea>
          <div className="maximum-text text-gray-500 text-sm mt-1 text-right">Max 350 characters</div>
        </div>
        <div className="button-contact2 flex items-center">
          <button
            type="submit"
            className="px-6 py-2 text-sm text-white uppercase rounded-lg hover:bg-blue-400 transition-all duration-150 ease-linear"
            style={{ background: '#393939' }}
          >
            Send a message
          </button>
          {successMessage && (
            <span className="ml-4 text-green-500 text-base">{successMessage}</span>
          )}
        </div>
      </form>

      {/* Contact details move below form on smaller screens */}
      <div className="information flex flex-col items-start w-full lg:w-[35%] text-white pb-0">
        <div className="margin-move pt-80 text-left">
          <p className="title-contact text-base text-gray-500">Email</p>
          <p className="data-contact text-lg font-semibold border-b border-gray-100 pb-1">oscarhernandezsoler@gmail.com</p>
        </div>
        <div className="margin-move text-left pt-8">
          <p className="title-contact text-base text-gray-500">Phone number</p>
          <p className="data-contact text-lg font-semibold border-b border-gray-400 pb-1">+34 646041002</p>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .form-complete {
            margin-top: 0vh;
            padding-left: 25vh;
          }
          .title-form {
            font-size: 1.3rem;
          }
          .input-form {
            font-size: 0.9rem;
            padding: 0.5rem; /* Adjusted padding for smaller input fields */
          }
          .button-contact2 button {
            font-size: 0.8rem; /* Smaller font size */
            padding: 0.5rem 1rem; /* Adjust padding */
          }
          .maximum-text {
            font-size: 0.7rem;
          }
          .title-contact {
            font-size: 0.8rem; /* Smaller font size under 500px */
            padding-top: 0vh;
          }
          .data-contact {
            font-size: 1rem;
            padding-top: 0vh;
          }
          .information {
            padding-bottom: 15vh;
            padding-top: 0rem;
          }
          .margin-move {
            padding-top: 0vh;
            padding-bottom: 0rem;
          }
        }

        /* Animation classes */
        .fade-slide-in {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s;
        }

        .opacity-0 {
          opacity: 0;
          transform: translateY(10px);
        }
      @media (max-width: 1024px) {
        .form-complete {
          margin-top: 0vh;
          padding-left: 0vh;
        }
      }
      `}</style>
    </div>
  );
};

export default ContactForm;
