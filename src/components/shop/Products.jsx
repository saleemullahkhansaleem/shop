import { products } from "@/data/products";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <div className="container pb-12">
      <h2 className="mb-6 text-2xl font-medium text-gray-800 uppercase">
        recomended for you
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {products?.map((product) => (
          <ProductCard key={product?.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
