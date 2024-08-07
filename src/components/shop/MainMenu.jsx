"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaBars, FaSearch, FaUser } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const MainMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();
  const isLogedIn = true;
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
  const profileNav = [
    {
      name: "Profile",
      link: "/profile",
      icon: FaUser,
    },
    {
      name: "Orders",
      link: "/profile/orders",
      icon: FaUser,
    },
    // {
    //   name: "Logout",
    //   link: "/",
    //   icon: FaArrowRightFromBracket,
    // },
  ];
  return (
    <>
      <div className="text-center md:hidden">
        <button
          className="hover:text-primary text-gray-700 text-2xl focus:ring-2 focus:ring-gray-400 rounded-lg p-2 focus:outline-none block md:hidden"
          type="button"
          onClick={() => setIsOpen(true)}
        >
          <FaBars />
        </button>
      </div>
      {/*  drawer component  */}
      <div
        className={`fixed top-0 right-0 z-40 h-screen overflow-y-auto transition-transform shadow-xl ${
          isOpen ? "" : "translate-x-full"
        } bg-white w-80 p-2`}
      >
        <button
          onClick={() => setIsOpen(false)}
          type="button"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-2xl p-1.5 absolute top-2.5 right-2.5 inline-flex items-center"
        >
          <IoMdClose />
          <span className="sr-only">Close menu</span>
        </button>
        <div className="divide-y divide-gray-200 mb-4 flex flex-col justify-around h-full">
          <div className="space-y-3 divide-y divide-gray-200">
            {/* search bar */}

            <div className="relative flex w-full max-w-full mb-4">
              <input
                type="text"
                name="search"
                id="search"
                className="w-full py-2 pr-3 border border-r-0 border-primary rounded-l-md focus:outline-none flex"
                placeholder="Search"
              />
              <button className="flex px-4 py-2 text-white text-xl transition border bg-primary border-primary rounded-r-md hover:bg-transparent hover:text-primary">
                <FaSearch />
              </button>
            </div>
            {/* !search bar */}

            {isLogedIn && (
              <div className="pt-2">
                {profileNav.map((link, index) => (
                  <div
                    key={index}
                    className={`${
                      pathName === link.link
                        ? "text-white bg-primary"
                        : "text-gray-600 hover:bg-gray-100"
                    } space-y-2 py-2 px-4`}
                  >
                    <Link
                      className="w-full h-full block"
                      href={link.link}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </div>
                ))}
              </div>
            )}
            <div className="pt-2">
              {navLink.map((link, index) => (
                <div
                  key={index}
                  className={`${
                    pathName === link.link
                      ? "text-white bg-primary"
                      : "text-gray-600 hover:bg-gray-100"
                  } space-y-2 py-2 px-4`}
                >
                  <Link
                    className="w-full h-full block"
                    href={link.link}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          {!isLogedIn ? (
            <div
              className={`${
                pathName === "/login"
                  ? "text-white bg-primary"
                  : "text-gray-600"
              } space-y-2 py-2 px-4`}
            >
              <Link
                className="w-full h-full block"
                href="/login"
                onClick={() => setIsOpen(false)}
              >
                Login / Register
              </Link>
            </div>
          ) : (
            <div
              className={`${
                pathName === "/logout"
                  ? "text-white bg-primary"
                  : "text-gray-600"
              } space-y-2 py-2 px-4`}
            >
              <Link
                className="w-full h-full block"
                href="/logout"
                onClick={() => setIsOpen(false)}
              >
                Logout
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MainMenu;
