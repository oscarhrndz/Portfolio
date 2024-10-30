"use client";

import React, { useState } from "react";
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [successMessage, setSuccessMessage] = useState(''); // State for success message

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs.send(
      'service_71vzppv', // Replace with your EmailJS service ID
      'template_8powmm1', // Replace with your EmailJS template ID
      formData,
      'QAsBIuPXDrlOKDEPK' // Replace with your EmailJS user ID
    ).then((result) => {
      console.log(result.text);
      setSuccessMessage("Message sent successfully!"); // Set success message
      setFormData({ name: '', email: '', message: '' }); // Clear form fields
    }).catch((error) => {
      console.log(error.text);
      alert("An error occurred, please try again.");
    });
  };

  return (
    <div className="p-6 rounded-xl shadow-lg flex justify-between items-start w-full h-auto mx-auto"
      style={{ background: 'rgba(0, 0, 0, 0.4)', minHeight: '65vh' }}>
      <form onSubmit={sendEmail} className="w-full" style={{ width: '45vw', marginRight: '0vw' }}>
        <h1 className="text-2xl font-thin mb-5 text-gray-50">
          LET'S <span className="text-3xl font-bold text-purple-800">CONNECT</span> AND <span className="text-3xl font-bold text-purple-800">WORK</span> TOGETHER
        </h1>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Your name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-4 py-3 text-base text-gray-100 placeholder-gray-400 border-b border-black focus:outline-none"
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
            className="w-full px-4 py-3 text-base text-gray-100 placeholder-gray-400 border-b border-black focus:outline-none"
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
            className="w-full px-4 py-3 text-base text-gray-100 placeholder-gray-400 border-b border-black focus:outline-none resize-none"
            style={{ background: '#363636', height: '35vh' }}
            maxLength={350}
            required
          ></textarea>
          <div className="text-gray-500 text-sm mt-1 text-right">Max 350 characters</div>
        </div>
        <div className="flex items-center">
          <button
            type="submit"
            className="px-6 py-2 text-sm text-white uppercase rounded-lg hover:bg-blue-400 transition-all duration-150 ease-linear"
            style={{ background: '#393939' }}
          >
            Send a message
          </button>
          {successMessage && (
            <span className="ml-4 text-green-500 text-base">{successMessage}</span> // Display success message
          )}
        </div>
      </form>

      <div className="flex flex-col items-start w-[35%] ml-14 text-gray-200" style={{ marginTop: '41.5vh', right: '1vw' }}>
        <div className="mb-6 text-left">
          <p className="text-base text-gray-500">Email</p>
          <p className="text-xl font-semibold border-b border-gray-100 pb-1">oscarhernandezsoler@gmail.com</p>
        </div>
        <div className="text-left">
          <p className="text-base text-gray-500">Phone number</p>
          <p className="text-xl font-semibold border-b border-gray-400 pb-1">+34 646041002</p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
