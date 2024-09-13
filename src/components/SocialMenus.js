import React, { useState } from "react";
import "./SocialMenu.css"; // Import the CSS for animation
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";
import { GrLinkedinOption } from "react-icons/gr";
import { IoLogoGithub, IoLogoWhatsapp } from "react-icons/io";
import { socialIcon } from "../resources/resource";

const SocialMenu = () => {
  const [active, setActive] = useState(false);

  const toggleMenu = () => {
    setActive(!active);
  };

  return (
    <div className={`menu ${active ? "active" : ""} flex items-center justify-center h-screen pr-4`}>
      <div className="toggle cursor-pointer" onClick={toggleMenu}>
        <div name="share-social" className="text-xl text-primary border-primary rotate-180"><FaExternalLinkSquareAlt/></div>
      </div>
      <ul>
        {
          socialIcon.map(({clr,name,icon:Icon,color, link}, index)=>(
            <li style={{ "--i": index+4 , "--clr": clr }}>
            <a href={link} className={color} target="_blank">
                <ion-icon name={`logo-${name}`}>{Icon}</ion-icon>
              </a>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default SocialMenu;
