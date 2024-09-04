import React, { useMemo } from "react";
import ButtonPrimary from "./Button/ButtonPrimary";
import {motion} from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import About from "./about"
import { projects, skills, certificates } from "../resources/resource";
import { FaCertificate, FaGraduationCap, FaUser } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { RiCodeSSlashLine } from "react-icons/ri";

const Hero = ()=> {
  const mernStack = [
    { name: "mongodb", link: "./Images/svg/mongodb.svg" },
    { name: "express", link: "./Images/svg/expressjs.svg" },
    { name: "react", link: "./Images/svg/react.svg" },
    { name: "react", link: "./Images/svg/node.svg" },
  ]
  const about = [
    {
      name: "Experience",
      number: "3yr",
      icon:<FaGraduationCap />,
    },
    {
      name: "Skills",
      number: skills?.length,
      icon:<IoMdSettings/>,
    },
    {
      name: "Projects",
      number: projects?.length,
      icon: <RiCodeSSlashLine/>,
    },
    {
      name: "Certificates",
      number: projects?.length,
      icon: <FaCertificate />,
    },
  ]
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto"
      id="about"
    >
      <ScrollAnimationWrapper>
          <motion.div
            className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16"
            variants={scrollAnimation}>
            <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
           
          <div className="py-2">
          <p className='font-bold text-lg text-white'>I'm a passionate</p>

          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium leading-normal text-primary-light ">
            Full stack Developer
          </h1>
          <p className="text-gray-700 mt-4 mb-6">
              As a <strong className="text-primary">Full Stack Developer</strong>, I specialize in creating and managing dynamic websites and web applications. Check out my  <strong  className="text-primary">Projects</strong> and get in touch if you have an opportunity that matches my expertise!
            </p>

          <div className="flex gap-4 items-center py-1.5">
          {mernStack.map((mern, i) => (
          <img src={mern.link} className={`w-6 h-6 ${i == 1 && "bg-white rounded-full p-1"}`} key={mern.name+i} />
          ))}
          </div>
          </div>
              <ButtonPrimary>Professional Resume</ButtonPrimary>
            </div>
            <div className="flex w-full">
              <motion.div className="h-full w-full" variants={scrollAnimation}>
                <img
                  src="/banner.jpg"
                  alt="VPN Illustrasi"
                  quality={100}
                  width={600}
                  height={200}
                  layout="responsive"
                />
              </motion.div>
            </div>
          </motion.div>
        <About about={about}/>
      </ScrollAnimationWrapper>
    </div>
  );
};

export default Hero;
