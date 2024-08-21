import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function WeProvideSupport() {
  return (
    <div className='flex flex-wrap mt-16 clipPath'>
        <div className='w-[100%] lg:w-[50%] bg-[#8F8AFF] flex justify-center flex-col '>
            <div className='w-[500px] max-w-full mx-auto'>
                <div>
                    <p className='text-[25px] font-bold py-3 text-white'>Our Services</p>
                    <hr/>
                </div>
                <div className='py-5'>
                    <p className='text-[30px] text-white'>We Provide 24X7 Support & Budget Friendly Solutions</p>
                </div>
                <div>
                    <Link href='/' className='text-white'>View All Services</Link>
                </div>
            </div>
        </div>
        <div className='w-[100%] lg:w-[50%]'>
            <Image src='/img/home/dg-mar.jpg' alt='' width={1000} height={500} />
        </div>
    </div>
  )
}

export default WeProvideSupport