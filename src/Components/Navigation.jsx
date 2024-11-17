import React from "react";

import Leaf from "../Assets/leaf.png";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav
      className={`w-full justify-between flex flex-row items-center gap-5`}
    >
      <NavLink to="/">
        <img src={Leaf} alt="Ecofy" className="w-16" />
      </NavLink>
      <ul className="flex flex-row gap-5 items-center rounded-3xl z-50">
        <li>
          <NavLink to="#features" className="link">
            Features
          </NavLink>
        </li>
        <li>
          <NavLink to="#about" className="link">
            About us
          </NavLink>
        </li>
        <li>
          <NavLink to="/updates" className="link">
            Updates
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="link">
            contact
          </NavLink>
        </li>
      </ul>
      <NavLink to="/" className={`btn transition-opacity duration-500`}>
        Get Beta Version
      </NavLink>
    </nav>
  );
};

export default Navigation;
