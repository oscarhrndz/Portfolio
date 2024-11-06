"use client"; // Add this directive at the top

import React, { useLayoutEffect, useState } from "react";
import ContactForm from "@/components/ContactForm";
import LoadingIndicator from "@/components/LoadingIndicator";

const Page = () => {
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useLayoutEffect(() => {
    const handleLoad = () => setIsPageLoaded(true);

    // Check if the document is already loaded
    if (document.readyState === "complete") {
      setIsPageLoaded(true);
    } else {
      // Otherwise, add the load event listener
      window.addEventListener("load", handleLoad);
    }

    // Clean up event listener on component unmount
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <div>
      {/* Show loading indicator until page is fully loaded */}
      {!isPageLoaded && <LoadingIndicator />}

      {/* Main content with ContactForm, rendered only after page load */}
      {isPageLoaded && (
        <div
          className="w-screen h-screen flex items-center justify-center bg-[#1a1a1a]"
          style={{
            backgroundImage: 'url(/bg/bg_contact.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="h-[40%] w-[80%] ml-0 rounded-xl flex items-center justify-center mt-0 lg:mt-0">
            <ContactForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
