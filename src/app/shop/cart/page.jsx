import { products } from "@/data/products";
import Image from "next/image";
import Link from "next/link";
import { FaTrash } from "react-icons/fa";

const wishlist = () => (
  <div className="container space-y-4">
    {products?.slice(0, 4)?.map((item) => (
      <div
        className="flex flex-col sm:flex-row items-center justify-between gap-6 p-4 border border-gray-200 rounded"
        key={item.id}
      >
        <div className="w-28">
          <Image
            width={0}
            height={0}
            sizes="100vw"
            src={item?.image}
            alt="product 6"
            className="w-full"
          />
        </div>
        <div className="w-1/3">
          <h2 className="text-xl font-medium text-gray-800 uppercase">
            {item?.name}
          </h2>
          <p className="text-sm text-gray-500">
            Availability: <span className="text-green-600">In Stock</span>
          </p>
        </div>
        <div className="text-lg font-semibold text-primary">$320.00 x 2</div>
        <Link
          href="#"
          className="px-6 py-2 text-sm font-medium text-center text-white uppercase transition border rounded bg-primary border-primary hover:bg-transparent hover:text-primary font-roboto"
        >
          Payout
        </Link>

        <div className="text-gray-600 cursor-pointer hover:text-primary">
          <FaTrash />
        </div>
      </div>
    ))}
    <div className="text-right py-8">
      <Link
        href="#"
        className="px-6 py-2 text-sm font-medium text-center text-white uppercase transition border rounded bg-primary border-primary hover:bg-transparent hover:text-primary font-roboto"
      >
        Checkout total
      </Link>
    </div>
  </div>
);

export default wishlist;
