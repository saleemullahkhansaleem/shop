import ProductCard from "@/components/shop/ProductCard";
import { products } from "@/data/products";
import { FaGripVertical, FaList, FaRegHeart } from "react-icons/fa";
import FilterButton from "./components/FilterButton";
import { categories } from "@/data/categories";

const shop = () => {
  const brands = ["Apple", "HP", "Dell", "Samsung", "LG"];
  return (
    <div className="container grid items-start grid-cols-2 gap-6 pt-4 pb-16 md:grid-cols-4">
      <FilterButton />

      <div className="hidden col-span-1 px-4 pb-6 bg-white rounded shadow overflow-hiddenb md:block">
        <div className="space-y-5 divide-y divide-gray-200">
          <div>
            <h3 className="mb-3 text-xl font-medium text-gray-800 uppercase">
              Categories
            </h3>
            <div className="space-y-2">
              {categories?.map((category) => (
                <div className="flex items-center" key={category.id}>
                  <input
                    type="checkbox"
                    name={category?.name}
                    id={category?.name}
                    className="rounded-sm cursor-pointer text-primary focus:ring-0"
                  />
                  <label
                    htmlFor={category?.name}
                    className="ml-3 text-gray-600 cusror-pointer"
                  >
                    {category?.name}
                  </label>
                  <div className="ml-auto text-sm text-gray-600">(15)</div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4">
            <h3 className="mb-3 text-xl font-medium text-gray-800 uppercase">
              Brands
            </h3>
            <div className="space-y-2">
              {brands.map((brand, index) => (
                <div className="flex items-center" key={index}>
                  <input
                    type="checkbox"
                    name={brand}
                    id={brand}
                    className="rounded-sm cursor-pointer text-primary focus:ring-0"
                  />
                  <label
                    htmlFor={brand}
                    className="ml-3 text-gray-600 cusror-pointer"
                  >
                    {brand}
                  </label>
                  <div className="ml-auto text-sm text-gray-600">(15)</div>
                </div>
              ))}
              {/* <div className="flex items-center">
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
              </div> */}
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
        </div>
      </div>
      {/* <!-- products --> */}
      <div className="col-span-3">
        {/* <div className="flex items-center mb-4">
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
      </div> */}

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {products.map((product) => (
            <ProductCard key={product?.id} product={product} />
          ))}
        </div>
      </div>

      {/* <!-- ./products --> */}
    </div>
  );
};

export default shop;
