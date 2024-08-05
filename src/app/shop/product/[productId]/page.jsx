"use client";
import ProductCard from "@/components/shop/ProductCard";
import { products } from "@/data/products";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import {
  FaFacebook,
  FaHeart,
  FaInstagram,
  FaShoppingBag,
  FaStar,
  FaTwitter,
} from "react-icons/fa";

const ProductDetail = () => {
  const { productId } = useParams();
  const [quantity, setQuantity] = useState(1);
  const productDetail = products?.find((p) => p.id === +productId);
  return productDetail ? (
    <>
      {/* <!-- product-detail --> */}
      <div className="container grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <Image
            width={0}
            height={0}
            sizes="100vw"
            src={productDetail?.image}
            alt={productDetail?.name}
            className="w-full"
          />
        </div>

        <div>
          <h2 className="mb-2 text-3xl font-medium uppercase">
            {productDetail?.name}
          </h2>
          <div className="flex items-center mb-4">
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
              ({productDetail?.reviewCount})
            </div>
          </div>
          <div className="space-y-2">
            <p className="space-x-2 font-semibold text-gray-800">
              <span>Brand: </span>
              <span className="text-green-600">Apple</span>
            </p>
            <p className="space-x-2">
              <span className="font-semibold text-gray-800">Category: </span>
              <span className="text-gray-600">Laptop</span>
            </p>
          </div>
          <div className="flex items-baseline mt-4 mb-1 space-x-2 font-roboto">
            <p className="text-xl font-semibold text-primary">
              $
              {Math.round(
                (productDetail?.price / 100) * (100 - productDetail?.discount)
              )}
              .00
            </p>
            <p className="text-base text-gray-400 line-through">
              ${productDetail?.price}
            </p>
          </div>

          <div className="pt-4">
            <h3 className="mb-1 text-sm text-gray-800 uppercase">RAM</h3>
            <div className="flex items-center gap-2">
              {["4 GB", "8 GB", "16 GB"].map((item, index) => (
                <div className="size-selector" key={index}>
                  <input
                    type="radio"
                    name={`size`}
                    id={`size-${item}`}
                    className="hidden"
                  />
                  <label
                    htmlFor={`size-${item}`}
                    className="flex items-center justify-center h-6 p-4 text-xs text-gray-600 border border-gray-200 rounded-sm shadow-sm cursor-pointer"
                  >
                    {item}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="pt-4">
            <h3 className="mb-1 text-sm text-gray-800 uppercase">
              Screen Size
            </h3>
            <div className="flex items-center gap-2">
              {['12.5"', '13.5"', '14.5"', '15.5"'].map((item, index) => (
                <div className="size-selector" key={index}>
                  <input
                    type="radio"
                    name={`size`}
                    id={`size-${item}`}
                    className="hidden"
                  />
                  <label
                    htmlFor={`size-${item}`}
                    className="flex items-center justify-center h-6 p-4 text-xs text-gray-600 border border-gray-200 rounded-sm shadow-sm cursor-pointer"
                  >
                    {item}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4">
            <h3 className="mb-3 text-xl font-medium text-gray-800 uppercase">
              Color
            </h3>
            <div className="flex items-center gap-2">
              {productDetail?.colors?.map((color, index) => (
                <div className="color-selector" key={index}>
                  <input
                    type="radio"
                    name="color"
                    id={color}
                    className="hidden"
                  />
                  <label
                    htmlFor={color}
                    className="block w-6 h-6 border border-gray-200 rounded-sm shadow-sm cursor-pointer"
                    style={{ backgroundColor: color }}
                  ></label>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <h3 className="mb-1 text-sm text-gray-800 uppercase">Quantity</h3>
            <div className="flex text-gray-600 border border-gray-300 divide-x divide-gray-300 w-max">
              <button
                onClick={() => setQuantity((prv) => (prv > 1 ? prv - 1 : prv))}
                disabled={quantity === 1}
                className="flex items-center justify-center w-8 h-8 text-xl cursor-pointer select-none"
              >
                -
              </button>
              <div className="flex items-center justify-center w-8 h-8 text-base">
                {quantity}
              </div>
              <button
                onClick={() =>
                  setQuantity((prv) =>
                    prv < productDetail?.stock ? prv + 1 : prv
                  )
                }
                disabled={quantity === productDetail?.stock}
                className="flex items-center justify-center w-8 h-8 text-xl cursor-pointer select-none"
              >
                +
              </button>
            </div>
          </div>

          <div className="flex gap-3 pt-5 pb-5 mt-6 border-b border-gray-200">
            <Link
              href="#"
              className="flex items-center gap-2 px-8 py-2 font-medium text-white uppercase transition border rounded bg-primary border-primary hover:bg-transparent hover:text-primary"
            >
              <FaShoppingBag /> Add to cart
            </Link>
            {/* <Link
              href="#"
              className="flex items-center gap-2 px-8 py-2 font-medium text-gray-600 uppercase transition border border-gray-300 rounded hover:text-primary"
            >
              <FaHeart /> Wishlist
            </Link> */}
          </div>

          <div className="flex gap-3 mt-4">
            <Link
              href="#"
              className="flex items-center justify-center w-8 h-8 text-gray-400 border border-gray-300 rounded-full hover:text-gray-500"
            >
              <FaFacebook />
            </Link>
            <Link
              href="#"
              className="flex items-center justify-center w-8 h-8 text-gray-400 border border-gray-300 rounded-full hover:text-gray-500"
            >
              <FaTwitter />
            </Link>
            <Link
              href="#"
              className="flex items-center justify-center w-8 h-8 text-gray-400 border border-gray-300 rounded-full hover:text-gray-500"
            >
              <FaInstagram />
            </Link>
          </div>
        </div>
      </div>
      {/* <!-- ./product-detail --> */}

      {/* <!-- related product --> */}
      <div className="container pb-16">
        <h2 className="mb-6 text-2xl font-medium text-gray-800 uppercase">
          Related products
        </h2>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {products?.slice(0, 6)?.map((product) => (
            <ProductCard key={product?.id} product={product} />
          ))}
        </div>
      </div>
      {/* <!-- ./related product --> */}
    </>
  ) : (
    <div className="text-3xl text-center">No data found!</div>
  );
};

export default ProductDetail;
