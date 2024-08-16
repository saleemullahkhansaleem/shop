import ProductCard from "@/components/shop/ProductCard";
import { products } from "@/data/products";
import FilterButton from "./components/FilterButton";
import { categories } from "@/data/categories";
import PriceRangeSelector from "./components/PriceRangeSelector";

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
            </div>
          </div>

          <div className="pt-4">
            <h3 className="mb-3 text-xl font-medium text-gray-800 uppercase">
              Price
            </h3>
            <PriceRangeSelector />
          </div>
        </div>
      </div>
      {/* <!-- products --> */}
      <div className="col-span-3">
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
