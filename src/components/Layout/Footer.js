import React from "react";
import { GrLinkedinOption } from "react-icons/gr";
import { IoLogoGithub, IoLogoWhatsapp } from "react-icons/io";
import { socialIcon } from "../../resources/resource";
const Footer = () => {
  return (
    <div className=" py-8 sm:py-4 bg-primary/10">
        <div className="max-w-screen-xl w-full flex justify-between items-center sm:items-end mx-auto px-6 sm:px-8 lg:px-16 gap-4">
            <div>
                <p className="text-primary text-lg font-bold">Trilochan Behera</p>
                <div className="flex w-full mt-2 mb-8 sm:mb-2 -mx-2">
                  {
                    socialIcon.map(({icon:Icon,color, link}, index)=>(
                      <a href={link} className={color} target="_blank" key={index}>
                        <div className="mx-2 bg-background rounded-full items-center justify-center flex p-2 shadow-md">
                          {Icon}
                        </div>
                      </a>
                    ))
                  }
                </div>
            </div>
            <p className="text-primary font-semibold">©{new Date().getFullYear()}</p>
        </div>
    </div>
  );
};

export default Footer;
