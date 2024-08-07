import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  const solutions = ["Marketing", "Analitycs", "Commerce", "Insights"];
  const support = ["Pricing", "Guides", "API Status"];
  return (
    <>
      <footer className="py-12 bg-white border-t border-gray-100">
        <div className="container grid grid-cols-1 ">
          <div className="col-span-1 space-y-4">
            <Image
              width={0}
              height={0}
              sizes="100vw"
              src="/images/logo.png"
              alt="logo"
              className="w-64"
            />
            {/* <h1 className="text-3xl font-medium text-black uppercase whitespace-nowrap">
              <span className="text-primary">MY </span>Store
            </h1> */}
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

          <div className="grid grid-cols-1 md:grid-cols-2 col-span-2 gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
              <NavLink title="Solutions" array={solutions} />
              <NavLink title="Support" array={support} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <NavLink title="Solutions" array={solutions} />
              <NavLink title="Support" array={support} />
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- copyright --> */}
      <div className="py-4 bg-gray-800">
        <div className="container flex flex-col md:flex-row gap-2 items-center justify-between">
          <p className="text-white">
            &copy; Tradelink Connect - All Right Reserved
          </p>
          <div>
            <Image
              width={350}
              height={0}
              sizes="100vw"
              src="/images/methods.png"
              alt="methods"
            />
          </div>
        </div>
      </div>
      {/* <!-- ./copyright --> */}
    </>
  );
};

export default Footer;

const NavLink = ({ title, array }) => {
  return (
    <div>
      <h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase">
        {title}
      </h3>
      <div className="mt-4 space-y-4">
        {array?.map((item, index) => (
          <Link
            key={index}
            href="#"
            className="block text-base text-gray-500 hover:text-gray-900"
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
};
