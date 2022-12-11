import React from "react";
import Footer from "../Molecules/Footer/Footer";
import NavDesciption from "../Organisms/NavDesc/NavDesciption";
const PageLayout = ({ children, handleToggle, theme }) => {
  return (
    <div className="body">
      <NavDesciption handleToggle={handleToggle} theme={theme} />
      {children}
      <Footer />
    </div>
  );
};

export default PageLayout;
