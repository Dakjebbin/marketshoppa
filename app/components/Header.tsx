"use client";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={`sticky top-0 z-50 transition-all duration-300
${
  isScrolled
    ? "bg-white/30 backdrop-blur-sm shadow-md"
    : "bg-white/10 backdrop-blur-lg"
}`}
    >
      <header className="flex px-8 py-5 items-center justify-between">
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

          <p className="font-bold text-xl">MarketShoppa</p>
        </Link>
        <nav className="md:flex hidden gap-6 items-center">
          <Link
            href="/pages/howitworks"
            className="font-semibold text-[#4b5563] hover:text-[#3ea40b]"
          >
            How it Works
          </Link>
          <a
            className="font-semibold text-[#4b5563] hover:text-[#3ea40b]"
            href="#"
          >
            Browse
          </a>
          <Link
            className="font-semibold text-[#4b5563] hover:text-[#3ea40b]"
            href="/pages/pricing"
          >
            Pricing
          </Link>
          <Link
            className="font-semibold text-[#4b5563] hover:text-[#3ea40b]"
           href="/pages/aboutUs"
          >
            About
          </Link>

          <button className="bg-[#3ea40b] text-white px-5 py-2 rounded-3xl font-semibold">
            Start Shopping
          </button>
        </nav>
        {/* mobile screen */}
        <nav className="md:hidden flex">
          {navActive ? (
            <button onClick={toggleNav}>
              <IoCloseSharp className="cursor-pointer" size={27} />
            </button>
          ) : (
            <button onClick={toggleNav}>
              <RxHamburgerMenu className="cursor-pointer" size={25} />
            </button>
          )}

          <div
            className={`absolute bg-white top-full left-0 right-0 overflow-hidden transition-all duration-300 ease-in-out ${
              navActive
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 -translate-y-4 pointer-events-none"
            }`}
          >
            <ul
              onClick={toggleNav}
              className=" w-[90%] [&_li]:font-bold flex flex-col gap-8 py-6 [&_li]:text-xl [&_li]:hover:text-[#3ea40b] m-auto  "
            >
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/pages/howitworks">How it Works</Link>
              </li>
              <li>Browse Categories</li>
              <li>
                <Link href="/pages/pricing">Pricing</Link>
              </li>
              <li>
              <Link href="/pages/aboutUs">About Us </Link>
                </li>
            </ul>

            <div className="py-12 w-[90%] m-auto">
              <button className="w-full rounded-full cursor-pointer font-semibold transition-all duration-300 flex items-center justify-center bg-[#3ea40b] text-white px-4 md:px-8 py-4 text-lg">
                Start My List
              </button>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
