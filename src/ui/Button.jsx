import React from "react";

const Button = ({ children, className, type }) => {
  return (
    <button
      type={type}
      className={`text-white bg-primary-950 hover:bg-heading-950 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-sm text-center  ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
