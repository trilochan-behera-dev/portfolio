import React from "react";
import { GrLinkedinOption } from "react-icons/gr";
import { IoLogoGithub, IoLogoWhatsapp } from "react-icons/io";
const Footer = () => {
  return (
    <div className="bg-background-light py-8 sm:py-4">
        <div className="max-w-screen-xl w-full flex justify-between items-center mx-auto px-6 sm:px-8 lg:px-16 gap-4">
            <div>
                <p className="text-primary text-lg font-bold">Trilochan Behera</p>
                <div className="flex w-full mt-2 mb-8 -mx-2">
                  <div className="mx-2 bg-background rounded-full items-center justify-center flex p-2 shadow-md">
                    <IoLogoGithub className="h-6 w-6" />
                  </div>
                  <div className="mx-2 bg-background rounded-full items-center justify-center flex p-2 shadow-md">
                    <GrLinkedinOption className="h-6 w-6" />
                  </div>
                  <div className="mx-2 bg-background rounded-full items-center justify-center flex p-2 shadow-md">
                    <IoLogoWhatsapp className="h-6 w-6" />
                  </div>
                </div>
            </div>
            <p className="text-gray-400">©{new Date().getFullYear()}</p>
        </div>
    </div>
  );
};

export default Footer;
