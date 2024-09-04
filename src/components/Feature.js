import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import Timeline from "./Timeline";
import Heading from "./Heading";
import SubHeading from "./Heading/SubHeading";
import Experiences from "./Experience";


const Experience = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="experience"
    >
      <Heading>Experience</Heading>
      <SubHeading>Professional Expertise</SubHeading>
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 my-12 justify-center">
        <ScrollAnimationWrapper className="flex w-full justify-end">
          <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
            <img
              src="/expr.jpg"
              alt="VPN Illustrasi"
              layout="responsive"
              quality={100}
              height={414}
              width={508}
            />
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>

        <motion.div className="flex flex-col items-end justify-center ml-auto w-full lg:w-full" variants={scrollAnimation}>
          {/* <Timeline/> */}
          <Experiences/>
        </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default Experience;
