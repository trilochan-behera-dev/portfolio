import React, { useMemo } from "react";
import {motion} from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import LeftShow from "./Animation/LeftShow";
import RightShow from "./Animation/RightShow";
import { about } from "../resources/resource";

const About = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  return (
    <>      
       <div className="relative w-full sm:flex hidden max-w-screen-xl mx-auto ">
          <ScrollAnimationWrapper
            className="rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-background z-10">
            {about?.map((listUsers, index) => (
              <motion.div
                className="flex items-center justify-start sm:justify-center py-4 sm:py-6 px-4 sm:w-auto mx-auto sm:mx-0 "
                key={index}
                custom={{duration: 2 + index}}
                variants={scrollAnimation}
              >
                <div className="flex mx-auto w-40 sm:w-auto">
                  <div className="flex items-center justify-center bg-primary-light w-12 h-12 mr-6 rounded-full text-white-500 ">
                    {listUsers.icon}
                  </div>
                  <div className="flex flex-col">
                    <p className="text-xl text-black-600 font-bold">
                      {listUsers.number}+
                    </p>
                    <p className="text-lg text-black-500">{listUsers.name}</p>
                  </div>
                </div>
              </motion.div>
            ))}
        </ScrollAnimationWrapper>
       </div>
        <div className="sm:hidden grid divide-y-2 mx-4">
          <LeftShow>
            <div className=" grid grid-cols-2 divide-x-2">
                {about.slice(0,2)?.map((listUsers, index) => (
                  <motion.div
                    className="flex items-center justify-start sm:justify-center py-4 sm:py-6 px-4 w-auto "
                    key={index}
                    custom={{duration: 2 + index}}
                    variants={scrollAnimation}
                  >
                    <div className="flex mx-auto w-40 sm:w-auto">
                      <div className="flex items-center justify-center bg-primary-light w-12 h-12 mr-2 rounded-full text-white-500 ">
                        {listUsers.icon}
                      </div>
                      <div className="flex flex-col">
                        <p className="text-xl text-black-600 font-bold">
                          {listUsers.number}+
                        </p>
                        <p className="text-md text-black-500">{listUsers.name}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
          </LeftShow>
          <RightShow>
          <div className=" grid grid-cols-2 divide-x-2">
              {about.slice(2,4)?.map((listUsers, index) => (
                    <motion.div
                      className="flex items-center justify-start sm:justify-center py-4 sm:py-6 px-4 sm:w-auto"
                      key={index}
                      custom={{duration: 2 + index}}
                      variants={scrollAnimation}
                    >
                      <div className="flex mx-auto w-40 sm:w-auto">
                        <div className="flex items-center justify-center bg-primary-light w-12 h-12 mr-2 rounded-full text-white-500 ">
                          {listUsers.icon}
                        </div>
                        <div className="flex flex-col">
                          <p className="text-xl text-black-600 font-bold">
                            {listUsers.number}+
                          </p>
                          <p className="text-md text-black-500">{listUsers.name}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
              </div>
          </RightShow>
      </div>
      </>

  );
};

export default About;
