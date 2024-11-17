import React from "react";

import Leaf from "../Assets/leaf.png";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="w-full justify-between flex flex-row items-center gap-5">
      <div className="flex flex-row gap-5">
        <NavLink to="/">
          <img src={Leaf} alt="Ecofy" className="w-10" />
        </NavLink>
        <ul className="flex flex-row gap-5 items-center rounded-3xl z-50">
          <li>
            <NavLink to="/about" className="link">
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/updates" className="link">
              Updates
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="link">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <NavLink to="/updates" className="btn">
        Get Beta Version
      </NavLink>
    </nav>
  );
};

export default Navigation;
