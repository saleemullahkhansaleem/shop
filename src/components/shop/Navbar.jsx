"use client";

import { categories } from "@/data/categories";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaCar, FaHistory, FaMobile, FaUser } from "react-icons/fa";
import { FaArrowRightFromBracket } from "react-icons/fa6";

const Navbar = () => {
  const isLogin = true;
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
      link: "/orders",
      icon: FaHistory,
    },
    {
      name: "Logout",
      link: "/",
      icon: FaArrowRightFromBracket,
    },
  ];

  const pathName = usePathname();
  return (
    <nav className="bg-gray-800 hidden md:block">
      <div className="container flex">
        <div className="relative items-center hidden px-8 py-3 cursor-pointer bg-primary sm:flex gap-2 group z-10">
          <span className="text-white">
            <FaBars />
          </span>
          <span className="hidden text-white capitalize ml-0-2 md:block">
            All Categories
          </span>
          <div className="absolute left-0 invisible min-full w-max py-3 transition duration-300 bg-white divide-y divide-gray-300 shadow-md opacity-0 top-full divide-dashed group-hover:opacity-100 group-hover:visible">
            {categories?.map((category) => (
              <Link
                key={category?.id}
                href={category?.link}
                className="flex items-center px-6 py-3 transition hover:bg-gray-100"
              >
                <category.icon size={20} className="text-primary" />
                <span className="ml-6 text-sm text-gray-600">
                  {category?.name}
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between flex-grow py-1 md:pl-12">
          <div className="flex items-center space-x-4 capitalize">
            {navLink.map((link, index) => (
              <Link
                key={index}
                href={link.link}
                className={`${
                  pathName === link.link
                    ? "text-primary"
                    : "text-gray-400 transition hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          {!isLogin ? (
            <Link
              href="/login"
              className={`${
                pathName === "/login"
                  ? "text-primary"
                  : "text-gray-400 transition hover:text-white"
              }`}
            >
              Login
            </Link>
          ) : (
            <div className="group relative flex items-center gap-4 pl-4 p-1 shadow hover:bg-gray-700 cursor-pointer rounded-full">
              <div className="flex-grow">
                <h4 className="font-medium text-gray-400">John Doe</h4>
              </div>
              <div className="relative flex-shrink-0 w-8 h-8 rounded-full overflow-hidden">
                <Image
                  fill
                  src="/images/avatar.png"
                  alt="profile"
                  className="object-cover p-1 border border-gray-200 rounded-full"
                />
              </div>
              <div className="absolute z-10 right-0 top-full invisible min-full w-max py-3 transition duration-300 opacity-0 group-hover:opacity-100 group-hover:visible pt-2">
                <div className="bg-white divide-y divide-gray-300 divide-dashed shadow-md">
                  {profileNav?.map((link, index) => (
                    <Link
                      key={index}
                      href={link?.link}
                      className="flex items-center px-6 py-3 transition hover:bg-gray-100"
                    >
                      <link.icon size={20} className="text-primary" />
                      <span className="ml-6 text-sm text-gray-600">
                        {link?.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
