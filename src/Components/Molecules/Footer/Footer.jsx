import React from "react";
import Mail from "../../Atoms/Mail";
import MyDesc from "../../Atoms/MyDesc";
import "./Footer.scss";

const Footer = ({ theme }) => {
  return (
    <div
      className={`flex flex-row justify-between py-[8px] mx-auto bg-[#F9FAFB] border text-[#171717] py-[20px] px-[20.67px]  ${
        theme === "dark" ? "dark" : "light"
      }`}
    >
      <MyDesc />
      <Mail />
      <p>Copyright &copy; 2022</p>
    </div>
  );
};

export default Footer;
