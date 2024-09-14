import React from "react";

const ButtonOutline = ({ children }) => {
  return (
    <button className="font-medium tracking-wide py-1.5 px-5 border-2 border-primary text-primary bg-background outline-none  capitalize hover:bg-primary hover:text-white-500 transition-all hover:shadow-primary rounded-br-3xl rounded-md text-sm">
      {" "}
      {children}
    </button>
  );
};

export default ButtonOutline;
