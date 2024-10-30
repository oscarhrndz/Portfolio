import React from "react";

const ContactForm = () => {
  return (
    <div
      className="p-6 rounded-xl shadow-lg flex justify-between items-start w-full h-auto mx-auto"
      style={{ background: 'rgba(0, 0, 0, 0.4)', minHeight: '65vh' }} // Added minHeight for the container
    >
      {/* Contact Form */}
      <form className="w-full" style={{ width: '45vw', marginRight: '0vw' }}>
        <h1 className="text-2xl font-thin mb-5 text-gray-50">
          LET'S <span className="text-3xl font-bold text-purple-800">CONNECT</span> AND <span className="text-3xl font-bold text-purple-800">WORK</span> TOGETHER
        </h1>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Your name"
            name="name"
            className="w-full px-4 py-3 text-base text-gray-100 placeholder-gray-400 border-b border-black focus:outline-none"
            style={{ background: '#363636' }}
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="w-full px-4 py-3 text-base text-gray-100 placeholder-gray-400 border-b border-black focus:outline-none"
            style={{ background: '#363636' }}
          />
        </div>
        <div className="mb-4">
          <textarea
            placeholder="Your message"
            name="message"
            className="w-full px-4 py-3 text-base text-gray-100 placeholder-gray-400 border-b border-black focus:outline-none resize-none"
            style={{ background: '#363636', height: '35vh' }}
            maxLength={350} // Limit the character count to 350
          ></textarea>
          <div className="text-gray-500 text-sm mt-1 text-right">{`Max 350 characters`}</div>
        </div>
        <button
          className="px-6 py-2 text-sm text-white uppercase rounded-lg hover:bg-blue-400 transition-all duration-150 ease-linear"
          style={{ background: '#393939' }}
        >
          Send a message
        </button>
      </form>

      {/* Texts on the Right */}
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
