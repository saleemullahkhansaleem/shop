"use client";
import ProductCard from "@/components/shop/ProductCard";
import { products } from "@/data/products";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import {
  FaFacebook,
  FaHeart,
  FaInstagram,
  FaShoppingBag,
  FaShoppingCart,
  FaStar,
  FaTwitter,
} from "react-icons/fa";

const productDetail = () => {
  const { productId } = useParams();
  const [quantity, setQuantity] = useState(1);
  const productDetail = products?.find((p) => p.id === +productId);
  return productDetail ? (
    <>
      {/* <!-- product-detail --> */}
      <div className="container grid grid-cols-2 gap-6">
        <div>
          <img
            src={productDetail?.image}
            alt={productDetail?.name}
            className="w-full"
          />
          {/* <div className="grid grid-cols-5 gap-4 mt-4">
            <img
              src="/images/products/product-2.webp"
              alt="product2"
              className="w-full border cursor-pointer border-primary"
            />
            <img
              src="/images/products/product-3.webp"
              alt="product2"
              className="w-full border cursor-pointer"
            />
            <img
              src="/images/products/product-4.webp"
              alt="product2"
              className="w-full border cursor-pointer"
            />
            <img
              src="/images/products/product-5.webp"
              alt="product2"
              className="w-full border cursor-pointer"
            />
            <img
              src="/images/products/product-6.webp"
              alt="product2"
              className="w-full border cursor-pointer"
            />
          </div> */}
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
            <div className="ml-3 text-xs text-gray-500">(150 Reviews)</div>
          </div>
          <div className="space-y-2">
            <p className="space-x-2 font-semibold text-gray-800">
              <span>Availability: </span>
              <span className="text-green-600">In Stock</span>
            </p>
            <p className="space-x-2">
              <span className="font-semibold text-gray-800">Brand: </span>
              <span className="text-gray-600">Apex</span>
            </p>
            <p className="space-x-2">
              <span className="font-semibold text-gray-800">Category: </span>
              <span className="text-gray-600">Sofa</span>
            </p>
            <p className="space-x-2">
              <span className="font-semibold text-gray-800">SKU: </span>
              <span className="text-gray-600">BE45VGRT</span>
            </p>
          </div>
          <div className="flex items-baseline mt-4 mb-1 space-x-2 font-roboto">
            <p className="text-xl font-semibold text-primary">$45.00</p>
            <p className="text-base text-gray-400 line-through">$55.00</p>
          </div>

          {/* <p className="mt-4 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eius
            eum reprehenderit dolore vel mollitia optio consequatur hic
            asperiores inventore suscipit, velit consequuntur, voluptate
            doloremque iure necessitatibus adipisci magnam porro.
          </p> */}

          <div className="pt-4">
            <h3 className="mb-1 text-sm text-gray-800 uppercase">Size</h3>
            <div className="flex items-center gap-2">
              {["XS", "S", "M", "L", "XL"].map((item, index) => (
                <div className="size-selector" key={index}>
                  <input
                    type="radio"
                    name={`size`}
                    id={`size-${item}`}
                    className="hidden"
                  />
                  <label
                    htmlFor={`size-${item}`}
                    className="flex items-center justify-center w-6 h-6 text-xs text-gray-600 border border-gray-200 rounded-sm shadow-sm cursor-pointer"
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
            <Link
              href="#"
              className="flex items-center gap-2 px-8 py-2 font-medium text-gray-600 uppercase transition border border-gray-300 rounded hover:text-primary"
            >
              <FaHeart /> Wishlist
            </Link>
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

      {/* <!-- description --> */}
      {/* <div className="container pb-16">
        <h3 className="pb-3 font-medium text-gray-800 border-b border-gray-200 font-roboto">
          Product details
        </h3>
        <div className="w-3/5 pt-6">
          <div className="text-gray-600">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              necessitatibus deleniti natus dolore cum maiores suscipit optio
              itaque voluptatibus veritatis tempora iste facilis non aut
              sapiente dolor quisquam, ex ab.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
              quae accusantium voluptatem blanditiis sapiente voluptatum. Autem
              ab, dolorum assumenda earum veniam eius illo fugiat possimus illum
              dolor totam, ducimus excepturi.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              quia modi ut expedita! Iure molestiae labore cumque nobis quasi
              fuga, quibusdam rem? Temporibus consectetur corrupti rerum
              veritatis numquam labore amet.
            </p>
          </div>

          <table className="w-full mt-6 text-sm text-left text-gray-600 border-collapse table-auto">
            <tbody>
              <tr>
                <th className="w-40 px-4 py-2 font-medium border border-gray-300">
                  Color
                </th>
                <th className="px-4 py-2 border border-gray-300 ">
                  Blank, Brown, Red
                </th>
              </tr>
              <tr>
                <th className="w-40 px-4 py-2 font-medium border border-gray-300">
                  Material
                </th>
                <th className="px-4 py-2 border border-gray-300 ">Latex</th>
              </tr>
              <tr>
                <th className="w-40 px-4 py-2 font-medium border border-gray-300">
                  Weight
                </th>
                <th className="px-4 py-2 border border-gray-300 ">55kg</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div> */}
      {/* <!-- ./description --> */}

      {/* <!-- related product --> */}
      <div className="container pb-16">
        <h2 className="mb-6 text-2xl font-medium text-gray-800 uppercase">
          Related products
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products?.slice(0, 4)?.map((product) => (
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

export default productDetail;
