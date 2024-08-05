import Image from "next/image";
import Link from "next/link";

const wishlist = () => (
  <div className="col-span-9 space-y-4">
    <div className="flex items-center justify-between gap-6 p-4 border border-gray-200 rounded">
      <div className="w-28">
        <Image
          width={0}
          height={0}
          sizes="100vw"
          src="/images/products/product-6.webp"
          alt="product 6"
          className="w-full"
        />
      </div>
      <div className="w-1/3">
        <h2 className="text-xl font-medium text-gray-800 uppercase">
          Air Birds
        </h2>
        <p className="text-sm text-gray-500">
          Availability: <span className="text-green-600">In Stock</span>
        </p>
      </div>
      <div className="text-lg font-semibold text-primary">$320.00</div>
      <Link
        href="#"
        className="px-6 py-2 text-sm font-medium text-center text-white uppercase transition border rounded bg-primary border-primary hover:bg-transparent hover:text-primary font-roboto"
      >
        add to cart
      </Link>

      <div className="text-gray-600 cursor-pointer hover:text-primary">
        <i className="fa-solid fa-trash"></i>
      </div>
    </div>

    <div className="flex items-center justify-between gap-6 p-4 border border-gray-200 rounded">
      <div className="w-28">
        <Image
          width={0}
          height={0}
          sizes="100vw"
          src="/images/products/product-5.webp"
          alt="product 6"
          className="w-full"
        />
      </div>
      <div className="w-1/3">
        <h2 className="text-xl font-medium text-gray-800 uppercase">
          Computer
        </h2>
        <p className="text-sm text-gray-500">
          Availability: <span className="text-green-600">In Stock</span>
        </p>
      </div>
      <div className="text-lg font-semibold text-primary">$320.00</div>
      <Link
        href="#"
        className="px-6 py-2 text-sm font-medium text-center text-white uppercase transition border rounded bg-primary border-primary hover:bg-transparent hover:text-primary font-roboto"
      >
        add to cart
      </Link>

      <div className="text-gray-600 cursor-pointer hover:text-primary">
        <i className="fa-solid fa-trash"></i>
      </div>
    </div>

    <div className="flex items-center justify-between gap-6 p-4 border border-gray-200 rounded">
      <div className="w-28">
        <Image
          width={0}
          height={0}
          sizes="100vw"
          src="/images/products/product-3.webp"
          alt="product 6"
          className="w-full"
        />
      </div>
      <div className="w-1/3">
        <h2 className="text-xl font-medium text-gray-800 uppercase">Tablet</h2>
        <p className="text-sm text-gray-500">
          Availability: <span className="text-red-600">Out of Stock</span>
        </p>
      </div>
      <div className="text-lg font-semibold text-primary">$320.00</div>
      <Link
        href="#"
        className="px-6 py-2 text-sm font-medium text-center text-white uppercase transition bg-red-400 border border-red-400 rounded cursor-not-allowed font-roboto"
      >
        add to cart
      </Link>

      <div className="text-gray-600 cursor-pointer hover:text-primary">
        <i className="fa-solid fa-trash"></i>
      </div>
    </div>
  </div>
);

export default wishlist;
