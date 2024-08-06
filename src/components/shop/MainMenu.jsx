"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const MainMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();
  const navLink = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Shop",
      link: "/shop",
    },
    {
      name: "About us",
      link: "/about",
    },
    {
      name: "Contact us",
      link: "/contact",
    },
  ];
  return (
    <>
      <div className="text-center md:hidden">
        <button
          className="hover:text-primary text-white hover:bg-transparent bg-primary border border-primary focus:ring-4 focus:ring-blue-300 rounded-lg p-2 mr-2 mb-2b focus:outline-none block md:hidden"
          type="button"
          onClick={() => setIsOpen(true)}
        >
          <FaBars />
        </button>
      </div>
      {/* <!-- drawer component --> */}
      <div
        className={`fixed top-0 right-0 z-40 h-screen overflow-y-auto transition-transform shadow-xl ${
          isOpen ? "" : "translate-x-full"
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
        <div className="space-y-5 divide-y divide-gray-200 mb-4 flex flex-col justify-around h-full">
          <div className="mt-12">
            {navLink.map((link, index) => (
              <div
                key={index}
                className={`${
                  pathName === link.link
                    ? "text-white bg-primary"
                    : "text-gray-600"
                } space-y-2 py-2 px-4`}
              >
                <Link href={link.link}>{link.name}</Link>
              </div>
            ))}
          </div>
          <div
            className={`${
              pathName === "/login" ? "text-white bg-primary" : "text-gray-600"
            } space-y-2 py-2 px-4`}
          >
            <Link href="/login">Login / Register</Link>
          </div>
          {/* <div>
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
          </div> */}
        </div>
      </div>
    </>
  );
};

export default MainMenu;