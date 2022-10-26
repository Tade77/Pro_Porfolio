import React from "react";
import NavDesciption from "../Organisms/NavDesciption";
import Footer from "../Molecules/Footer/Footer";
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
