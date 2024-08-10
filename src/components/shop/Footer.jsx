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
  const support = [
    { name: "Home", url: "/" },
    { name: "Shop", url: "/shop" },
    { name: "About Us", url: "/about" },
    { name: "Contact Us", url: "/contact" },
  ];
  return (
    <>
      <footer className="py-8 bg-white border-t border-gray-100">
        <div className="container grid grid-cols-1 ">
          <div className="col-span-1 space-y-4">
            <Image
              width={0}
              height={0}
              sizes="100vw"
              src="/images/logo.png"
              alt="logo"
              className="w-64 mb-8"
            />
            {/* <h1 className="text-3xl font-medium text-black uppercase whitespace-nowrap">
              <span className="text-primary">MY </span>Store
            </h1> */}
            {/* <div className="mr-2">
              <p className="text-gray-500">
                Thank you for choosing Tradelink Connect. We're excited to help
                you find your next laptop!
              </p>
            </div> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold tracking-wider text-gray-500 uppercase">
                Follow Us
              </h3>
              <div className="text-sm mt-4 text-gray-400">
                <div className="flex space-x-5">
                  <Link href="#" className="text-gray-400 hover:text-gray-500">
                    <FaFacebookSquare size={32} />
                  </Link>
                  <Link href="#" className="text-gray-400 hover:text-gray-500">
                    <FaInstagramSquare size={32} />
                  </Link>
                  <Link href="#" className="text-gray-400 hover:text-gray-500">
                    <FaTwitterSquare size={32} />
                  </Link>
                  <Link href="#" className="text-gray-400 hover:text-gray-500">
                    <FaGithubSquare size={32} />
                  </Link>
                </div>
              </div>
            </div>
            <NavLink title="Quick Links" array={support} />
            <div>
              <h3 className="text-sm font-semibold tracking-wider text-gray-500 uppercase">
                About Us
              </h3>
              <div className="text-sm mt-4 text-gray-400">
                Welcome to Tradelink Connect, your trusted online destination
                for high-quality used laptops. We understand that finding
                reliable and affordable technology can be a challenge, which is
                why we are committed to providing a curated selection of
                pre-owned laptops that meet your needs without breaking the
                bank.
              </div>
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
      <h3 className="text-sm font-semibold tracking-wider text-gray-500 uppercase">
        {title}
      </h3>
      <div className="mt-4 space-y-2">
        {array?.map((item, index) => (
          <Link
            key={index}
            href={item?.url}
            className="block text-base text-gray-500 hover:text-gray-900"
          >
            {item?.name}
          </Link>
        ))}
      </div>
    </div>
  );
};
