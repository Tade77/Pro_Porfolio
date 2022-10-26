import React from "react";
import Mail from "../Atoms/Mail";
import MyDesc from "../Atoms/MyDesc";
import Navbar from "../Molecules/Nav/Navbar";

const NavDesciption = ({ handleToggle, theme }) => {
  return (
    <div
      className={`App flex flex-row justify-between py-[8px] text-[#171717] py-[20px] px-[20.67px] border mx-auto 
      `}
    >
      <MyDesc />
      <Mail />
      <Navbar handleToggle={handleToggle} theme={theme} />
    </div>
  );
};

export default NavDesciption;