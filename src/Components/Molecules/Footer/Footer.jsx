import React from "react";
import Mail from "../../Atoms/Mail";
import MyDesc from "../../Atoms/MyDesc";
import "./Footer.scss";

const Footer = ({ theme }) => {
  return (
    <div className={`footer `}>
      <MyDesc />
      <Mail />
      <p>Copyright &copy; 2022</p>
    </div>
  );
};

export default Footer;
