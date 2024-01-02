import React from "react";
import Logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between items-center px-8 py-1">
        <img src={Logo} alt="Logo" className="w-48" />
        <ul className="flex flex-row justify-between items-center gap-8 text-lg font-semibold">
          <li>
            <a href="/" className="no-underline hover:text-blue">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="no-underline hover:text-blue">
              About
            </a>
          </li>
          <li>
            <a href="/contact-us" className="no-underline hover:text-blue">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
