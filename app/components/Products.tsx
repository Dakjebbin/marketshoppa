import React from "react";
import { assets } from "../assets/assests";
import Image from "next/image";
import { IoIosTimer } from "react-icons/io";
import { FaReceipt } from "react-icons/fa6";

const Products = () => {
  const product = [
    {
      id: 1,
      image: assets.tomatoes,
      title: "Fresh Red Tomatoes",
      description:
        "Firm, juicy, and perfect for stew. Sourced from Creek Road Market.",
    },
    {
      id: 2,
      image: assets.onions,
      title: "Large Red Onions",
      description: "Pungent and fresh, sold by the paint bucket or bag.",
    },
    {
      id: 3,
      image: assets.pepper,
      title: "Fresh Peppers",
      description: "Extra spicy fresh peppers for that authentic Naija flavor.",
    },
  ];

  return (
    <section className="mt-17 w-[94%] m-auto">
      <div>
        <h1 className="text-3xl font-bold mb-4">Market Fresh Favorites</h1>
        <p className="md:text-lg text-base text-gray-700">
          A glimpse of what&apos;s currently in season and ready for your
          shopping list.
        </p>
      </div>
      <div className=" flex justify-end my-6 ">
        <button className="border-2 rounded-4xl border-[#3ea40b] text-nowrap md:text-base text-sm  text-[#3ea40b] font-semibold md:px-4 px-3 py-2 ">
          View All Categories
        </button>
      </div>

      <div className="flex flex-wrap gap-4">
        {product.map((items) => (
          <div
            key={items.id}
            className="relative hover:shadow-2xl hover:shadow-gray-600 grow basis-50 border-2 border-gray-100 shadow-lg rounded-4xl"
          >
            <div className="w-full h-45 ">
              <Image
                className=" w-full h-full rounded-t-4xl object-cover"
                src={items.image}
                alt={items.title}
                width={1000}
                height={1000}
              />
            </div>
            <div className="px-6 py-6">
              <p className="font-semibold md:text-xl text-base">
                {items.title}
              </p>
              <p className="md:text-base text-sm text-gray-700">
                {items.description}
              </p>

              <div className="mt-5 hover:bg-[#3ea40b] hover:text-white text-[#3ea40b] duration-300 cursor-pointer border-2 text-center rounded-4xl border-[#3ea40b]">
                <button className="text-nowrap cursor-pointer md:text-base text-sm font-semibold md:px-4 px-3 py-2 ">
                  + Add to List
                </button>
              </div>
            </div>

            <div className="absolute top-3 left-4 flex gap-1.5 flex-col">
              <div className="flex gap-1 pl-2 rounded-lg items-center bg-[#ffffffe6]">
              <IoIosTimer size={12} className="text-[#3ea40b]" />
                <p className="text-[12px] font-semibold text-[#3ea40b]">Market-Priced</p>
              </div>
              <div className="flex gap-1 px-2 py-0.5 rounded-lg items-center bg-[#3ea40b]">
              <FaReceipt size={12} className="text-[#ffffffe6]" />
                <p className="text-[12px] font-semibold text-[#ffffffe6]">Receipt provided</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
