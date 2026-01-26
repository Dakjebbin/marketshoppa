import { assets } from '@/app/assets/assests'
import Image from 'next/image'
import React from 'react'



const About = () => {
  return (
    <div className='mt-10'>
    <div className="flex items-center justify-center h-auto">
      <div className="m-auto md:w-[95%] w-[92%] lg:flex-row flex-col flex gap-9 max-w-300 items-center mt-12">
        <div className="flex-1 max-w-150 justify-center flex flex-col">

          <p className="text-4xl md:text-6xl font-bold">
            Shopping should be <br/> stress-free.
          </p>

          <p className="mt-7 text-base md:text-xl text-gray-600  leading-relaxed">
            MarketShoppa was born from a simple observation: millions of people prefer fresh market produce, but the physical strain of &quot;going to market&quot; is becoming impossible in our busy modern lives
          </p>

          <div className="flex items-center mt-9 gap-5">
            <div>
                <p className='text-[#3ea40b] mb-1 sm:text-2xl text-xl font-semibold'>Our Mission</p>
                <p className='text-sm text-gray-600'>To provide convenient access to fresh, affordable food while empowering local personal shoppers.</p>
            </div>

            <div>
                <p className='text-[#f3eb9f] mb-1 sm:text-2xl text-xl font-semibold'>Our Vision</p>
                <p className='text-sm text-gray-600'>To become the digital bridge for every open market in Africa, ensuring quality and fair pricing for all.</p>
            </div>
         
          </div>
        </div>

        <div className="flex-1  rounded-3xl justify-center  items-center">
          <Image
            className="max-w-full shadow-lg shadow-[#c7c7c760] rounded-3xl w-full h-auto"
            width={1000}
            height={1000}
            src={assets.fruits}
            alt="background"
          ></Image>

        
        </div>
      </div>
    </div>
  </div>
  )
}

export default About