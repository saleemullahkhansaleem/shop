import { categories } from "@/data/categories";
import PriceRangeSelector from "./PriceRangeSelector";

export default function Filter() {
  const brands = ["Apple", "HP", "Dell", "Samsung", "LG"];
  return (
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
  );
}
