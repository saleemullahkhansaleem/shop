import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="pt-16 pb-12 bg-white border-t border-gray-100">
        <div className="container grid grid-cols-1 ">
          <div className="col-span-1 space-y-4">
            {/* <Image src="/images/logo.svg" alt="logo" className="w-30" /> */}
            <h1 className="text-3xl font-medium text-black uppercase">
              <span className="text-primary">Mr </span>Saleem
            </h1>
            <div className="mr-2">
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                hic?
              </p>
            </div>
            <div className="flex space-x-5">
              <Link href="#" className="text-gray-400 hover:text-gray-500">
                <FaFacebookSquare />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-500">
                <FaInstagramSquare />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-500">
                <FaTwitterSquare />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-500">
                <FaGithubSquare />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 col-span-2 gap-4">
            <div className="grid grid-cols-2 gap-4 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase">
                  Solutions
                </h3>
                <div className="mt-4 space-y-4">
                  <Link
                    href="#"
                    className="block text-base text-gray-500 hover:text-gray-900"
                  >
                    Marketing
                  </Link>
                  <Link
                    href="#"
                    className="block text-base text-gray-500 hover:text-gray-900"
                  >
                    Analitycs
                  </Link>
                  <Link
                    href="#"
                    className="block text-base text-gray-500 hover:text-gray-900"
                  >
                    Commerce
                  </Link>
                  <Link
                    href="#"
                    className="block text-base text-gray-500 hover:text-gray-900"
                  >
                    Insights
                  </Link>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase">
                  Support
                </h3>
                <div className="mt-4 space-y-4">
                  <Link
                    href="#"
                    className="block text-base text-gray-500 hover:text-gray-900"
                  >
                    Pricing
                  </Link>
                  <Link
                    href="#"
                    className="block text-base text-gray-500 hover:text-gray-900"
                  >
                    Guides
                  </Link>
                  <Link
                    href="#"
                    className="block text-base text-gray-500 hover:text-gray-900"
                  >
                    API Status
                  </Link>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase">
                  Solutions
                </h3>
                <div className="mt-4 space-y-4">
                  <Link
                    href="#"
                    className="block text-base text-gray-500 hover:text-gray-900"
                  >
                    Marketing
                  </Link>
                  <Link
                    href="#"
                    className="block text-base text-gray-500 hover:text-gray-900"
                  >
                    Analitycs
                  </Link>
                  <Link
                    href="#"
                    className="block text-base text-gray-500 hover:text-gray-900"
                  >
                    Commerce
                  </Link>
                  <Link
                    href="#"
                    className="block text-base text-gray-500 hover:text-gray-900"
                  >
                    Insights
                  </Link>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase">
                  Support
                </h3>
                <div className="mt-4 space-y-4">
                  <Link
                    href="#"
                    className="block text-base text-gray-500 hover:text-gray-900"
                  >
                    Pricing
                  </Link>
                  <Link
                    href="#"
                    className="block text-base text-gray-500 hover:text-gray-900"
                  >
                    Guides
                  </Link>
                  <Link
                    href="#"
                    className="block text-base text-gray-500 hover:text-gray-900"
                  >
                    API Status
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- copyright --> */}
      <div className="py-4 bg-gray-800">
        <div className="container flex items-center justify-between">
          <p className="text-white">&copy; Mr Saleem - All Right Reserved</p>
          <div>
            <Image src="/images/methods.png" alt="methods" className="h-5" />
          </div>
        </div>
      </div>
      {/* <!-- ./copyright --> */}
    </>
  );
};

export default Footer;
