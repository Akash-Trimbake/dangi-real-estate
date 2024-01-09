import React from "react";
import Logo from "../assets/logo.png";
import Twitter from "../assets/twitter.svg";
import Facebook from "../assets/facebook.svg";
import Instagram from "../assets/instagram.svg";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-row gap-48 items-center p-8 bg-gray-800 text-gray-200">
        <div>
          <img src={Logo} alt="Dangi Reality International" />
        </div>
        <div>
          <div className="flex flex-row gap-16">
            <div>
              <p className="text-2xl font-semibold mb-4">Contacts</p>
              <p className="text-sm my-1">617-642-6799</p>
              <p className="text-sm my-1">info@dangirealtygroup.com</p>
            </div>
            <div>
              <p className="text-2xl font-semibold mb-4">Address</p>
              <p className="text-sm my-1">2 Doonan Street,</p>
              <p className="text-sm my-1">Medford, MA, 02155 USA</p>
            </div>
          </div>

          <span className="flex flex-row gap-4 mt-4">
            <img src={Twitter} alt="." />
            <img src={Facebook} alt="." />
            <img src={Instagram} alt="." />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
