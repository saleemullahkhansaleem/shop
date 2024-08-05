import Image from "next/image";
import Link from "next/link";
import { FaRegHeart, FaSearch, FaStar } from "react-icons/fa";

const ProductCard = ({ product }) => (
  <div className="overflow-hidden bg-white rounded shadow group">
    <div className="relative">
      <Image src={product?.image} alt="product 1" className="w-full" />
      <div className="absolute inset-0 flex items-center justify-center gap-2 transition bg-black opacity-0 bg-opacity-40 group-hover:opacity-100">
        <Link
          href={`/shop/product/${product?.id}`}
          className="flex items-center justify-center h-8 text-lg text-white transition rounded-full w-9 bg-primary hover:bg-gray-800"
          title="view product"
        >
          <FaSearch />
        </Link>
        <Link
          href="#"
          className="flex items-center justify-center h-8 text-lg text-white transition rounded-full w-9 bg-primary hover:bg-gray-800"
          title="add to wishlist"
        >
          <FaRegHeart />
        </Link>
      </div>
    </div>
    <div className="px-4 pt-4 pb-3">
      <Link href="#">
        <h4 className="mb-2 text-xl font-medium text-gray-800 uppercase transition hover:text-primary">
          {product?.name}
        </h4>
      </Link>
      <div className="flex items-baseline mb-1 space-x-2">
        <p className="text-xl font-semibold text-primary">
          ${Math.round((product?.price / 100) * (100 - product?.discount))}.00
        </p>
        {product?.discount && (
          <p className="text-sm text-gray-400 line-through">
            ${product?.price}
          </p>
        )}
      </div>
      <div className="flex items-center">
        <div className="flex gap-1 text-sm text-yellow-400">
          <span>
            <FaStar />
          </span>
          <span>
            <FaStar />
          </span>
          <span>
            <FaStar />
          </span>
          <span>
            <FaStar />
          </span>
          <span>
            <FaStar />
          </span>
        </div>
        <div className="ml-3 text-xs text-gray-500">
          ({product?.reviewCount})
        </div>
      </div>
    </div>
    <Link
      href="#"
      className="block w-full py-1 text-center text-white transition border rounded-b bg-primary border-primary hover:bg-transparent hover:text-primary"
    >
      Add to cart
    </Link>
  </div>
);

export default ProductCard;