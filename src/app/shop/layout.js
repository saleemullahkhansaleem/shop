import Link from "next/link";
import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";

const layout = ({ children }) => {
  return (
    <>
      <div className="container flex items-center gap-3 py-4">
        <Link href="/" className="text-base text-primary">
          <FaHouse />
        </Link>
        <span className="text-sm text-gray-400">
          <FaChevronRight />
        </span>
        <p className="font-medium text-gray-600">Shop</p>
      </div>
      {children}
    </>
  );
};

export default layout;
