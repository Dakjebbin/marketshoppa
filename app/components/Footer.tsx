import Link from "next/link";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black mt-10">
      <div className="w-[90%] text-gray-400 m-auto py-20 flex flex-wrap gap-12">
        <div className="basis-50 grow">
          <Link href="/" className="flex gap-2 items-center cursor-pointer">
            <div className="bg-[#3ea40b] fill-white inline-flex p-2 rounded-xl hover:rotate-6 duration-150 ease-in">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
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

            <p className="font-bold text-white text-xl">MarketShoppa</p>
          </Link>

          <p className="my-5">
            Empowering household shoppers with access to fresh, high-quality
            open market items without the stress
          </p>

          <div className="flex gap-2">
            <span className="bg-[#1f2937] flex h-8 w-8 items-center justify-center rounded-full">
              <FaFacebookF size={16} className="text-white" />
            </span>

            <span className="bg-[#1f2937] flex h-8 w-8 items-center justify-center rounded-full">
              <FaInstagram size={16} className="text-white" />
            </span>

            <span className="bg-[#1f2937] flex h-8 w-8 items-center justify-center rounded-full">
              <FaXTwitter size={16} className="text-white" />
            </span>
          </div>
        </div>

        <div className="basis-50 grow">
          <p className="text-white font-semibold text-[18px] mb-7">Company</p>
          <nav className="flex flex-col gap-5 ">
            <a className="hover:text-[#3ea40b]" href="#">Our Story</a>
            <a href="#">How it Works</a>
            <a href="#">Transparency</a>
            <a href="#">Join as a Shopper</a>
          </nav>
        </div>

        <div className="basis-50 grow">
          <p className="text-white font-semibold text-[18px] mb-7">
            Categories
          </p>
          <nav className="flex flex-col gap-5">
            <a href="#">Open Market Produce</a>
            <a href="#">Supermarket Groceries</a>
            <a href="#">Household Essentials</a>
            <a href="#">Specialty/Seasonings</a>
          </nav>
        </div>

        <div className="basis-50 grow">
          <p className="text-white font-semibold text-[18px] mb-7">Support</p>
          <nav className="flex flex-col gap-5 [&_a]:hover:text-[#3ea40b]">
            <a href="#">Help Center</a>
            <a href="#">Contact Us</a>
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
          </nav>
        </div>

        <hr className="w-full border my-3 border-gray-400" />

        <div className="flex sm:flex-row gap-3 flex-col items-center justify-between w-full">
          <div>
            <p className="text-sm">
              2025 MarketShoppa Technologies Limited. All rights reserved.
            </p>
          </div>

          <div>
            <p className="text-sm">
              Made with <span className="text-red-600">❤</span> for Nigeria
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
