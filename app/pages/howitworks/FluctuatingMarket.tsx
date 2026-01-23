import { assets } from '@/app/assets/assests'
import Image from 'next/image'
import React from 'react'
import { PiWarningCircleBold } from 'react-icons/pi'

const FluctuatingMarket = () => {
  return (
    <section className='md:w-[90%] w-[93%] mt-10 md:px-10 px-5 py-12 flex m-auto h-auto justify-center bg-[#e8f5e2] rounded-3xl'>
        <div className="flex items-center justify-center h-auto">
        <div className="m-auto md:w-[95%] w-[92%] lg:flex-row flex-col flex gap-9 max-w-300 items-center">
                <div className="flex-1 max-w-150 justify-center flex flex-col">
                    <h2 className='sm:text-3xl text-2xl font-bold'>Understanding Fluctuating Market Prices</h2>
                    <p className='text-sm text-gray-500 my-4'>Unlike a supermarket where prices are tagged and fixed for weeks, the open market is a living organism. Tomatoes can be ₦5,000 today and ₦8,000 tomorrow based on the morning&apos;s harvest arrivals.</p>

                    <div className='border border-[#3ea40b33] px-5 py-3 rounded-2xl bg-[#ffffff80] '>
                        <div className='flex items-center gap-1 mb-2'>
                        <PiWarningCircleBold className='text-[#3ea40b]' />
                            <h4 className='font-bold'>The MarketShoppa Standard</h4>
                        </div>  
                        <div>
                            <p className='text-sm text-gray-500 mb-2'>Because we don&apos;t own inventory, we have no reason to hide prices. Our shoppers are instructed to always negotiate for the &quot;best price&quot; just as if they were shopping for their own families</p>
                        </div>
                    </div>

                    <div className='my-3'>
                    <button className='bg-[#3ea40b] px-2 py-2 text-white font-semibold rounded-2xl'>I&apos;m ready to shop</button>
                    </div>
                    
                </div> 

                <div className="flex-1 w-full md:h-90 h-58 rounded-3xl justify-center  items-center">
                    <Image className='h-full object-cover rounded-3xl' src={assets.market} alt="market" width={1000} height={1000}/>
                </div>
            </div> 
        </div>
             
    </section>
  )
}

export default FluctuatingMarket