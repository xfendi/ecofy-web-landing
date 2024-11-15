import React, { useState, useEffect } from "react";

import LogoBig from "../Assets/logo-text.png";

const Navigation = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`sticky top-5 w-max left-1/2 transform -translate-x-1/2 flex flex-row items-center gap-5 p-3 rounded-2xl transition-all duration-500 ${
        isScrolling && "bg-white shadow-md"
      }`}
    >
      <a href="/">
        <img src={LogoBig} alt="Ecofy" width={100} />
      </a>
      <ul className="flex flex-row gap-5 items-center">
        <li>
          <a href="#features" className="link">
            Features
          </a>
        </li>
        <li>
          <a href="#about" className="link">
            O nas
          </a>
        </li>
        <li>
          <a href="/updates" className="link">
            Aktualizacje
          </a>
        </li>
        <li>
          <a href="/contact" className="link">
            Kontakt
          </a>
        </li>
      </ul>
      <a href="/" className={`btn transition-opacity duration-500`}>
        Sprawdź wersję Beta
      </a>
    </nav>
  );
};

export default Navigation;
