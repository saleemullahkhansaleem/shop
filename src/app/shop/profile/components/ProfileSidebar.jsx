import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaAddressCard, FaCreditCard, FaRegHeart } from "react-icons/fa";
import { FaArrowRightFromBracket, FaBoxArchive } from "react-icons/fa6";

const ProfileSidebar = () => (
  <div className="col-span-3">
    <div className="flex items-center gap-4 px-4 py-3 shadow">
      <div className="flex-shrink-0">
        <Image
          src="/images/avatar.png"
          alt="profile"
          className="object-cover p-1 border border-gray-200 rounded-full w-14 h-14"
        />
      </div>
      <div className="flex-grow">
        <p className="text-gray-600">Hello,</p>
        <h4 className="font-medium text-gray-800">John Doe</h4>
      </div>
    </div>

    <div className="p-4 mt-6 space-y-4 text-gray-600 bg-white divide-y divide-gray-200 rounded shadow">
      <div className="pl-8 space-y-1">
        <Link
          href="/shop/profile"
          className="relative block font-medium capitalize transition text-primary"
        >
          <span className="absolute top-0 text-base -left-8">
            <FaAddressCard />
          </span>
          Profile information
        </Link>
        <Link
          href="/shop/profile/account"
          className="relative block capitalize transition hover:text-primary"
        >
          Manage account
        </Link>
        <Link
          href="/shop/profile"
          className="relative block capitalize transition hover:text-primary"
        >
          Manage addresses
        </Link>
        <Link
          href="/shop/profile"
          className="relative block capitalize transition hover:text-primary"
        >
          Change password
        </Link>
      </div>

      <div className="pt-4 pl-8 space-y-1">
        <Link
          href="/shop/profile"
          className="relative block font-medium capitalize transition hover:text-primary"
        >
          <span className="absolute top-0 text-base -left-8">
            <FaBoxArchive />
          </span>
          My order history
        </Link>
        <Link
          href="/shop/profile"
          className="relative block capitalize transition hover:text-primary"
        >
          My returns
        </Link>
        <Link
          href="/shop/profile"
          className="relative block capitalize transition hover:text-primary"
        >
          My Cancellations
        </Link>
        <Link
          href="/shop/profile"
          className="relative block capitalize transition hover:text-primary"
        >
          My reviews
        </Link>
      </div>

      <div className="pt-4 pl-8 space-y-1">
        <Link
          href="/shop/profile"
          className="relative block font-medium capitalize transition hover:text-primary"
        >
          <span className="absolute top-0 text-base -left-8">
            <FaCreditCard />
          </span>
          Payment methods
        </Link>
        <Link
          href="/shop/profile"
          className="relative block capitalize transition hover:text-primary"
        >
          voucher
        </Link>
      </div>

      <div className="pt-4 pl-8 space-y-1">
        <Link
          href="/shop/profile/wishlist"
          className="relative block font-medium capitalize transition hover:text-primary"
        >
          <span className="absolute top-0 text-base -left-8">
            <FaRegHeart />
          </span>
          My wishlist
        </Link>
      </div>

      <div className="pt-4 pl-8 space-y-1">
        <Link
          href="/"
          className="relative block font-medium capitalize transition hover:text-primary"
        >
          <span className="absolute top-0 text-base -left-8">
            <FaArrowRightFromBracket />
          </span>
          Logout
        </Link>
      </div>
    </div>
  </div>
);

export default ProfileSidebar;
