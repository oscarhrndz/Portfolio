import ContactForm from "@/components/ContactForm";
import React from "react";

const Page = () => {
  return (
    <div
      className="w-screen h-screen flex items-center justify-center"
      style={{
        backgroundImage: 'url(/airplane.jpg)', // Use string directly if in public
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="h-[40%] w-[70%] rounded-xl flex items-center justify-center">
        <ContactForm />
      </div>
    </div>
  );
};

export default Page;
