import React from "react";
import { IoSearch } from "react-icons/io5";
import { LuMessageSquare } from "react-icons/lu";
import { TbTruckDelivery } from "react-icons/tb";

const Howitworks = () => {
  return (
    <main>
      <section className="pb-20">
        <div className="bg-[#3ea40b] py-24 m-auto rounded-b-[90px] w-full">
          <div className="md:w-[50%] w-[80%] text-center m-auto flex items-center justify-center flex-col ">
            <h1 className="text-white sm:text-[39px] text-[33px] leading-10 font-bold">
              Shopping with MarketMate is like being there yourself.
            </h1>
            <p className="sm:text-xl text-lg text-white opacity-70 mt-5">
              Traditional shopping apps use fixed prices that don&apos;t match
              reality. We use a dynamic, shopper-led model that ensures you pay
              local prices.
            </p>
          </div>

        </div>
        
        <div className="mx-auto -mt-15 flex justify-center w-[90%] flex-wrap gap-5">
            <div className="basis-50 grow bg-white rounded-3xl shadow-xl shadow-[#333333] border border-gray-50 hover:bg-[#f3eb9f] transition-colors duration-500 overflow-hidden p-8 relative">
              <div className="absolute -top-4 right-0">
                <p className="text-6xl font-bold opacity-20">01</p>
              </div>

              <div className="flex gap-2 items-center cursor-pointer">
                <div className="bg-[#3ea40b1f]  inline-flex p-3 rounded-xl hover:rotate-6 duration-150 ease-in">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#3ea40b"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-shopping-bag text-black w-6 h-6"
                    aria-hidden="true"
                  >
                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                    <path d="M3.103 6.034h17.794"></path>
                    <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
                  </svg>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-xl my-5">Create Your List</h3>
                <p className="text-gray-600">
                  List exactly what you need. Be specific: &apos;3kg of small
                  onions&apos; or &apos;ripened plantains&apos;.
                </p>
              </div>
            </div>

            <div className="basis-50 grow bg-white rounded-3xl shadow-xl shadow-[#333333] border border-gray-50 hover:bg-[#f3eb9f] transition-colors duration-500 overflow-hidden p-8 relative">
              <div className="absolute -top-4 right-0">
                <p className="text-6xl font-bold opacity-20">02</p>
              </div>

              <div className="flex gap-2 items-center cursor-pointer">
                <div className="bg-[#3ea40b1f]  inline-flex p-3 rounded-xl hover:rotate-6 duration-150 ease-in">
                <IoSearch className="text-[#3ea40b]" size={24} />
                </div>
              </div>

              <div>
                <h3 className="font-bold text-xl my-5">Expert Shopping</h3>
                <p className="text-gray-600">
                A personal shopper hits the market. They find the best quality and negotiate prices for you.
                </p>
              </div>
            </div>

            <div className="basis-50 grow bg-white rounded-3xl shadow-xl shadow-[#333333] border border-gray-50 hover:bg-[#f3eb9f] transition-colors duration-500 overflow-hidden p-8 relative">
              <div className="absolute -top-4 right-0">
                <p className="text-6xl font-bold opacity-20">03</p>
              </div>

              <div className="flex gap-2 items-center cursor-pointer">
                <div className="bg-[#3ea40b1f]  inline-flex p-3 rounded-xl hover:rotate-6 duration-150 ease-in">
                <LuMessageSquare className="text-[#3ea40b]" size={24}/>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-xl my-5">Approve Changes</h3>
                <p className="text-gray-600">
                If an item is unavailable or prices changed drastically, your shopper chats with you for a live approval.
                </p>
              </div>
            </div>

            <div className="basis-50 grow bg-white rounded-3xl shadow-xl shadow-[#333333] border border-gray-50 hover:bg-[#f3eb9f] transition-colors duration-500 overflow-hidden p-8 relative">
              <div className="absolute -top-4 right-0">
                <p className="text-6xl font-bold opacity-20">04</p>
              </div>

              <div className="flex gap-2 items-center cursor-pointer">
                <div className="bg-[#3ea40b1f]  inline-flex p-3 rounded-xl hover:rotate-6 duration-150 ease-in">
                <TbTruckDelivery className="text-[#3ea40b]" size={24}/>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-xl my-5">Doorstep Delivery</h3>
                <p className="text-gray-600">
                Get your items and the original physical receipt. You pay the final amount based on the receipt.
                </p>
              </div>
            </div>
          </div>
      </section>
    </main>
  );
};

export default Howitworks;
