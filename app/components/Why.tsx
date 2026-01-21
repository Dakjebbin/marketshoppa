import { RiVerifiedBadgeLine } from "react-icons/ri";

const Why = () => {
  return (
    <section className="w-[92%] m-auto bg-black max-w-300 text-white mt-20 rounded-4xl sm:px-14 px-10 py-12 flex lg:flex-row flex-col gap-14">
      <div className="max-w-120">
        <p className="text-3xl font-bold">Why MarketShoppa?</p>
        <p className="text-lg mt-5 text-gray-300 leading-6">
          We know traditional e-commerce doesn&apos;t work for the open market.
          Prices change every morning, and quality requires a keen eye.
          MarketShoppa bridges that gap.
        </p>
        <div className="flex flex-col gap-3 mt-5">
          <div className="flex items-center gap-3">
            <span className="bg-[#3ea40b] md:px-1 px-0.5 md:py-1 py-0.5 rounded-full flex items-center">
              <RiVerifiedBadgeLine />
            </span>
            <p className="md:text-base text-sm">
              Personalized shopping at local market rates
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="bg-[#3ea40b] md:px-1 px-0.5 md:py-1 py-0.5 rounded-full flex items-center">
              <RiVerifiedBadgeLine />
            </span>

            <p className="md:text-base text-sm">
              Fresh-pick guarantee or we replace it
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="bg-[#3ea40b] md:px-1 px-0.5 md:py-1 py-0.5 rounded-full flex items-center">
              <RiVerifiedBadgeLine />
            </span>
            <p className="md:text-base text-sm">
              Direct communication with your shopper
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="bg-[#3ea40b] md:px-1 px-0.5 md:py-1 py-0.5 rounded-full flex items-center">
              <RiVerifiedBadgeLine />
            </span>
            <p className="md:text-base text-sm">
              Full transparency with original receipts
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex md:gap-6 gap-3 items-center">
          <div className="bg-gray-800 md:pl-8 pl-5 md:pr-24 pr-16 pt-5 md:pb-12 pb-8 rounded-3xl">
            <p className="md:text-3xl text-2xl mb-2 text-[#3ea40b] font-semibold">0%</p>
            <p className="md:text-sm text-[12px] text-gray-500">HIDDEN MARKUPS</p>
          </div>
          <div className="bg-gray-800 pl-8 md:pr-20 pr-14 flex flex-col md:py-6 py-4 rounded-3xl">
            <p className="md:text-3xl text-2xl mb-2 text-[#f3eb9f] font-semibold">45m</p>
            <p className="md:text-sm text-[12px] text-gray-500">AVG DELIVERY</p>
          </div>
        </div>

        <div className="flex md:gap-6 gap-3 items-center">
          <div className="bg-gray-800 md:pl-8 pl-5 md:pr-24 pr-14 pt-5 md:pb-12 pb-8 rounded-3xl">
            <p className="md:text-3xl text-2xl mb-2 font-semibold">2.5K</p>
            <p className="text-sm text-gray-500">PERSONAL SHOPPERS</p>
          </div>
          <div className="bg-gray-800 pl-8 md:pr-20 pr-10 flex flex-col md:py-6 py-4 rounded-3xl">
            <p className="md:text-3xl text-2xl mb-2 text-[#3ea40b] font-semibold">100%</p>
            <p className="md:text-sm text-[12px] text-gray-500">RECEIPT ACCURACY</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
