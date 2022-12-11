import AnchorLink from "react-anchor-link-smooth-scroll";
import { NavLink } from "react-router-dom";
import Image from "../../Atoms/Image";
import "./Navbar.scss";

const Navbar = ({ handleToggle, theme }) => {
  // const activeStyle = ({ isActive }) => {
  //   return {
  //     color: isActive ? "blue" : "black",
  //   };
  // };
  // const navItems = [
  //   {
  //     name: "Home",
  //     path: "/",
  //   },
  //   {
  //     name: "Work",
  //     path: "/#work",
  //   },
  //   {
  //     name: "About",
  //     path: "/#about",
  //   },
  // ];
  return (
    <nav id="nav">
      <AnchorLink href="#home">
        <span>Home</span>
      </AnchorLink>
      <AnchorLink href="#about">
        <span>About</span>
      </AnchorLink>
      <AnchorLink href="#work">
        <span>Work</span>
      </AnchorLink>
      {/* <Image
        src={`/Frame 29551.png`}
        customClass={`toggle__btn ${theme}`}
        onClick={handleToggle}
      /> */}
    </nav>
  );
};

export default Navbar;
