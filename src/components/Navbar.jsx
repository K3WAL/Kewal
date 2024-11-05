import { NavLink } from "react-router-dom";
import { kewal } from "../assets/images";
import { logo } from "../assets/images";
import { Designer } from "../assets/images";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink to="/">
        <img src={Designer} alt="logo" className="w-16 h-16 object-contain" />
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-blue-600" : "text-black"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-blue-600" : "text-black"
          }
        >
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
