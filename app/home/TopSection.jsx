import { Button } from '@mui/material'
import Image from 'next/image'
import React from 'react'

function TopSection() {
    
  return (
    <>
    <div className='bgs'>
        <div className='container mx-auto px-5'>
            <div className='flex flex-wrap'>
                <div className='w-[100%] lg:w-[50%] flex justify-evenly flex-col'>
                    <div>
                        <h1 className='text-[35px] leading-[40px]'>Impact On Results<br/>
                        Your <strong>Digital Success</strong> Partners</h1>
                    </div>
                    <div>
                        <p>
                            We are a top digital marketing agency that will take your company 
                            to the next level of productivity and profitability. The services will 
                            make your brand more visible and will attract more customers.
                        </p>
                    </div>
                    <div>
                        <Button className='rounded-full bg-[#11009E] px-10 py-2 text-white hover:bg-[#513eff]'>Get Free Consultation!</Button>
                    </div>
                </div>
                <div className='w-[100%] lg:w-[50%]'>
                    <Image className='m-auto' src='/img/home/hero-im.jpg' alt='' width={400} height={598} />
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default TopSection