import React from "react";
const Footer = () => {
  return (
    <div className="bg-background-light pt-44 pb-8">
      <div className="max-w-screen-xl w-full flex justify-between mx-auto px-6 sm:px-8 lg:px-16 gap-4">
     
          <div className="flex w-full mt-2 mb-8 -mx-2">
            <div className="mx-2 bg-background rounded-full items-center justify-center flex p-2 shadow-md">
              {/* <Facebook className="h-6 w-6" /> */}
            </div>
            <div className="mx-2 bg-background rounded-full items-center justify-center flex p-2 shadow-md">
              {/* <Twitter className="h-6 w-6" /> */}
            </div>
            <div className="mx-2 bg-background rounded-full items-center justify-center flex p-2 shadow-md">
              {/* <Instagram className="h-6 w-6" /> */}
            </div>
          </div>
          <p className="text-gray-400">©{new Date().getFullYear()}</p>
      </div>
    </div>
  );
};

export default Footer;
