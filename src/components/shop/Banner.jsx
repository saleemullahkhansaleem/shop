import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    // <div className="relative bg-center bg-no-repeat bg-cover py-16 overflow-hidden">
    //   <div className="w-full h-full absolute top-0 -z-10">
    //     <Image
    //       src="/images/banner-bg.webp"
    //       width={0}
    //       height={0}
    //       sizes="100vh"
    //       className="w-full h-auto"
    //     />
    //   </div>
    //   <div className="container">
    //     <h1 className="mb-4 text-6xl font-medium text-gray-800 capitalize">
    //       best collection for <br /> Smart Devices
    //     </h1>
    //     <p>
    //       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam{" "}
    //       <br />
    //       accusantium perspiciatis, sapiente magni eos dolorum ex quos dolores
    //       odio
    //     </p>
    //     <div className="mt-12">
    //       <Link
    //         href="#"
    //         className="px-8 py-3 font-medium text-white border rounded-md bg-primary border-primary hover:bg-transparent hover:text-primary"
    //       >
    //         Shop Now
    //       </Link>
    //     </div>
    //   </div>
    // </div>
    <div
      className="bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: "url('/images/banner-bg.webp')" }}
    >
      <div className="container bg-black/40 md:bg-transparent py-4 md:py-32">
        <h1 className="mb-4 text-3xl md:text-6xl font-medium text-white md:text-gray-800 capitalize">
          best collection for <br /> Smart Devices
        </h1>
        <p className="text-sm text-gray-400 md:text-gray-700 md:text-base max-w-72 md:max-w-full">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          accusantium
          <br />
          <span className="hidden md:block">
            perspiciatis, sapiente magni eos dolorum ex quos dolores odio
          </span>
        </p>
        <div className="mt-6 md:mt-12">
          <Link
            href="#"
            className="px-4 py-2 md:px-8 md:py-3 text-sm lg:text-base font-medium text-white border rounded-md bg-primary border-primary hover:bg-transparent hover:text-primary"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
