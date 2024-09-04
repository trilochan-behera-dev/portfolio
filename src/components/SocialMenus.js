import React, { useState } from "react";
import "./SocialMenu.css"; // Import the CSS for animation
import { IoShare } from "react-icons/io5";
import { FaShareAlt } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";
import { GrLinkedinOption } from "react-icons/gr";
import { IoLogoGithub, IoLogoWhatsapp } from "react-icons/io";

const SocialMenu = () => {
  const [active, setActive] = useState(false);

  const toggleMenu = () => {
    setActive(!active);
  };

  return (
    <div className={`menu ${active ? "active" : ""} flex items-center justify-center h-screen`}>
      <div className="toggle cursor-pointer" onClick={toggleMenu}>
        <div name="share-social" className="text-4xl text-primary border-primary">T</div>
        
      </div>

      <ul>
        {/* <li style={{ "--i": 0, "--clr": "#1877f2" }}>
          <a href="#" className="text-blue-600">
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
        </li>
        <li style={{ "--i": 1, "--clr": "#25d366" }}>
          <a href="#" className="text-green-500">
            <ion-icon name="logo-whatsapp"></ion-icon>
          </a>
        </li>
        <li style={{ "--i": 2, "--clr": "#1da1f2" }}>
          <a href="#" className="text-blue-400">
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
        </li> */}

        <li style={{ "--i": 3, "--clr": "#FF5733" }}>
        <a href="mailto:trilochanbeherak@gmail.com" className="text-orange-600">
            <ion-icon name="logo-reddit"><MdOutgoingMail /></ion-icon>
          </a>
        </li>
        <li style={{ "--i": 4, "--clr": "#0a66c2" }}>
          <a href="https://www.linkedin.com/in/trilochanbehera/" className="text-blue-700">
            <ion-icon name="logo-linkedin"><GrLinkedinOption /></ion-icon>
          </a>
        </li>
        <li style={{ "--i": 5, "--clr": "#25d366" }}>
          <a href="https://wa.me/+919583998665" className="text-green-500">
            <ion-icon name="logo-whatsapp"><IoLogoWhatsapp /></ion-icon>
          </a>
        </li>
        <li style={{ "--i": 6, "--clr": "#1b1e21" }}>
          <a href="#" className="text-gray-900">
            <ion-icon name="logo-github"><IoLogoGithub /></ion-icon>
          </a>
        </li>
        {/* <li style={{ "--i": 7, "--clr": "#ff0000" }}>
          <a href="#" className="text-red-600">
            <ion-icon name="logo-youtube"></ion-icon>
          </a>
        </li> */}
      </ul>
    </div>
  );
};

export default SocialMenu;
