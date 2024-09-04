import React, { useMemo } from "react";
import Testimoni from "./Testimoni";
import ButtonPrimary from "./Button/ButtonPrimary";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import Heading from "./Heading";
import SubHeading from "./Heading/SubHeading";

const Pricing = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
      id="project"
    >
      
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full  justify-center">
      <ScrollAnimationWrapper>
      <motion.h3
              variants={scrollAnimation}
              >
              <Heading>Projects</Heading>
              <SubHeading>My Creations</SubHeading>
            </motion.h3>
      </ScrollAnimationWrapper>
          
        <div className="flex flex-col w-full mb-8  text-center" id="testimoni">
          <ScrollAnimationWrapper className="w-full flex flex-col py-8">
            <motion.div variants={scrollAnimation}>
              <Testimoni />
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
        </div>
        </div>
  );
};

export default Pricing;


// <ScrollAnimationWrapper className="relative w-full mt-16">
// <motion.div variants={scrollAnimation} custom={{duration: 3}}>
//   <div className="absolute rounded-xl  py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-background">
//     <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
//       <h5 className="text-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
//         Get in touch <br /> Get Special Features!
//       </h5>
//       <p>Let's subscribe with us and find the fun.</p>
//     </div>
//     <ButtonPrimary>Get Started</ButtonPrimary>
//   </div>
//   <div
//     className="absolute bg-heading opacity-5 w-11/12 roudned-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0"
//     style={{ filter: "blur(114px)" }}
//     ></div>
// </motion.div>
// </ScrollAnimationWrapper>