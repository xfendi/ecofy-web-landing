import React, { useState, useRef, useEffect } from "react";

import Leaf from "../Assets/leaf.png";
import { NavLink } from "react-router-dom";

import { IoMenu } from "react-icons/io5";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(true);

  const menuRef = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (!menuRef?.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <nav className="w-full justify-between flex flex-row items-center gap-5 relative">
      <div className="flex flex-row gap-5">
        <NavLink to="/">
          <img src={Leaf} alt="Ecofy" className="w-10" />
        </NavLink>
        <ul
          ref={menuRef}
          className={`flex flex-row gap-5 items-center rounded-3xl z-50 ${
            isOpen && "open"
          }`}
        >
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
      <button
        ref={menuRef}
        className="w-10 h-10 bg-green-500 text-white rounded-3xl justify-center hidden items-center menu-burger"
        onClick={() => setIsOpen(!isOpen)}
      >
        <IoMenu />
      </button>
    </nav>
  );
};

export default Navigation;
