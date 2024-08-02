import Link from "next/link";
import { FaRegHeart, FaRegUser, FaSearch, FaShoppingBag } from "react-icons/fa";

const Header = () => {
  return (
    <header className="py-4 bg-white shadow-sm">
      <div className="container flex items-center justify-between">
        <Link href="index.html">
          <img src="/images/logo.svg" alt="Logo" className="w-32" />
        </Link>

        <div className="relative flex w-full max-w-xl">
          <span className="absolute text-lg text-gray-400 left-4 top-4">
            <FaSearch />
          </span>
          <input
            type="text"
            name="search"
            id="search"
            className="hidden w-full py-3 pl-12 pr-3 border border-r-0 border-primary rounded-l-md focus:outline-none md:flex"
            placeholder="search"
          />
          <button className="hidden px-8 text-white transition border bg-primary border-primary rounded-r-md hover:bg-transparent hover:text-primary md:flex">
            Search
          </button>
        </div>

        <div className="flex items-center space-x-4">
          <Link
            href="#"
            className="relative text-center text-gray-700 transition hover:text-primary"
          >
            <div className="text-2xl">
              <FaRegHeart className="mx-auto" />
            </div>
            <div className="text-xs leading-3">Wishlist</div>
            <div className="absolute right-0 flex items-center justify-center w-5 h-5 text-xs text-white rounded-full -top-1 bg-primary">
              8
            </div>
          </Link>
          <Link
            href="#"
            className="relative text-center text-gray-700 transition hover:text-primary"
          >
            <div className="text-2xl">
              <FaShoppingBag className="mx-auto" />
            </div>
            <div className="text-xs leading-3">Cart</div>
            <div className="absolute flex items-center justify-center w-5 h-5 text-xs text-white rounded-full -right-3 -top-1 bg-primary">
              2
            </div>
          </Link>
          <Link
            href="#"
            className="relative text-center text-gray-700 transition hover:text-primary"
          >
            <div className="text-2xl">
              <FaRegUser className="mx-auto" />
            </div>
            <div className="text-xs leading-3">Account</div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
