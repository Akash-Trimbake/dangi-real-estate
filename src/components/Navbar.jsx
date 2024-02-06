import React from "react";
import Logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="w-full bg-black bg-opacity-90 text-white ">
      <nav className="flex justify-between items-center px-16 py-1">
        <img src={Logo} alt="Logo" className="w-36" />
        <ul className="flex flex-row justify-between items-center gap-8 text-lg font-semibold">
          <li className="hover:bg-red-500">
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
