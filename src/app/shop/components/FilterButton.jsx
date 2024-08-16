"use client";

import Link from "next/link";
import { useState } from "react";
import { FaArrowRightLong, FaCircleInfo } from "react-icons/fa6";
import { FiGrid } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import Filter from "./Filter";

const FilterButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="text-center lg:hidden">
        <button
          className="hover:text-primary text-white hover:bg-transparent bg-primary border border-primary focus:ring-4 focus:ring-blue-300 rounded-lg px-5 py-2.5 mr-2 mb-2b focus:outline-none block lg:hidden"
          type="button"
          onClick={() => setIsOpen(true)}
        >
          <FiGrid />
        </button>
      </div>
      {/* <!-- drawer component --> */}
      <div
        className={`fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform ${
          isOpen ? "" : "-translate-x-full"
        } bg-white w-80`}
      >
        <button
          onClick={() => setIsOpen(false)}
          type="button"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-2xl p-1.5 absolute top-2.5 right-2.5 inline-flex items-center"
        >
          <IoMdClose />
          <span className="sr-only">Close menu</span>
        </button>
        <Filter />
        <Link
          onClick={() => setIsOpen(false)}
          href="#"
          className="mt-4 flex items-center px-4 py-2 text-sm font-medium text-center hover:text-primary text-white border border-primary hover:bg-white rounded-lg bg-primary focus:ring-4 focus:ring-gray-300"
        >
          Apply &#160; <FaArrowRightLong />
        </Link>
      </div>
    </>
  );
};

export default FilterButton;
