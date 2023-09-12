"use client";

import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

const NavLinks = () => {
  const appLinks = ["Home", "About", "Support", "Contact"];
  const [activeLink, setActiveLink] = useState("Explore");

  return (
    <div className="flex flex-row justify-end items-center gap-3">
      <details className="dropdown dropdown-end">
        <summary className="btn text-primary border-2 border-primary rounded-box bg-transparent hover:bg-transparent hover:border-primary hover:text-opacity-75 hover:border-opacity-75 capitalize">
          <div className="flex flex-row justify-between items-center gap-3">
            {activeLink}
            <BsChevronDown />
          </div>
        </summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          {appLinks.map((link, index) => (
            <li key={index}>
              <a onClick={() => setActiveLink(link)}>{link}</a>
            </li>
          ))}

          <li className="flex lg:hidden">
            <a onClick={() => setActiveLink("Signup")}>Signup</a>
          </li>
        </ul>
      </details>
      <button className="hidden lg:flex btn btn-primary w-1/3 rounded-box text-base-100 capitalize">
        Signup
      </button>
    </div>
  );
};

export default NavLinks;
