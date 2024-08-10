import Link from "next/link";

const Banner = () => {
  return (
    <div
      className="bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: "url('/images/banner-bg.webp')" }}
    >
      <div className=" bg-black/40 lg:bg-transparent">
        <div className="container py-4 md:py-8 lg:py-16">
          <h1 className="mb-4 text-3xl md:text-6xl font-medium text-white lg:text-gray-800 capitalize">
            best collection <br /> for Laptops
          </h1>
          <p className="text-sm text-gray-400 lg:text-gray-700 md:text-base max-w-72 md:max-w-full">
            Discover High-Quality, Affordable Used Laptops - Trusted, Tested,
            and Ready for You!
            <br />
            <span className="hidden md:block">
              Unlock unbeatable value with our top-quality used laptops.
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
    </div>
  );
};

export default Banner;
