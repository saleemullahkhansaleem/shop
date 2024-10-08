import Banner from "@/components/shop/Banner";
import Categories from "@/components/shop/Categories";
import Features from "@/components/shop/Features";
import NewArrival from "@/components/shop/NewArrival";
import Products from "@/components/shop/Products";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <Banner />
      <Features />
      <Categories />
      <NewArrival />
      <div className="container pb-12">
        <Link href="#">
          <Image
            width={0}
            height={0}
            sizes="100vw"
            src="/images/offer.jpg"
            alt="ads"
            className="w-full"
          />
        </Link>
      </div>
      <Products />
    </main>
  );
}
