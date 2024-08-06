import Image from "next/image";

const Features = () => {
  const features = [
    {
      id: 1,
      title: "Free Shipping",
      description: "Order over $200",
      image: "/images/icons/delivery-van.svg",
    },
    {
      id: 2,
      title: "Money Rturns",
      description: "30 days money returs",
      image: "/images/icons/money-back.svg",
    },
    {
      id: 3,
      title: "24/7 Support",
      description: "Customer support",
      image: "/images/icons/service-hours.svg",
    },
  ];
  return (
    <div className="container py-4 md:py-12">
      <div className="grid justify-center lg:w-10/12 gap-2 md:gap-6 mx-auto grid-cols-3">
        {features.map((feature) => (
          <div
            className="flex flex-col md:flex-row items-center justify-between md:justify-center gap-2 md:gap-5 px-2 py-2 md:py-6 border rounded-sm border-primary"
            key={feature.id}
          >
            <Image
              width={0}
              height={0}
              sizes="100vw"
              src={feature.image}
              alt={feature.title}
              className="object-contain w-12 h-12"
            />
            <div className="text-center md:text-left">
              <h4 className="text-lg font-medium capitalize">
                {feature.title}
              </h4>
              <p className="text-sm text-gray-500">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
