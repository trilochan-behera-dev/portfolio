import React, { useState, useEffect } from "react";
import { navItem, title } from "../../resources/resource";
import { Link as LinkScroll } from "react-scroll";
import Modal from "../Modal";
import SocialMenu from "../SocialMenus";
import Contacts from "../Modal/Contacts";
import ButtonOutline from "../Button/ButtonOutline.";

const Header = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const closeModal = () => setModalOpen((prev)=>!prev);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);

  return (
    <>
      {/* Desktop Navigation */}
      <header
        className={"fixed top-0 w-full  z-30 bg-background transition-all " +
          (scrollActive ? " shadow-md pt-0" : " pt-4")
        }
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          <div className="font-bold text-3xl col-start-1 col-end-2 flex items-center text-primary">
            	{title}
          </div>
          <ul className="hidden lg:flex col-start-4 col-end-8 text-black-500  items-center">
            {navItem.map(({name, link, icon})=>(
              <LinkScroll
                  activeClass="active"
                  to={link}
                  spy={true}
                  smooth={true}
                  duration={1000}
                  onSetActive={() => {
                    setActiveLink(link);
                  }}
                  className={"px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative font-semibold" +
                    (activeLink === link
                      ? " text-primary animation-active "
                      : " text-black-500 hover:text-primary a")
                  }
              >
                  {name}
              </LinkScroll>
            ))}
          </ul>
          <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
            <SocialMenu/>
            <div onClick={()=>setModalOpen(true)}>
              <ButtonOutline>Hire Me</ButtonOutline>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation */}
      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 px-2 sm:px-8 shadow-t overflow-hidden">
        <div className="bg-background px-2">
          <ul className="flex w-full justify-between items-center text-black-500">
            {navItem.slice(0, navItem.length-1).map(({name, link, icon:Icon})=>(
              <LinkScroll
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                duration={1000}
                onSetActive={() => {
                  setActiveLink(link);
                }}
                className={
                  "mx-1 sm:mx-2 py-2 px-1 flex flex-col items-center text-[0.75rem] border-t-2 transition-all " +
                  (activeLink === link
                    ? "  border-primary text-primary font-bold"
                    : " border-transparent")
                }
              >
                {Icon}
                {name}
              </LinkScroll>
              ))}
          </ul>
        </div>
      </nav>

       {/* Contact Us modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
          <Contacts onClose={closeModal}/>
      </Modal>
    </>
  );
};

export default Header;
