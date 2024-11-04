"use client";

import React, { useState } from "react";
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [successMessage, setSuccessMessage] = useState('');

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

  return (
    <div
      className="p-8 rounded-xl shadow-lg flex flex-col lg:flex-row justify-between items-start mx-auto min-h-[70vh] w-[100%] bg-[rgba(0,0,0,0.5)]"
    >
      <form onSubmit={sendEmail} className="w-full lg:w-[60%] mr-0 mb-8 lg:mb-0">
        <h1 className="text-2xl font-thin mb-5 text-gray-50">
          LET&apos;S <span className="text-3xl font-bold text-purple-800">CONNECT</span> AND <span className="text-3xl font-bold text-purple-800">WORK</span> TOGETHER
        </h1>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Your name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-4 py-3 text-base text-gray-100 placeholder-gray-400 border-b border-black focus:outline-none bg-gray-700"
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
            className="w-full px-4 py-3 text-base text-gray-100 placeholder-gray-400 border-b border-black focus:outline-none bg-gray-700"
            required
          />
        </div>
        <div className="mb-4">
          <textarea
            placeholder="Your message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className="w-full px-4 py-3 text-base text-gray-100 placeholder-gray-400 border-b border-black focus:outline-none bg-gray-700 resize-none h-[35vh]"
            maxLength={350}
            required
          ></textarea>
          <div className="text-gray-500 text-sm mt-1 text-right">Max 350 characters</div>
        </div>
        <div className="flex items-center">
          <button
            type="submit"
            className="px-6 py-2 text-sm text-white uppercase rounded-lg hover:bg-blue-400 transition-all duration-150 ease-linear bg-gray-800"
          >
            Send a message
          </button>
          {successMessage && (
            <span className="ml-4 text-green-500 text-base">{successMessage}</span>
          )}
        </div>
      </form>

      <div className="contact-info flex flex-col items-start lg:w-[35%] text-gray-200">
        <div className="mb-6 text-left">
          <p className="text-base text-gray-500">Email</p>
          <p className="text-xl font-semibold border-b border-gray-100 pb-1">oscarhernandezsoler@gmail.com</p>
        </div>
        <div className="text-left">
          <p className="text-base text-gray-500">Phone number</p>
          <p className="text-xl font-semibold border-b border-gray-400 pb-1">+34 646041002</p>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 800px) {
          .contact-container {
            width: 100%;
          }
          .contact-info {
            width: 100%;
            margin-left: 0;
            margin-top: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactForm;
