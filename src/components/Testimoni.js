import React, { useState } from "react";

import {projects} from "../resources/resource"
import { IoLogoGithub, IoMdArrowBack, IoMdArrowForward } from "react-icons/io"
import { TbWorldWww } from "react-icons/tb"

// import react slick
import Slider from "react-slick";
import { BiArrowBack } from "react-icons/bi";

const Testimoni = () => {
  const settings = {
    dots: true,
    customPaging: function (i) {
      return (
        <a className="">
          <span className="mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all "></span>
        </a>
      );
    },
    dotsClass: "slick-dots w-max absolute mt-20  ",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <>
      <Slider
        {...settings}
        arrows={false}
        ref={setSliderRef}
        className="flex items-stretch justify-items-stretch"
      >
        {projects.map((project, index) => (
          <div className="px-3 flex items-stretch" key={index}>
            <div className="border-2 border-gray-500 hover:border-primary transition-all rounded-lg p-8 flex flex-col min-h-[40vh] max-h-[40vh]">
              <div className="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
                <div className="flex order-2 xl:order-1">
                  <img
                    src={project.image || "/banner.jpg"}
                    height={40}
                    width={60}
                    alt="project icon"
                  />
                  <div className="flex flex-col ml-5 text-left">
                    <p className="text-md text-primary capitalize font-medium italic">
                      {project.title}
                    </p>
                    <div className="mt-2 flex flex-nowrap gap-4 items-center text-lg">
                                {
                                    project?.gitLink ?
                                        // <Link href={pro?.gitLink} target="_blank">
                                            <p className='text-blue-400'> <IoLogoGithub /></p>
                                         :
                                        <p className='text-gray-800'> <IoLogoGithub /></p>
                                }
                                {
                                    project?.webLink ?
                                        // <Link href={pro?.webLink} target="_blank">
                                            <p className='text-blue-400'> <TbWorldWww /></p>
                                         :
                                        <p className='text-gray-800'> <TbWorldWww /></p>
                                }

                            </div>
                  </div>
                </div>
                <div className="flex flex-none items-center ml-auto order-1 xl:order-2">
                
                </div>
              </div>
              <p className="mt-5 text-left text-ellipsis">“{project.desc}”.</p>
            </div>
          </div>
        ))}
      </Slider>
      <div className="flex w-full items-center justify-end">
        <div className="flex flex-none justify-between w-auto  mt-4 sm:mt-14">
          <div
            className="mx-4 flex items-center justify-center h-8 w-8 rounded-full bg-white border-primary border hover:bg-primary hover:text-white-500 transition-all text-primary cursor-pointer"
            onClick={sliderRef?.slickPrev}
          >
            <IoMdArrowBack className="h-6 w-6 " />
          </div>
          <div
            className="flex items-center justify-center h-8 w-8 rounded-full bg-white border-primary border hover:bg-primary hover:text-white-500 transition-all text-primary cursor-pointer"
            onClick={sliderRef?.slickNext}
          >
            <IoMdArrowForward className="h-6 w-6" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimoni;
