import { categories } from "@/data/categories";
import Link from "next/link";

const Categories = () => {
  return (
    <div className="container py-16">
      <h2 className="mb-6 text-2xl font-medium text-gray-800 uppercase">
        shop by category
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {categories.map((category) => (
          <div
            key={category?.id}
            className="relative overflow-hidden rounded-sm group"
          >
            <img
              src={category?.image}
              alt={category?.name + " Category"}
              className="w-full"
            />
            <Link
              href={category?.link}
              className="absolute inset-0 flex items-center justify-center text-xl font-medium text-white transition bg-black bg-opacity-40 font-roboto group-hover:bg-opacity-60"
            >
              {category?.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
