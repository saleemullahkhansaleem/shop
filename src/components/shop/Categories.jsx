const Categories = () => {
  return (
    <div className="container py-16">
      <h2 className="mb-6 text-2xl font-medium text-gray-800 uppercase">
        shop by category
      </h2>
      <div className="grid grid-cols-3 gap-3">
        <div className="relative overflow-hidden rounded-sm group">
          <img
            src="/images/category/category-1.jpg"
            alt="category 1"
            className="w-full"
          />
          <a
            href="#"
            className="absolute inset-0 flex items-center justify-center text-xl font-medium text-white transition bg-black bg-opacity-40 font-roboto group-hover:bg-opacity-60"
          >
            Bedroom
          </a>
        </div>
        <div className="relative overflow-hidden rounded-sm group">
          <img
            src="/images/category/category-2.jpg"
            alt="category 1"
            className="w-full"
          />
          <a
            href="#"
            className="absolute inset-0 flex items-center justify-center text-xl font-medium text-white transition bg-black bg-opacity-40 font-roboto group-hover:bg-opacity-60"
          >
            Mattrass
          </a>
        </div>
        <div className="relative overflow-hidden rounded-sm group">
          <img
            src="/images/category/category-3.jpg"
            alt="category 1"
            className="w-full"
          />
          <a
            href="#"
            className="absolute inset-0 flex items-center justify-center text-xl font-medium text-white transition bg-black bg-opacity-40 font-roboto group-hover:bg-opacity-60"
          >
            Outdoor
          </a>
        </div>
        <div className="relative overflow-hidden rounded-sm group">
          <img
            src="/images/category/category-4.jpg"
            alt="category 1"
            className="w-full"
          />
          <a
            href="#"
            className="absolute inset-0 flex items-center justify-center text-xl font-medium text-white transition bg-black bg-opacity-40 font-roboto group-hover:bg-opacity-60"
          >
            Sofa
          </a>
        </div>
        <div className="relative overflow-hidden rounded-sm group">
          <img
            src="/images/category/category-5.jpg"
            alt="category 1"
            className="w-full"
          />
          <a
            href="#"
            className="absolute inset-0 flex items-center justify-center text-xl font-medium text-white transition bg-black bg-opacity-40 font-roboto group-hover:bg-opacity-60"
          >
            Living Room
          </a>
        </div>
        <div className="relative overflow-hidden rounded-sm group">
          <img
            src="/images/category/category-6.jpg"
            alt="category 1"
            className="w-full"
          />
          <a
            href="#"
            className="absolute inset-0 flex items-center justify-center text-xl font-medium text-white transition bg-black bg-opacity-40 font-roboto group-hover:bg-opacity-60"
          >
            Kitchen
          </a>
        </div>
      </div>
    </div>
  );
};

export default Categories;
