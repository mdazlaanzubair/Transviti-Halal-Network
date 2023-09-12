"use client";

import { FiSearch } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { BsChevronDown } from "react-icons/bs";
import { useState } from "react";

const Searchbar = () => {
  const countries = ["Canada", "Australia", "America", "England"];
  const [countrySelected, setCountrySelected] = useState(countries[0]);

  return (
    <div className="flex flex-row w-full lg:w-1/2 lg:mx-auto items-center gap-3 bg-base-200 border border-base-300 border-opacity-60 rounded-full">
      <span className="ml-5 mr-2 text-base-content opacity-60 text-lg font-medium">
        <FiSearch />
      </span>
      <input
        type="text"
        className="my-2 placeholder-base-content w-3/4 opacity-60 text-lg font-medium bg-transparent border-none focus:outline-none"
        placeholder="Search"
      />
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost rounded-full">
          <div className="flex flex-row gap-3 justify-between items-center">
            <GrLocation />
            {countrySelected}
            <BsChevronDown />
          </div>
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          {countries.map((country, index) => (
            <li key={index}>
              <a onClick={() => setCountrySelected(country)}>{country}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Searchbar;
