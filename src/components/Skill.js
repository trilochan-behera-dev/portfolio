import React, { useMemo, useState } from "react";
import {motion} from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import { skills } from "../resources/resource";
import { IoMdArrowForward } from "react-icons/io";
import Modal from "./Modal";
import Heading from "./Heading";
import SubHeading from "./Heading/SubHeading";
import Skills from "./Modal/Skills";

const Skill = () => {

  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectSkill, setSelectSkill] = useState(null);

  const openModal = (skill) => {
    setModalOpen(true)
    setSelectSkill(skill)
  };
  const closeModal = () => {
    setModalOpen(false)
    setSelectSkill(null)
  };

  return (
    <div
      className="max-w-screen-xl mt-12 sm:mt-24 px-8 xl:px-16 mx-auto"
      id="skill"
    >
      <Heading>Skills</Heading>
      <SubHeading>My Top SKills</SubHeading>
      <div className="relative w-full flex">
        <ScrollAnimationWrapper
          className="rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 py-9 z-10">
          {skills.map((skill, index) => (
            <motion.div
                className="flex justify-between py-4 px-2 h-20 sm:mx-0 bg-background rounded-md border-2 border-gray-500 shadow-lg group"
                key={index}
                custom={{duration: 2 + index}}
                variants={scrollAnimation}
              >
                  <img
                    src={skill.link}
                    height={60}
                    width={60}
                    alt="Icon People"
                    className="w-1/5 transition-transform duration-300 group-hover:scale-125"
                  />
                  <div className="flex flex-col justify-start w-3/5 gap-1">
                    <p className="font-bold text-sm">{skill.name.toUpperCase()}</p>
                    <div className="flex gap-0.5">
                    {Array.from({length:skill?.rating},i=>(
                        <img
                        src="./assets/Icon/stars.svg"
                        height={12}
                        width={12}
                        alt="rating"
                      />
                    ))
                  }
                  </div>
                  </div>
                  <div className="cursor-pointer transition-transform duration-300 group-hover:scale-125 group-hover:text-primary-light" onClick={()=>openModal(skill)}>
                      <IoMdArrowForward />
                  </div>
            </motion.div>
          ))}
       </ScrollAnimationWrapper>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
          <Skills onClose={closeModal} skill={selectSkill}/>
      </Modal>
    </div>
  );
};

export default Skill;
