import React from 'react';
import ButtonOutline from '../Button/ButtonOutline.';

const Skills = ({ skill, onClose }) => {
  return (
    <div className="relative bg-white border border-gray-500 rounded-md p-5 max-w-[375px] h-full min-h-[400px] mx-4 md:mx-auto bg-white flex flex-col justify-between bg-white-500">
       <div>
       <div className="flex items-center justify-between gap-4 mb-4">
          <div className='flex gap-4 items-center'>
          <img className="h-10" src={skill.link} alt="..." />
          <h6 className="text-lg font-semibold uppercase text-primary-light">{skill.name}</h6>
          </div>
          <div className='flex gap-2'>
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
        <ul className="list-decimal px-4 font-medium text-sm leading-8 mb-4">
          {skill?.desc?.map((desc)=><li>{desc}</li>)}
        </ul>
       </div>
        <div className="flex justify-end" onClick={onClose} >
        <ButtonOutline>Close</ButtonOutline>
        </div>
      </div>
  );
};

export default Skills;
