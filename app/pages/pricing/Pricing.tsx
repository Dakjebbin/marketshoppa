import React from "react";

const Pricing = () => {
  return (
    <section className="flex items-center justify-center md:w-[65%] w-[90%] m-auto my-10">
      <div>
        <div className="mt-20">
          <h1 className="sm:text-3xl text-2xl font-bold mb-5">Pricing & Transparency</h1>
          <p className="sm:pl-15 pl-10 mb-8 text-gray-400 sm:text-[18px] text-[14px]">
            At MarketShoppa, we believe trust starts with being open about
            costs. No hidden fees, no markup games.
          </p>        </div>
        <div className="flex flex-wrap gap-6">
          <div className="grow flex flex-col gap-5 basis-70">
            <div className="relative bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm overflow-hidden">
              <div className="bg-[#3ea40b0d] h-32 w-32 rounded-bl-full absolute top-0 right-0 -mr-10 -mt-10 transition-transform hover:scale-125"></div>
              <h3 className="sm:text-2xl text-xl font-semibold mb-4">The Market Price</h3>
              <p className="text-sm text-gray-400 mb-4">
                You pay exactly what the shopper pays at the market. If a basket
                of tomatoes is ₦5,200 at the market, that is exactly what you
                pay. We don&apos;t add even 1 kobo to the item cost.
              </p>
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#3ea40b"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-circle-check w-5 h-5"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
                <p className="text-[#3ea40b] text-sm font-semibold">
                  100% Raw Cost Pass-Through
                </p>
              </div>
            </div>
            <div className="relative bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm overflow-hidden">
              <div className="bg-[#f3eb9f4d] h-32 w-32 rounded-bl-full absolute top-0 right-0 -mr-10 -mt-10 transition-transform hover:scale-125"></div>
              <h3 className="sm:text-2xl text-xl font-semibold mb-4">Our service fee</h3>
              <p className="text-sm text-gray-400 mb-4">
                This covers the effort of your personal shopper—navigating the
                market, negotiating, and quality picking. It&apos;s a flat fee
                based on the complexity of your list.
              </p>
              <div className="flex flex-col gap-4">
                <span className="flex items-center justify-between bg-[#e8f5e2] px-3 py-2 rounded-xl font-semibold">
                  <p className="text-sm sm:text-base">Standard List</p>
                  <p className="text-sm sm:text-base">₦1,500</p>
                </span>
                <span className="flex items-center justify-between text-gray-400 font-semibold px-3 bg-[#f9fafb] py-2 rounded-xl">
                  <p className="text-sm sm:text-base">Large/Business List</p>
                  <p className="text-sm sm:text-base">₦3,500+</p>
                </span>
              </div>
            </div>
          </div>
          <div className="grow bg-black text-white basis-70 rounded-[3rem] px-10 py-20">
            <h1 className="sm:text-2xl text-xl font-bold mb-7">The Receipt Guarantee</h1>
            <p className="text-gray-400 sm:text-[18px] text-[15px] font-light">
              For every order, your shopper will provide the physical original
              receipt from the supermarket or a MarketShoppa digital verification
              for open-market sellers who don&apos;t issue receipts.
            </p>

             <div className="mt-9 flex flex-col gap-5">
                <div className="flex items-center gap-3">
                <div className="bg-gray-800 rounded-full px-2 py-2 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-shield-check text-[#3ea40b]"
                      aria-hidden="true"
                    >
                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">No Price Inflation</p>
                    <p className="text-sm text-gray-500 font-light">We audit our shoppers to ensure they aren&apos;t colluding with sellers.</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                <div className="bg-gray-800 rounded-full px-2 py-2 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star text-beige" aria-hidden="true"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-light">If it&apos;s not fresh, we don&apos;t buy it. You approve every substitution.</p>                    <p className="text-sm text-gray-500 font-light">If it&apos;s not fresh, we don&apos;t buy it. You approve every substitution..</p>
                  </div>
                </div>
             </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
