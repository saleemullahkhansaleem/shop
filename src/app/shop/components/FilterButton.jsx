"use client";

import Link from "next/link";
import { useState } from "react";
import { FaArrowRightLong, FaCircleInfo } from "react-icons/fa6";
import { FiGrid } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

const FilterButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="text-center md:hidden">
        <button
          className="hover:text-primary text-white hover:bg-transparent bg-primary border border-primary focus:ring-4 focus:ring-blue-300 rounded-lg px-5 py-2.5 mr-2 mb-2b focus:outline-none block md:hidden"
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
        <h5
          id="drawer-label"
          className="inline-flex items-center mb-4 text-base font-semibold text-gray-500"
        >
          <FaCircleInfo className="text-lg" />
          &#160;Info
        </h5>
        <button
          onClick={() => setIsOpen(false)}
          type="button"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-2xl p-1.5 absolute top-2.5 right-2.5 inline-flex items-center"
        >
          <IoMdClose />
          <span className="sr-only">Close menu</span>
        </button>
        <div className="space-y-5 divide-y divide-gray-200 mb-4">
          <div>
            <h3 className="mb-3 text-xl font-medium text-gray-800 uppercase">
              Categories
            </h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="cat-1"
                  id="cat-1"
                  className="rounded-sm cursor-pointer text-primary focus:ring-0"
                />
                <label
                  htmlFor="cat-1"
                  className="ml-3 text-gray-600 cusror-pointer"
                >
                  Bedroom
                </label>
                <div className="ml-auto text-sm text-gray-600">(15)</div>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="cat-2"
                  id="cat-2"
                  className="rounded-sm cursor-pointer text-primary focus:ring-0"
                />
                <label
                  htmlFor="cat-2"
                  className="ml-3 text-gray-600 cusror-pointer"
                >
                  Sofa
                </label>
                <div className="ml-auto text-sm text-gray-600">(9)</div>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="cat-3"
                  id="cat-3"
                  className="rounded-sm cursor-pointer text-primary focus:ring-0"
                />
                <label
                  htmlFor="cat-3"
                  className="ml-3 text-gray-600 cusror-pointer"
                >
                  Office
                </label>
                <div className="ml-auto text-sm text-gray-600">(21)</div>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="cat-4"
                  id="cat-4"
                  className="rounded-sm cursor-pointer text-primary focus:ring-0"
                />
                <label
                  htmlFor="cat-4"
                  className="ml-3 text-gray-600 cusror-pointer"
                >
                  Outdoor
                </label>
                <div className="ml-auto text-sm text-gray-600">(10)</div>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <h3 className="mb-3 text-xl font-medium text-gray-800 uppercase">
              Brands
            </h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="brand-1"
                  id="brand-1"
                  className="rounded-sm cursor-pointer text-primary focus:ring-0"
                />
                <label
                  htmlFor="brand-1"
                  className="ml-3 text-gray-600 cusror-pointer"
                >
                  Cooking Color
                </label>
                <div className="ml-auto text-sm text-gray-600">(15)</div>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="brand-2"
                  id="brand-2"
                  className="rounded-sm cursor-pointer text-primary focus:ring-0"
                />
                <label
                  htmlFor="brand-2"
                  className="ml-3 text-gray-600 cusror-pointer"
                >
                  Magniflex
                </label>
                <div className="ml-auto text-sm text-gray-600">(9)</div>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="brand-3"
                  id="brand-3"
                  className="rounded-sm cursor-pointer text-primary focus:ring-0"
                />
                <label
                  htmlFor="brand-3"
                  className="ml-3 text-gray-600 cusror-pointer"
                >
                  Ashley
                </label>
                <div className="ml-auto text-sm text-gray-600">(21)</div>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="brand-4"
                  id="brand-4"
                  className="rounded-sm cursor-pointer text-primary focus:ring-0"
                />
                <label
                  htmlFor="brand-4"
                  className="ml-3 text-gray-600 cusror-pointer"
                >
                  M&D
                </label>
                <div className="ml-auto text-sm text-gray-600">(10)</div>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="brand-5"
                  id="brand-5"
                  className="rounded-sm cursor-pointer text-primary focus:ring-0"
                />
                <label
                  htmlFor="brand-5"
                  className="ml-3 text-gray-600 cusror-pointer"
                >
                  Olympic
                </label>
                <div className="ml-auto text-sm text-gray-600">(10)</div>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <h3 className="mb-3 text-xl font-medium text-gray-800 uppercase">
              Price
            </h3>
            <div className="flex items-center mt-4">
              <input
                type="text"
                name="min"
                id="min"
                className="w-full px-3 py-1 text-gray-600 border-gray-300 rounded shadow-sm focus:border-primary focus:ring-0"
                placeholder="min"
              />
              <span className="mx-3 text-gray-500">-</span>
              <input
                type="text"
                name="max"
                id="max"
                className="w-full px-3 py-1 text-gray-600 border-gray-300 rounded shadow-sm focus:border-primary focus:ring-0"
                placeholder="max"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Link
            onClick={() => setIsOpen(false)}
            href="#"
            className="px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
          >
            close
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            href="#"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"
          >
            Apply &#160; <FaArrowRightLong />
          </Link>
        </div>
      </div>
    </>
  );
};

export default FilterButton;
