"use client";

import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

export default function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        className="text-gray-700 hover:text-primary text-2xl"
        type="button"
        onClick={() => setIsOpen(true)}
      >
        <FaSearch />
      </button>
      {/* <!-- drawer component --> */}
      <div
        className={`fixed top-0 left-0 z-10 h-screen p-4 w-full transition-transform ${
          isOpen ? "" : "-translate-y-full"
        } bg-white h-28`}
      >
        <button
          onClick={() => setIsOpen(false)}
          type="button"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-2xl p-1.5 absolute bottom-2.5 right-2.5 inline-flex items-center"
        >
          <IoMdClose />
          <span className="sr-only">Close menu</span>
        </button>
        <div className="container">
          <div className="relative w-full max-w-full lg:max-w-screen-2xl flex">
            <span className="absolute text-lg text-gray-400 left-4 top-3">
              <FaSearch />
            </span>
            <input
              type="text"
              name="search"
              id="search"
              className="w-full py-2 pl-12 pr-3 border border-r-0 border-primary rounded-l-md focus:outline-none flex"
              placeholder="write some thing ..."
            />
            <button className="flex px-6 py-2 text-white transition border bg-primary border-primary rounded-r-md hover:bg-transparent hover:text-primary">
              Search
            </button>
          </div>
        </div>
      </div>
      <div
        className={`fixed top-0 left-0 h-screen w-screen bg-black/50 ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>
    </>
  );
}
