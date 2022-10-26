import React from "react";

const Button = ({ label, customClass, onClick }) => {
  return (
    <button onClick={onClick} className={customClass}>
      {label}
    </button>
  );
};

export default Button;
