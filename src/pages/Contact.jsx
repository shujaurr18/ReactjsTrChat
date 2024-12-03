import React, { useEffect } from 'react';

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div className=" flex flex-col ">
      {/* Header */}
      <div className="bg-[#8B3E2F] py-2">
        <h1 className="text-white text-center text-3xl font-normal">Contact</h1>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 container mx-auto px-4 md:px-8 lg:px-16 md:py-16 py-6  ">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16 gap-6">
          {/* Left Column - Text */}
          <div className="text-gray-600 leading-relaxed">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
          
          {/* Right Column - Contact Info */}
          <div className="md:space-y-6 space-y-2">
            <div className="flex flex-col">
              <span className="text-gray-800 mb-2 text-lg">Téléphone</span>
              {/* <div className="h-[1px] bg-gray-300 w-full"></div> */}
            </div>
            
            <div className="flex flex-col">
              <span className="text-gray-800 mb-2 text-lg">Email</span>
              {/* <div className="h-[1px] bg-gray-300 w-full"></div> */}
            </div>
            
            <div className="flex flex-col">
              <span className="text-gray-800 mb-2 text-lg">Adresse siège social</span>
              {/* <div className="h-[1px] bg-gray-300 w-full"></div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;