import ContactForm from "@/components/ContactForm";
import React from "react";

const Page = () => {
  return (
    <div className="w-screen h-screen bg-black flex items-center justify-center">
      <div className="h-[60%] w-[80%] relative bg-black rounded-xl border border-white">
        <div className="absolute left-20 bottom-16 w-[70%] md:w-[30%]">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Page;
