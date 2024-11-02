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
      <div className="h-[40%] w-[70%] rounded-xl flex items-center justify-center"> {/* Added a semi-transparent white background for better readability */}
        <ContactForm /> {/* Render the ContactForm component */}
      </div>
    </div>
  );
};

export default Page;
