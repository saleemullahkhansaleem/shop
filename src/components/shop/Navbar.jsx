import Link from "next/link";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="container flex">
        <div className="relative items-center hidden px-8 py-4 cursor-pointer bg-primary sm:flex group">
          <span className="text-white">
            <FaBars />
          </span>
          <span className="hidden text-white capitalize ml-0-2 md:block">
            All Categories
          </span>

          {/* <!-- dropdown --> */}
          <div className="absolute left-0 invisible w-48 py-3 transition duration-300 bg-white divide-y divide-gray-300 shadow-md opacity-0 top-full divide-dashed group-hover:opacity-100 group-hover:visible">
            <Link
              href="#"
              className="flex items-center px-6 py-3 transition hover:bg-gray-100"
            >
              <img
                src="/images/icons/sofa.svg"
                alt="sofa"
                className="object-contain w-5 h-5"
              />
              <span className="ml-6 text-sm text-gray-600">Sofa</span>
            </Link>
            <Link
              href="#"
              className="flex items-center px-6 py-3 transition hover:bg-gray-100"
            >
              <img
                src="/images/icons/terrace.svg"
                alt="terrace"
                className="object-contain w-5 h-5"
              />
              <span className="ml-6 text-sm text-gray-600">Terarce</span>
            </Link>
            <Link
              href="#"
              className="flex items-center px-6 py-3 transition hover:bg-gray-100"
            >
              <img
                src="/images/icons/bed.svg"
                alt="bed"
                className="object-contain w-5 h-5"
              />
              <span className="ml-6 text-sm text-gray-600">Bed</span>
            </Link>
            <Link
              href="#"
              className="flex items-center px-6 py-3 transition hover:bg-gray-100"
            >
              <img
                src="/images/icons/office.svg"
                alt="office"
                className="object-contain w-5 h-5"
              />
              <span className="ml-6 text-sm text-gray-600">office</span>
            </Link>
            <Link
              href="#"
              className="flex items-center px-6 py-3 transition hover:bg-gray-100"
            >
              <img
                src="/images/icons/outdoor-cafe.svg"
                alt="outdoor"
                className="object-contain w-5 h-5"
              />
              <span className="ml-6 text-sm text-gray-600">Outdoor</span>
            </Link>
            <Link
              href="#"
              className="flex items-center px-6 py-3 transition hover:bg-gray-100"
            >
              <img
                src="/images/icons/bed-2.svg"
                alt="Mattress"
                className="object-contain w-5 h-5"
              />
              <span className="ml-6 text-sm text-gray-600">Mattress</span>
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-between flex-grow py-5 md:pl-12">
          <div className="flex items-center space-x-6 capitalize">
            <Link
              href="/"
              className="text-gray-200 transition hover:text-white"
            >
              Home
            </Link>
            <Link
              href="/shop"
              className="text-gray-200 transition hover:text-white"
            >
              Shop
            </Link>
            <Link
              href="/about"
              className="text-gray-200 transition hover:text-white"
            >
              About us
            </Link>
            <Link
              href="/contact"
              className="text-gray-200 transition hover:text-white"
            >
              Contact us
            </Link>
          </div>
          <Link
            href="/login"
            className="text-gray-200 transition hover:text-white"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
