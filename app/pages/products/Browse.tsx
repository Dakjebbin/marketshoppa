"use client"

import ProductsList from '@/app/components/ProductsList'
import { useState } from 'react'
import { FaStore } from 'react-icons/fa6'
import { FiShoppingBag } from 'react-icons/fi'
import { LuChefHat } from 'react-icons/lu'

const Browse = () => {
    const [isTabActive, setIsTabActive] = useState("Open Market")

    
  return (
    <section className='w-[90%] m-auto my-10'>
        <div>
            <h2 className='text-2xl mt-10 font-bold '>Explore Categories</h2>
            <p className='font-light text-gray-700 text-[19px] ml-20 max-w-150 my-7'>Quality sourced from where it&apos;s freshest. Choose a category to browse popular items.</p>

            <div className='mb-10'>
                <ul className='flex items-center gap-5'>
                    <li onClick={() => setIsTabActive("Open Market")} className={`flex items-center gap-2 text-gray-700 px-5 py-2 rounded-full text-[16px] font-bold cursor-pointer  ${isTabActive === "Open Market" ? "bg-[#3ea40b] text-white" : "bg-[#e8f5e2] hover:bg-[#f3eb9f]"}`}>
                    <LuChefHat />
                        Open Market
                    </li>
                    <li onClick={() => setIsTabActive("Supermarket")} className={`flex items-center gap-2 text-gray-700 px-5 py-2 rounded-full text-[16px] font-bold cursor-pointer ${isTabActive === "Supermarket" ? "bg-[#3ea40b] text-white" : "bg-[#e8f5e2] hover:bg-[#f3eb9f]"}`}>
                    <FaStore />
                        Supermarket
                    </li>
                    <li onClick={() => setIsTabActive("HouseHold")} className={`flex items-center gap-2 text-gray-700 px-5 py-2 rounded-full text-[16px] font-bold cursor-pointer ${isTabActive === "HouseHold" ? "bg-[#3ea40b] text-white" : "bg-[#e8f5e2] hover:bg-[#f3eb9f]"} `}>
                    <FiShoppingBag />
                        Household Essentials
                    </li>
                </ul>
            </div>

           {isTabActive === "Open Market" ? <ProductsList limit={4}/> : null}
           {isTabActive === "HouseHold" ? <ProductsList category="HouseHold"/> : null}
        </div>
    </section>
  )
}

export default Browse