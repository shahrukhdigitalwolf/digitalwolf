'use client'
import { Button } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { useMyContext } from '../context/MyContext'

function TopSection() {
   const {openPopup} = useMyContext();
  return (
    <>
    <div className='bgs clipPath pt-5'>
        <div className='container mx-auto px-5'>
            <div className='flex flex-wrap'>
                <div className='w-[100%] lg:w-[50%] flex justify-evenly flex-col gap-y-8 py-5'>
                    <div>
                        <h1 className='text-[30px] lg:text-[35px] leading-[40px]'>Impact On Results<br/>
                        Your <strong>Digital Success</strong> Partners</h1>
                        <Image src='/img/line.png' alt='' width={450} height={100} />
                    </div>
                    <div>
                        <p className='lg:text-[20px]'>
                            We are a top digital marketing agency that will take your company 
                            to the next level of productivity and profitability. The services will 
                            make your brand more visible and will attract more customers.
                        </p>
                    </div>
                    <div>
                        <Button onClick={()=> openPopup(true)} className='rounded-full bg-[#11009E] px-10 py-3 text-white hover:bg-[#513eff] transition duration-500'>Get Free Consultation!</Button>
                    </div>
                </div>
                <div className='w-[100%] lg:w-[50%]'>
                    <Image className='m-auto rounded-tl-[120px] rounded-tr-[120px]' src='/img/home/hero-im.jpg' alt='' width={400} height={598} />
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default TopSection