import Image from "next/image";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import MainMenu from "./MainMenu";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header className="py-2 bg-white shadow sticky top-0 md:relative z-20">
      <div className="container flex flex-wrap items-center justify-between gap-2">
        <Link href="/">
          <Image
            width={0}
            height={0}
            sizes="100vw"
            src="/images/logo.png"
            alt="Logo"
            className="w-48 md:w-56 lg:w-64 xl:w-72"
          />
        </Link>
        <div className="flex items-center gap-x-6">
          <SearchBar />
          <Link
            title="Cart"
            href="/shop/cart"
            className="relative text-center text-gray-700 transition hover:text-primary"
          >
            <div className="text-2xl">
              <FaShoppingCart className="mx-auto" />
            </div>
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
