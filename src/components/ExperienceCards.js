import { LiaIndustrySolid } from 'react-icons/lia';
import LeftShow from "./Animation/LeftShow";
import RightShow from "./Animation/RightShow";

export default function ExperienceCards() {
  return (
    <div className="w-full mx-auto md:my-8 grid sm:grid-cols-2 gap-2">
      {/* Left card animation */}
      <LeftShow className="h-64 w-full bg-white-500 shadow-xl border-primary  p-4 text-sm flex flex-col justify-center items-center">
        <div className="text-center text-[2.5rem] text-white rounded-full p-4 border-2 border-primary shadow-xl text-primary">
          <LiaIndustrySolid />
        </div>
        <p className="text-primary font-medium"> HyScaler </p>
        <p className="text-primary font-medium"> Nov 2021 - Jun 2024 </p>
        <p className="text-primary font-medium"> Bhubaneswar, Odisha, India </p>
        <p className="text-primary font-bold italic text-md"> Software Development Engineer - I </p>
      </LeftShow>

      {/* Right card animation */}
      <RightShow className="h-64 w-full bg-primary md:mt-40 text-white-500 p-4 text-sm shadow-xl flex flex-col justify-center items-center">
        <div className="text-center text-[2.5rem] text-white rounded-full p-4 border-2 border-white-500">
          <LiaIndustrySolid color="white" />
        </div>
        <p className="text-white-500 font-medium"> Powr of You Ltd. </p>
        <p className="text-white-500 font-medium"> Jun 2024 - Present </p>
        <p className="text-white-500 font-medium"> Bhubaneswar, Odisha, India </p>
        <p className="text-white-500 font-bold italic text-md">Software Developer - Full Stack</p>
      </RightShow>
    </div>
  );
}
