import React from "react";

const ButtonPrimary = ({ children, addClass }) => {
  return (
    <button
      className={
        "py-2 px-5 sm:px-8 text-white-500 font-semibold rounded-br-3xl rounded-tl-lg bg-primary hover:shadow-primary transition-all outline-none " +
        addClass
      }
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
