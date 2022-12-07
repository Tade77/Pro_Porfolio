import { NavLink } from "react-router-dom";
import Image from "../../Atoms/Image";
import "./Navbar.scss";

const Navbar = ({ handleToggle, theme }) => {
  const activeStyle = ({ isActive }) => {
    return {
      color: isActive ? "blue" : "black",
    };
  };
  const navItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Work",
      path: "/#work",
    },
    {
      name: "About",
      path: "/#about",
    },
  ];
  return (
    <nav className={"flex flex-end space-x-4 "}>
      {navItems.map((navItems, Index) => (
        <NavLink to={navItems.path} key={Index} style={activeStyle}>
          {navItems.name}
        </NavLink>
      ))}

      {/* <Image
        src={`/Frame 29551.png`}
        customClass={`toggle__btn ${theme}`}
        onClick={handleToggle}
      /> */}
    </nav>
  );
};

export default Navbar;
