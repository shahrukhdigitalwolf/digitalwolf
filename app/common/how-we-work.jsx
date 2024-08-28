import React from 'react'
import SubHeading from './sub-heading'
import Image from 'next/image'

function HowWeWork() {
  return (
    <div className='container mx-auto px-5'>
        <SubHeading text='How we work'/>
        <div className='flex flex-wrap gap-y-5 py-5'>
            <div className='w-[100%] lg:w-[50%]'>
                <p className='text-[30px]'>
                    Three Simple Actions 
                    To Help Our Clients
                </p>
            </div>
            <div className='w-[100%] lg:w-[50%]'>
                <p>Our team of experts discuss with you to know about your goals,i.e., where you want to see your brand. Then they fix a budget as per your requirements. They share flexible ideas and strategies to expand further.</p>
            </div>
        </div>
        <div className='flex flex-wrap gap-y-5'>
            <div className='w-[100] lg:w-[33.33%] px-3'>
                <div className='bg-[#843AFF] text-white py-5'>
                    <div className='pb-3 px-5'>
                        <p className='text-[30px]'>01.</p>
                    </div>
                    <div className='pb-3 px-5'>
                        <p className='text-[23px]'>Define Your Goals</p>
                    </div>
                    <div>
                        <Image className='ms-auto' src='/img/home/work1.png' alt='' width={400} height={250} />
                    </div>
                </div>
            </div>
            <div className='w-[100] lg:w-[33.33%] px-3'>
                <div className='bg-[#843AFF] text-white py-5'>
                    <div className='pb-3 px-5'>
                        <p className='text-[30px]'>02.</p>
                    </div>
                    <div className='pb-3 px-5'>
                        <p className='text-[23px]'>Identify Your Budget</p>
                    </div>
                    <div>
                        <Image className='ms-auto' src='/img/home/budget.png' alt='' width={400} height={250} />
                    </div>
                </div>
            </div>
            <div className='w-[100] lg:w-[33.33%] px-3'>
                <div className='bg-[#843AFF] text-white py-5'>
                    <div className='pb-3 px-5'>
                        <p className='text-[30px]'>03.</p>
                    </div>
                    <div className='pb-3 px-5'>
                        <p className='text-[23px]'>Maintain Flexibility</p>
                    </div>
                    <div>
                        <Image className='ms-auto' src='/img/home/flexibility.png' alt='' width={400} height={250} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HowWeWork