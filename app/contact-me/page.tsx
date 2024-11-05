import ContactForm from "@/components/ContactForm"; // Import the ContactForm component
import React from "react";

const Page = () => {
  return (
    <div
      className="w-screen h-screen flex items-center justify-center"
      style={{
        backgroundImage: 'url(/bg/bg_contact.jpg)', // Set the background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="h-[40%] w-[80%] ml-0 rounded-xl flex items-center justify-center mt-20 lg:mt-0">
        {/* Set default top margin of mt-20 and increased margin on larger screens */}
        <ContactForm /> {/* Render the ContactForm component */}
      </div>
    </div>
  );
};

export default Page;
