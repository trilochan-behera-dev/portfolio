import React, { useMemo } from "react";
import {motion} from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import {  mernStack } from "../resources/resource";
import RightShow from "./Animation/RightShow";
import LeftShow from "./Animation/LeftShow";
import { Link as LinkScroll } from "react-scroll";
import CVButton from "./Button/CVButton";

const Hero = ()=> {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
        <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto" id="about">
          <motion.div
            className="grid grid-flow-row sm:grid-flow-col sm:grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16"
            variants={scrollAnimation}>
            <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
              <LeftShow>
                <div className="py-2">
                  <p className='font-bold text-lg text-white'>I'm a passionate</p>
                  <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium leading-normal text-primary-light ">
                    Full stack Developer
                  </h1>
                  <p className="text-gray-700 mt-2 mb-6">
                    As a <strong className="text-primary">Full Stack Developer</strong>, I specialize in creating and managing dynamic websites and web applications. Check out my 
                    <LinkScroll
                        activeClass="active"
                        to={"project"}
                        spy={true}
                        smooth={true}
                        duration={1000}
                    >
                    <strong  className="text-primary cursor-pointer"> Projects </strong> 
                    </LinkScroll> 
                    and get in touch if you have an opportunity that matches my expertise!
                  </p>

                  <div className="flex gap-4 items-center py-1.5">
                    {mernStack.map((mern, i) => (
                    <img src={mern.link} className={`w-6 h-6 ${i == 1 && "bg-white rounded-full p-1"}`} key={mern.name+i} />
                    ))}
                  </div>
                </div>
                <CVButton>Professional Resume</CVButton>
              </LeftShow>
            </div>
            <div className="flex w-full">
              <RightShow>
                <img
                  src="/banner.jpg"
                  alt="VPN Illustrasi"
                  quality={100}
                  width={600}
                  height={200}
                />
              </RightShow>
            </div>
          </motion.div>
        </div>
  );
};

export default Hero;
