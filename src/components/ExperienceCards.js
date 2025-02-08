import { LiaIndustrySolid } from 'react-icons/lia';
import LeftShow from "./Animation/LeftShow";
import RightShow from "./Animation/RightShow";

export default function ExperienceCards() {
  return (
    <div className="w-full mx-auto md:my-8 grid sm:grid-cols-3 gap-2">
      {/* Left card animation */}
      <LeftShow className="w-full bg-white-500 border shadow-xl border-white-300 sm:mt-40 p-4 text-sm flex flex-col justify-center items-center h-28 overflow-auto">
        {/* <div className="text-center text-[2.5rem] text-white rounded-full p-4 border-2 border-primary shadow-xl text-primary">
          <LiaIndustrySolid />
        </div> */}
        <a href='https://hyscaler.com/' target='_blank'> <p className="text-primary font-extrabold italic"> Hyscaler </p> </a>
        <p className="text-primary font-medium"> Nov 2021 - June 2024 </p>
        <p className="text-primary font-medium text-xs"> Software Development Engineer - I </p>
        <p className="text-primary font-medium"> On-site </p>
      </LeftShow>

      {/* Right card animation */}
      <LeftShow className=" w-full bg-white-500 text-primary p-4 text-sm shadow-xl sm:mt-20 flex flex-col justify-center items-center h-28 overflow-auto">
        {/* <div className="text-center text-[2.5rem] text-white rounded-full p-4 border-2 border-white-500">
          <LiaIndustrySolid color="white" />
        </div> */}
        <a href='https://user.powrofyou.com/' target='_blank'><p className="text-primary font-extrabold italic "> Powr of You Ltd. </p></a>
        <p className="text-primary font-medium"> June 2024 - Dec 2024 </p>
        <p className="text-primary font-medium text-xs"> Software Developer </p>
        <p className="text-primary font-medium"> Remote </p>
      </LeftShow>

      {/* Left card animation */}
      
      <RightShow className=" w-full bg-primary border shadow-xl border-white-300  p-4 text-sm flex flex-col justify-center items-center h-28 overflow-auto">
        {/* <div className="text-center text-[2.5rem] text-white rounded-full p-4 border-2 border-primary shadow-xl text-primary">
          <LiaIndustrySolid />
        </div> */}
        <a href='https://www.infosys.com/' target='_blank'><p className="text-white-500 font-extrabold italic "> Infosys Limited </p></a>
        <p className="text-white-500 font-medium"> Dec 2024 - Present </p>
        <p className="text-white-500 font-medium text-xs"> Senior Associate Consultant </p>
        <p className="text-white-500 font-medium"> Hybrid </p>
      </RightShow>
    </div>
  );
}
