import React from "react";
import Mail from "../../Atoms/Mail";
import MyDesc from "../../Atoms/MyDesc";
import Navbar from "../../Molecules/Nav/Navbar";
import "./NavDesc.scss";
const NavDesciption = () => {
  return (
    <div id="navGroup">
      <MyDesc />
      <Mail />
      <Navbar />
    </div>
  );
};

export default NavDesciption;

// handleToggle={handleToggle} theme={theme}
