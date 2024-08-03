import ProductCard from "@/components/shop/ProductCard";
import { products } from "@/data/products";
import Link from "next/link";
import {
  FaGripVertical,
  FaList,
  FaRegHeart,
  FaSearch,
  FaStar,
} from "react-icons/fa";
import { FiGrid } from "react-icons/fi";

const shop = () => (
  <div className="container grid items-start grid-cols-2 gap-6 pt-4 pb-16 md:grid-cols-4">
    {/* <!-- sidebar --> */}
    {/* <!-- drawer init and toggle --> */}
    <div className="text-center md:hidden">
      <button
        className="text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 block md:hidden"
        type="button"
        data-drawer-target="drawer-example"
        data-drawer-show="drawer-example"
        aria-controls="drawer-example"
      >
        <FiGrid />
      </button>
    </div>

    {/* <!-- drawer component --> */}
    <div
      id="drawer-example"
      className="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white w-80 dark:bg-gray-800"
      tabindex="-1"
      aria-labelledby="drawer-label"
    >
      <h5
        id="drawer-label"
        className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
      >
        <svg
          className="w-5 h-5 mr-2"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clip-rule="evenodd"
          ></path>
        </svg>
        Info
      </h5>
      <button
        type="button"
        data-drawer-hide="drawer-example"
        aria-controls="drawer-example"
        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
      >
        <svg
          aria-hidden="true"
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span className="sr-only">Close menu</span>
      </button>
      <div className="space-y-5 divide-y divide-gray-200">
        <div>
          <h3 className="mb-3 text-xl font-medium text-gray-800 uppercase">
            Categories
          </h3>
          <div className="space-y-2">
            <div className="flex items-center">
              <input
                type="checkbox"
                name="cat-1"
                id="cat-1"
                className="rounded-sm cursor-pointer text-primary focus:ring-0"
              />
              <label
                htmlFor="cat-1"
                className="ml-3 text-gray-600 cusror-pointer"
              >
                Bedroom
              </label>
              <div className="ml-auto text-sm text-gray-600">(15)</div>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="cat-2"
                id="cat-2"
                className="rounded-sm cursor-pointer text-primary focus:ring-0"
              />
              <label
                htmlFor="cat-2"
                className="ml-3 text-gray-600 cusror-pointer"
              >
                Sofa
              </label>
              <div className="ml-auto text-sm text-gray-600">(9)</div>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="cat-3"
                id="cat-3"
                className="rounded-sm cursor-pointer text-primary focus:ring-0"
              />
              <label
                htmlFor="cat-3"
                className="ml-3 text-gray-600 cusror-pointer"
              >
                Office
              </label>
              <div className="ml-auto text-sm text-gray-600">(21)</div>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="cat-4"
                id="cat-4"
                className="rounded-sm cursor-pointer text-primary focus:ring-0"
              />
              <label
                htmlFor="cat-4"
                className="ml-3 text-gray-600 cusror-pointer"
              >
                Outdoor
              </label>
              <div className="ml-auto text-sm text-gray-600">(10)</div>
            </div>
          </div>
        </div>

        <div className="pt-4">
          <h3 className="mb-3 text-xl font-medium text-gray-800 uppercase">
            Brands
          </h3>
          <div className="space-y-2">
            <div className="flex items-center">
              <input
                type="checkbox"
                name="brand-1"
                id="brand-1"
                className="rounded-sm cursor-pointer text-primary focus:ring-0"
              />
              <label
                htmlFor="brand-1"
                className="ml-3 text-gray-600 cusror-pointer"
              >
                Cooking Color
              </label>
              <div className="ml-auto text-sm text-gray-600">(15)</div>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="brand-2"
                id="brand-2"
                className="rounded-sm cursor-pointer text-primary focus:ring-0"
              />
              <label
                htmlFor="brand-2"
                className="ml-3 text-gray-600 cusror-pointer"
              >
                Magniflex
              </label>
              <div className="ml-auto text-sm text-gray-600">(9)</div>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="brand-3"
                id="brand-3"
                className="rounded-sm cursor-pointer text-primary focus:ring-0"
              />
              <label
                htmlFor="brand-3"
                className="ml-3 text-gray-600 cusror-pointer"
              >
                Ashley
              </label>
              <div className="ml-auto text-sm text-gray-600">(21)</div>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="brand-4"
                id="brand-4"
                className="rounded-sm cursor-pointer text-primary focus:ring-0"
              />
              <label
                htmlFor="brand-4"
                className="ml-3 text-gray-600 cusror-pointer"
              >
                M&D
              </label>
              <div className="ml-auto text-sm text-gray-600">(10)</div>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="brand-5"
                id="brand-5"
                className="rounded-sm cursor-pointer text-primary focus:ring-0"
              />
              <label
                htmlFor="brand-5"
                className="ml-3 text-gray-600 cusror-pointer"
              >
                Olympic
              </label>
              <div className="ml-auto text-sm text-gray-600">(10)</div>
            </div>
          </div>
        </div>

        <div className="pt-4">
          <h3 className="mb-3 text-xl font-medium text-gray-800 uppercase">
            Price
          </h3>
          <div className="flex items-center mt-4">
            <input
              type="text"
              name="min"
              id="min"
              className="w-full px-3 py-1 text-gray-600 border-gray-300 rounded shadow-sm focus:border-primary focus:ring-0"
              placeholder="min"
            />
            <span className="mx-3 text-gray-500">-</span>
            <input
              type="text"
              name="max"
              id="max"
              className="w-full px-3 py-1 text-gray-600 border-gray-300 rounded shadow-sm focus:border-primary focus:ring-0"
              placeholder="max"
            />
          </div>
        </div>

        <div className="pt-4">
          <h3 className="mb-3 text-xl font-medium text-gray-800 uppercase">
            size
          </h3>
          <div className="flex items-center gap-2">
            <div className="size-selector">
              <input type="radio" name="size" id="size-xs" className="hidden" />
              <label
                htmlFor="size-xs"
                className="flex items-center justify-center w-6 h-6 text-xs text-gray-600 border border-gray-200 rounded-sm shadow-sm cursor-pointer"
              >
                XS
              </label>
            </div>
            <div className="size-selector">
              <input type="radio" name="size" id="size-sm" className="hidden" />
              <label
                htmlFor="size-sm"
                className="flex items-center justify-center w-6 h-6 text-xs text-gray-600 border border-gray-200 rounded-sm shadow-sm cursor-pointer"
              >
                S
              </label>
            </div>
            <div className="size-selector">
              <input type="radio" name="size" id="size-m" className="hidden" />
              <label
                htmlFor="size-m"
                className="flex items-center justify-center w-6 h-6 text-xs text-gray-600 border border-gray-200 rounded-sm shadow-sm cursor-pointer"
              >
                M
              </label>
            </div>
            <div className="size-selector">
              <input type="radio" name="size" id="size-l" className="hidden" />
              <label
                htmlFor="size-l"
                className="flex items-center justify-center w-6 h-6 text-xs text-gray-600 border border-gray-200 rounded-sm shadow-sm cursor-pointer"
              >
                L
              </label>
            </div>
            <div className="size-selector">
              <input type="radio" name="size" id="size-xl" className="hidden" />
              <label
                htmlFor="size-xl"
                className="flex items-center justify-center w-6 h-6 text-xs text-gray-600 border border-gray-200 rounded-sm shadow-sm cursor-pointer"
              >
                XL
              </label>
            </div>
          </div>
        </div>

        <div className="pt-4">
          <h3 className="mb-3 text-xl font-medium text-gray-800 uppercase">
            Color
          </h3>
          <div className="flex items-center gap-2">
            <div className="color-selector">
              <input type="radio" name="color" id="red" className="hidden" />
              <label
                htmlFor="red"
                className="block w-6 h-6 border border-gray-200 rounded-sm shadow-sm cursor-pointer"
                style={{ backgroundColor: "#fc3d57" }}
              ></label>
            </div>
            <div className="color-selector">
              <input type="radio" name="color" id="black" className="hidden" />
              <label
                htmlFor="black"
                className="block w-6 h-6 border border-gray-200 rounded-sm shadow-sm cursor-pointer"
                style={{ backgroundColor: "#000" }}
              ></label>
            </div>
            <div className="color-selector">
              <input type="radio" name="color" id="white" className="hidden" />
              <label
                htmlFor="white"
                className="block w-6 h-6 border border-gray-200 rounded-sm shadow-sm cursor-pointer"
                style={{ backgroundColor: "#fff" }}
              ></label>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Link
          href="#"
          className="px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Learn more
        </Link>
        <Link
          href="#"
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Get access{" "}
          <svg
            className="w-4 h-4 ml-2"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </Link>
      </div>
    </div>

    {/* <!-- ./sidebar --> */}
    <div className="hidden col-span-1 px-4 pb-6 bg-white rounded shadow overflow-hiddenb md:block">
      <div className="space-y-5 divide-y divide-gray-200">
        <div>
          <h3 className="mb-3 text-xl font-medium text-gray-800 uppercase">
            Categories
          </h3>
          <div className="space-y-2">
            <div className="flex items-center">
              <input
                type="checkbox"
                name="cat-1"
                id="cat-1"
                className="rounded-sm cursor-pointer text-primary focus:ring-0"
              />
              <label
                htmlFor="cat-1"
                className="ml-3 text-gray-600 cusror-pointer"
              >
                Bedroom
              </label>
              <div className="ml-auto text-sm text-gray-600">(15)</div>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="cat-2"
                id="cat-2"
                className="rounded-sm cursor-pointer text-primary focus:ring-0"
              />
              <label
                htmlFor="cat-2"
                className="ml-3 text-gray-600 cusror-pointer"
              >
                Sofa
              </label>
              <div className="ml-auto text-sm text-gray-600">(9)</div>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="cat-3"
                id="cat-3"
                className="rounded-sm cursor-pointer text-primary focus:ring-0"
              />
              <label
                htmlFor="cat-3"
                className="ml-3 text-gray-600 cusror-pointer"
              >
                Office
              </label>
              <div className="ml-auto text-sm text-gray-600">(21)</div>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="cat-4"
                id="cat-4"
                className="rounded-sm cursor-pointer text-primary focus:ring-0"
              />
              <label
                htmlFor="cat-4"
                className="ml-3 text-gray-600 cusror-pointer"
              >
                Outdoor
              </label>
              <div className="ml-auto text-sm text-gray-600">(10)</div>
            </div>
          </div>
        </div>

        <div className="pt-4">
          <h3 className="mb-3 text-xl font-medium text-gray-800 uppercase">
            Brands
          </h3>
          <div className="space-y-2">
            <div className="flex items-center">
              <input
                type="checkbox"
                name="brand-1"
                id="brand-1"
                className="rounded-sm cursor-pointer text-primary focus:ring-0"
              />
              <label
                htmlFor="brand-1"
                className="ml-3 text-gray-600 cusror-pointer"
              >
                Cooking Color
              </label>
              <div className="ml-auto text-sm text-gray-600">(15)</div>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="brand-2"
                id="brand-2"
                className="rounded-sm cursor-pointer text-primary focus:ring-0"
              />
              <label
                htmlFor="brand-2"
                className="ml-3 text-gray-600 cusror-pointer"
              >
                Magniflex
              </label>
              <div className="ml-auto text-sm text-gray-600">(9)</div>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="brand-3"
                id="brand-3"
                className="rounded-sm cursor-pointer text-primary focus:ring-0"
              />
              <label
                htmlFor="brand-3"
                className="ml-3 text-gray-600 cusror-pointer"
              >
                Ashley
              </label>
              <div className="ml-auto text-sm text-gray-600">(21)</div>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="brand-4"
                id="brand-4"
                className="rounded-sm cursor-pointer text-primary focus:ring-0"
              />
              <label
                htmlFor="brand-4"
                className="ml-3 text-gray-600 cusror-pointer"
              >
                M&D
              </label>
              <div className="ml-auto text-sm text-gray-600">(10)</div>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="brand-5"
                id="brand-5"
                className="rounded-sm cursor-pointer text-primary focus:ring-0"
              />
              <label
                htmlFor="brand-5"
                className="ml-3 text-gray-600 cusror-pointer"
              >
                Olympic
              </label>
              <div className="ml-auto text-sm text-gray-600">(10)</div>
            </div>
          </div>
        </div>

        <div className="pt-4">
          <h3 className="mb-3 text-xl font-medium text-gray-800 uppercase">
            Price
          </h3>
          <div className="flex items-center mt-4">
            <input
              type="text"
              name="min"
              id="min"
              className="w-full px-3 py-1 text-gray-600 border-gray-300 rounded shadow-sm focus:border-primary focus:ring-0"
              placeholder="min"
            />
            <span className="mx-3 text-gray-500">-</span>
            <input
              type="text"
              name="max"
              id="max"
              className="w-full px-3 py-1 text-gray-600 border-gray-300 rounded shadow-sm focus:border-primary focus:ring-0"
              placeholder="max"
            />
          </div>
        </div>

        <div className="pt-4">
          <h3 className="mb-3 text-xl font-medium text-gray-800 uppercase">
            size
          </h3>
          <div className="flex items-center gap-2">
            <div className="size-selector">
              <input type="radio" name="size" id="size-xs" className="hidden" />
              <label
                htmlFor="size-xs"
                className="flex items-center justify-center w-6 h-6 text-xs text-gray-600 border border-gray-200 rounded-sm shadow-sm cursor-pointer"
              >
                XS
              </label>
            </div>
            <div className="size-selector">
              <input type="radio" name="size" id="size-sm" className="hidden" />
              <label
                htmlFor="size-sm"
                className="flex items-center justify-center w-6 h-6 text-xs text-gray-600 border border-gray-200 rounded-sm shadow-sm cursor-pointer"
              >
                S
              </label>
            </div>
            <div className="size-selector">
              <input type="radio" name="size" id="size-m" className="hidden" />
              <label
                htmlFor="size-m"
                className="flex items-center justify-center w-6 h-6 text-xs text-gray-600 border border-gray-200 rounded-sm shadow-sm cursor-pointer"
              >
                M
              </label>
            </div>
            <div className="size-selector">
              <input type="radio" name="size" id="size-l" className="hidden" />
              <label
                htmlFor="size-l"
                className="flex items-center justify-center w-6 h-6 text-xs text-gray-600 border border-gray-200 rounded-sm shadow-sm cursor-pointer"
              >
                L
              </label>
            </div>
            <div className="size-selector">
              <input type="radio" name="size" id="size-xl" className="hidden" />
              <label
                htmlFor="size-xl"
                className="flex items-center justify-center w-6 h-6 text-xs text-gray-600 border border-gray-200 rounded-sm shadow-sm cursor-pointer"
              >
                XL
              </label>
            </div>
          </div>
        </div>

        <div className="pt-4">
          <h3 className="mb-3 text-xl font-medium text-gray-800 uppercase">
            Color
          </h3>
          <div className="flex items-center gap-2">
            <div className="color-selector">
              <input type="radio" name="color" id="red" className="hidden" />
              <label
                htmlFor="red"
                className="block w-6 h-6 border border-gray-200 rounded-sm shadow-sm cursor-pointer"
                style={{ backgroundColor: "#fc3d57" }}
              ></label>
            </div>
            <div className="color-selector">
              <input type="radio" name="color" id="black" className="hidden" />
              <label
                htmlFor="black"
                className="block w-6 h-6 border border-gray-200 rounded-sm shadow-sm cursor-pointer"
                style={{ backgroundColor: "#000" }}
              ></label>
            </div>
            <div className="color-selector">
              <input type="radio" name="color" id="white" className="hidden" />
              <label
                htmlFor="white"
                className="block w-6 h-6 border border-gray-200 rounded-sm shadow-sm cursor-pointer"
                style={{ backgroundColor: "#fff" }}
              ></label>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- products --> */}
    <div className="col-span-3">
      <div className="flex items-center mb-4">
        <select
          name="sort"
          id="sort"
          className="px-4 py-3 text-sm text-gray-600 border-gray-300 rounded shadow-sm w-44 focus:ring-primary focus:border-primary"
        >
          <option value="">Default sorting</option>
          <option value="price-low-to-high">Price low to high</option>
          <option value="price-high-to-low">Price high to low</option>
          <option value="latest">Latest product</option>
        </select>

        <div className="flex gap-2 ml-auto">
          <div className="flex items-center justify-center w-10 text-white border rounded cursor-pointer border-primary h-9 bg-primary">
            <FaGripVertical />
          </div>
          <div className="flex items-center justify-center w-10 text-gray-600 border border-gray-300 rounded cursor-pointer h-9">
            <FaList />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product?.id} product={product} />
        ))}
      </div>
    </div>

    {/* <!-- ./products --> */}
  </div>
);

export default shop;
