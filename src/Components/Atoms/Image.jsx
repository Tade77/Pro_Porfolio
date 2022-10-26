import React from "react";

const Image = ({ src, customClass, onClick }) => {
  return <img onClick={onClick} className={customClass} src={src} alt="" />;
};

export default Image;
