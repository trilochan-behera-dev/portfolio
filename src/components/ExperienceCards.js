import { LiaIndustrySolid } from 'react-icons/lia';
import LeftShow from "./Animation/LeftShow";
import RightShow from "./Animation/RightShow";

export default function ExperienceCards() {
  return (
    <div className="w-full mx-auto md:my-8 grid sm:grid-cols-2 gap-2">
      {/* Left card animation */}
      <LeftShow className="h-80 w-full bg-primary/80 text-white-500 p-4 text-sm">
        <div className="text-center text-4xl text-white">
          <LiaIndustrySolid />
        </div>
        <p className="text-white-500 font-bold italic text-xl">Full Stack Developer</p>
        <p className="text-white-500 font-medium">- Powr of You Ltd. - Fulltime</p>
        <p className="text-white-500 font-medium">- Jun 2024 - Present · 3 months</p>
        <p className="text-white-500 font-medium">- Bhubaneswar, Odisha, India · Remote</p>
        <p className="text-white-500 font-semibold text-lg">Technology Develop -- </p>
        <p className="text-white-500 font-medium">
          - JavaScript, TypeScript, ReactJS, Redux, Redux Saga, Python, AWS Lambda, AWS Cognito, AWS DynamoDB, MySQL, Chrome Extension
        </p>
      </LeftShow>

      {/* Right card animation */}
      <RightShow className="h-80 w-full bg-primary/20 md:mt-40 text-white-500 p-4 text-sm">
        <div className="text-center text-4xl text-white">
          <LiaIndustrySolid color="black" />
        </div>
        <p className="text-black-600 font-bold italic text-xl">SDE - I</p>
        <p className="text-black-600 font-medium">- HyScaler - Fulltime</p>
        <p className="text-black-600 font-medium">- Nov 2021 - Jun 2024 · 2 yrs 8 months</p>
        <p className="text-black-600 font-medium">- Bhubaneswar, Odisha, India · On-site</p>
        <p className="text-black-600 font-semibold text-lg">Technology Develop -- </p>
        <p className="text-black-600 font-medium">
          - JavaScript, TypeScript, ReactJS, NextJS, NodeJS, ExpressJs, Go Lang, Redux, Redux Toolkit, Laravel, MongoDB, MySQL, GraphQL, Python, Django, Vue, Nuxt.js, Docker, Git, Cypress, Jest, Elastic Search
        </p>
      </RightShow>
    </div>
  );
}
