import Image from "next/image";
import Link from "next/link";
import { FaHeart, FaRegUser, FaSearch, FaShoppingCart } from "react-icons/fa";
import MainMenu from "./MainMenu";

const Header = () => {
  return (
    <header className="py-4 bg-white shadow-sm">
      <div className="container flex flex-wrap items-center justify-between gap-2">
        <Link href="/" className="order-1">
          {/* <Image
            width={0}
            height={0}
            sizes="100vw"
            src="/images/logo.svg"
            alt="Logo"
            className="w-32"
          /> */}
          <h1 className="text-3xl font-medium text-black uppercase whitespace-nowrap">
            <span className="text-primary">MY </span>Store
          </h1>
        </Link>

        <div className="relative flex w-full max-w-full md:max-w-xs lg:max-w-xl order-3 md:order-2">
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

        <div className="flex items-center gap-x-6 order-2 md:order-3">
          {/* <Link
            title="Wishlist"
            href="/shop/profile/wishlist"
            className="relative text-center text-gray-700 transition hover:text-primary"
          >
            <div className="text-3xl">
              <FaHeart className="mx-auto" />
            </div>
            <div className="text-xs leading-3">Wishlist</div>
            <div className="absolute flex items-center justify-center w-5 h-5 text-xs text-white rounded-full -right-3 -top-2 bg-primary">
              8
            </div>
          </Link> */}
          {/* <Link
            title="Profile"
            href="/shop/profile"
            className="relative text-center text-gray-700 transition hover:text-primary"
          >
            <div className="text-3xl">
              <FaRegUser className="mx-auto" />
            </div>
            <div className="text-xs leading-3">Account</div>
          </Link> */}
          <Link
            title="Check out"
            href="/shop/cart"
            className="relative text-center text-gray-700 transition hover:text-primary"
          >
            <div className="text-2xl">
              <FaShoppingCart className="mx-auto" />
            </div>
            {/* <div className="text-xs leading-3">Cart</div> */}
            <div className="absolute flex items-center justify-center w-5 h-5 text-xs text-white rounded-full -right-3 -top-2 bg-primary">
              2
            </div>
          </Link>
          <MainMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
