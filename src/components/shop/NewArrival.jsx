import { products } from "@/data/products";
import ProductCard from "./ProductCard";

const NewArrival = () => {
  return (
    <div className="container pb-16">
      <h2 className="mb-6 text-2xl font-medium text-gray-800 uppercase">
        top new arrival
      </h2>{" "}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products?.slice(0, 4)?.map((product) => (
          <ProductCard key={product?.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default NewArrival;
