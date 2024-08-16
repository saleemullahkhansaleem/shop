import ProductCard from "@/components/shop/ProductCard";
import { products } from "@/data/products";
import FilterButton from "./components/FilterButton";
import { categories } from "@/data/categories";
import PriceRangeSelector from "./components/PriceRangeSelector";
import Filter from "./components/Filter";

const shop = () => {

  return (
    <div className="container grid items-start grid-cols-2 gap-6 pt-4 pb-16 md:grid-cols-4">
      <FilterButton />

      <div className="hidden col-span-1 px-4 pb-6 bg-white rounded shadow overflow-hiddenb lg:block">
        <Filter />
      </div>
      {/* <!-- products --> */}
      <div className="col-span-4 lg:col-span-3">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-6">
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
