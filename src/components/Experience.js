import { useState } from "react"
import DropDown from "./Button/Dropdown";

export default function Experiences() {
    const [selectedHeader, setSelectedHeader] = useState("Education");
    const skillHeader = [
        {
            key: "Education",
        },
        {
            key: "Experience",
        }
    ]
    return (
        <>
            <div className=" inset-0 w-full  overflow-y-auto hide_scrollbar">
                <p className="text-3xl text-center font-medium leading-relaxed my-3 capitalize text-linear-gradient">Experience</p>
                <div className="py-2 w-fit px-8 max-w-[1180px] m-auto hidden md:flex items-center justify-center shadow-lg rounded-lg  ">
                    {
                        skillHeader.map((sm, i) => (
                            <>
                                <div className={`px-4 py-2 w-60 rounded-lg  shadow-lg shadow-white text-center cursor-pointer mx-4 border-2 border-white ${selectedHeader === sm.key ? "bg-primary-dark text-white" : "bg-white text-primary-dark hover:bg-gray-200"}`} onClick={() => setSelectedHeader(sm.key)}>
                                    {sm.key}
                                </div >
                            </>
                        ))
                    }
                </div>
                <div className="block md:hidden w-1/2 mx-auto bg-primary-dark h-12 text-white rounded-xl ">
                    <DropDown
                        dataList={skillHeader}
                        label={"key"}
                        value={"key"}
                        setSelectedValue={(value) => setSelectedHeader(value)}
                        initialSelect={selectedHeader}
                    />
                </div>
                <div className="w-full max-w-[1180px] mx-auto my-8">
                    <div className="lg:container sm:mx-4 lg:mx-auto lg:w-5/6 2xl:w-3/4">
                        <div className="relative wrap overflow-hidden p-4 md:py-10 md:px-0">
                            <div className="left-6 md:left-1/2 absolute border-opacity-20 border-gray-400 dark:border-grey-800 h-full border"></div>
                            <div className="mb-6 md:mb-8 flex md:justify-between items-center w-full md:flex-row-reverse left-timeline">
                                <div className="order-1 md:w-5/12"></div>
                                <span className="z-20 flex items-center order-1 justify-center w-6 h-6 md:w-9 md:h-9 bg-violet-200 rounded-full ring-4 md:ring-8 ring-white dark:ring-grey-800 dark:bg-violet-900">
                                    <img src={`./Images/svg/${selectedHeader === "Experience" ? "experience.svg" : "skill.svg"}`} />
                                </span>
                                <div className="order-1 rounded-lg w-full ml-3 md:ml-0 bg-white dark:bg-grey-800 md:w-5/12 p-3 md:px-4 md:py-4" style={{ opacity: 1, transform: "none" }}>
                                    <h3 className="mb-2 font-medium text-lg md:text-xl text-black"> {selectedHeader === "Experience" ? "NetTantra Technologies (HyScaler)" : " Master of Computer Application"}  </h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 font-medium"> {selectedHeader === "Experience" ? "SDE-1 (Full stack) | April 2023 - Present" : "Ajay Binay Institute of Technology | 2018 - 2021"} </p>
                                    {selectedHeader === "Experience" ?
                                        <ul className="text-sm text-gray-400 mt-2 ml-4 list-disc">
                                            <li className="mb-0.5">Worked on Healthcare, Ecommerce, Entertaiment domain web applications.</li>
                                            <li className="mb-0.5">Lead Frontend team and ensure smooth communication with client.</li>
                                            <li className="mb-0.5">Skills:  JavaScript · React.js · Next.js · TailwindCSS · Express js · MySQL · MongoDB · Laravel </li>
                                        </ul> :
                                        <ul className="text-sm text-gray-400 mt-2 ml-4 list-disc">
                                            <li className="mb-0.5">Completed Mater degree from Ajay Binay institute of technology under Biju Pattnaik University of Technology</li>
                                            <li className="mb-0.5">Secured 8.48 CGPA</li>
                                            <li className="mb-0.5">Created Alumni Feedback System Project.</li>
                                        </ul>
                                    }
                                </div>
                            </div>
                            <div className="mb-6 md:mb-8 flex md:justify-between items-center w-full right-timeline">
                                <div className="order-1 md:w-5/12"></div>
                                <span className="z-20 flex items-center order-1 justify-center w-6 h-6 md:w-9 md:h-9 bg-violet-200 rounded-full ring-4 md:ring-8 ring-white dark:ring-grey-800 dark:bg-violet-900">
                                    <img src={`./Images/svg/skill.svg`} />
                                </span>
                                <div className="order-1 rounded-lg w-full ml-3 md:ml-0 bg-white dark:bg-grey-800 md:w-5/12 p-3 md:px-4 md:py-4" style={{ opacity: 1, transform: "none" }}>
                                    <h3 className="mb-2 font-medium text-lg md:text-xl text-black">{selectedHeader !== "Experience" ? `Bachelor's of Science (Hons)` : "NetTantra Technologies (HyScaler)"}</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                                        {selectedHeader === "Experience" ? "Junior Software Developer | Nov 2021 - April 2023" : "Alaka Mahavidyalaya, Anantabata, Jagatsinghpur"}
                                    </p>

                                    {selectedHeader === "Experience" ?
                                        <ul className="text-sm text-gray-400 mt-2 ml-4 list-disc">
                                            <li className="mb-0.5">Worked on design and development of software applications.</li>
                                            <li className="mb-0.5">Developed Ecommerce, Finance and Forums websites and internal tools.</li>
                                            <li className="mb-0.5">Skills:  JavaScript · React.js · TailwindCSS · Express js · MySQL · MongoDB · Python · Golang </li>
                                        </ul> :
                                        <ul className="text-sm text-gray-400 mt-2 ml-4 list-disc">
                                            <li className="mb-0.5">Completed Bachelor degree from Alaka Mahavidyalaya, Anantabata, Jagatsinghpur under Utkal University</li>
                                            <li className="mb-0.5">Secured 75 Percentage</li>
                                            <li className="mb-0.5">Paricipate in some Science exhibition</li>
                                        </ul>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )

};
