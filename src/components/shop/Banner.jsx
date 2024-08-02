import Link from "next/link";

const Banner = () => {
  return (
    <div
      className="bg-center bg-no-repeat bg-cover py-36"
      style={{ backgroundImage: "url('/images/banner-bg.jpg');" }}
    >
      <div className="container">
        <h1 className="mb-4 text-6xl font-medium text-gray-800 capitalize">
          best collection for <br /> home decoration
        </h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam{" "}
          <br />
          accusantium perspiciatis, sapiente magni eos dolorum ex quos dolores
          odio
        </p>
        <div className="mt-12">
          <Link
            href="#"
            className="px-8 py-3 font-medium text-white border rounded-md bg-primary border-primary hover:bg-transparent hover:text-primary"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
