"use client";

import { GoVerified } from "react-icons/go";
import { FaChevronRight } from "react-icons/fa6";
import Image from "next/image";
import { assets } from "../assets/assests";

const Hero = () => {
  return (
    <div>
      <div className="absolute z-0 right-0 bg-[#f3eb9f4d] md:h-125 h-120 md:w-125 w-55 md:top-26 top-48 rounded-l-full"></div>
      <div className="flex items-center justify-center h-auto">
        <div className="m-auto md:w-[95%] w-[92%] lg:flex-row flex-col flex gap-9 max-w-300 items-center mt-12">
          <div className="relative z-20 flex-1 max-w-150 justify-center flex flex-col">
            <div className="mb-7">
              <p className="mt-7 inline-flex items-center rounded-2xl sm:gap-3 gap-1 bg-[#e8f5e2] text-[#3ea40b] sm:text-sm text-[11px] font-semibold py-2 sm:px-4 px-2">
                {" "}
                <GoVerified size={12} /> Reliable Personal Shoppers
              </p>
            </div>

            <p className="text-4xl md:text-6xl font-bold">
              Fresh From the <br />{" "}
              <span className="italic text-[#3ea40b] decoration-[#F3EB9F] underline">
                Market
              </span>{" "}
              to Your Door.
            </p>

            <p className="mt-7 text-base md:text-xl text-gray-600 max-w-lg leading-relaxed">
              MarketShoppa connects you with expert personal shoppers who navigate
              local markets and supermarkets to find the freshest produce at
              real-time prices.
            </p>

            <div className="flex items-center mt-9 gap-5">
              <button className=" rounded-full cursor-pointer font-semibold transition-all duration-300 flex items-center justify-center gap-1 md:gap-2 bg-[#3ea40b] text-white hover:bg-opacity-90 shadow-lg shadow-green-50 px-4 md:px-8 py-4 text-sm md:text-lg">
                Start Your Shopping <FaChevronRight size={13} />
              </button>
              <button className="px-4 md:px-8 py-4 cursor-pointer rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-1 md:gap-2 text-[#3ea40b] hover:bg-[#e8f5e2] text-sm md:text-base">
                How it works
              </button>
            </div>
          </div>

          <div className="flex-1 relative z-20 rounded-3xl justify-center  items-center">
            <Image
              className="max-w-full shadow-lg shadow-[#c7c7c760] rounded-3xl w-full h-auto rotate-3 hover:rotate-0 duration-500  transition-transform"
              width={1000}
              height={1000}
              src={assets.fruits}
              alt="background"
            ></Image>

            <div className="absolute flex bg-white shadow-md px-4 py-4 gap-3 rounded-2xl animate-bounce duration-300 items-center shadow-[#83828273] bottom-2">
              <div className="bg-[#f3eb9f] rounded-full px-2 py-2 flex items-center">
                {/* <MdOutlineVerifiedUser /> */}

                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check text-[#3ea40b]" aria-hidden="true"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
              </div>
              <div>
                <p className="text-sm font-bold">Trust Verified</p>
                <p className="text-sm text-gray-400">10k+ Orders Delivered</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
