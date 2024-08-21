import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SubHeading from './sub-heading'

function ServicesSecondSec(props) {
  return (
    <div className='container mx-auto px-5'>
        <div>
            <SubHeading text='Our Services' />
        </div>
        <div className='flex flex-wrap gap-y-5 py-5'>
            <div className='w-[100%] lg:w-[50%] px-3'>
                <p className='text-[25px]'>{props.ourServicesText1}</p>
            </div>
            <div className='w-[100%] lg:w-[50%] px-3'>
                <p>{props.ourServicesText2}</p>
            </div>
        </div>
        <div className='flex flex-wrap gap-y-5 py-5'>
            <div className='w-[100%] lg:w-[33.33%] px-3'>
                <Image src={props.ourServicesImg1} alt='' width={500} height={334} />
            </div>
            <div className='w-[100%] lg:w-[33.33%] px-3'>
                <Image src={props.ourServicesImg2} alt='' width={500} height={334} />
            </div>
            <div className='w-[100%] lg:w-[33.33%] px-3'>
                <Image src={props.ourServicesImg3} alt='' width={500} height={334} />
            </div>
        </div>
        <div className='flex flex-wrap gap-y-5 py-5'>
            <div className='w-[100%] lg:w-[50%] px-3'>
                <p className='text-[25px] pb-5'>{props.ourServicesText3}</p>
                <Link href='/' className='border-[1px] border-[#11009E] text-[#11009E] hover:bg-[#11009E] hover:text-[#fff] transition-all duration-[.5s] py-2 px-5 rounded-3xl'>Join Us Today</Link>
            </div>
            <div className='w-[100%] lg:w-[50%] px-3'>
                <p>{props.ourServicesText4}</p>
            </div>
        </div>
        <div className='flex flex-wrap gap-y-5 py-5'>
            <div className='w-[100%] md:w-[50%] lg:w-[25%] px-3'>
                <div className='text-center bg-[#5A53F4] text-white max-w-[100%] w-[250px] h-[200px] m-auto flex justify-center flex-col px-3'>
                    <p className='text-[20px] font-bold'>{props.ourServicesCardTextHead1}</p>
                    <p>{props.ourServicesCardTextDesc1}</p>
                </div>
            </div>
            <div className='w-[100%] md:w-[50%] lg:w-[25%] px-3'>
                <div className='text-center bg-[#CFCDFF] text-black max-w-[100%] w-[250px] h-[200px] m-auto flex justify-center flex-col px-3'>
                <p className='text-[20px] font-bold'>{props.ourServicesCardTextHead2}</p>
                <p>{props.ourServicesCardTextDesc2}</p>
                </div>
            </div>
            <div className='w-[100%] md:w-[50%] lg:w-[25%] px-3'>
                <div className='text-center bg-[#5A53F4] text-white max-w-[100%] w-[250px] h-[200px] m-auto flex justify-center flex-col px-3'>
                <p className='text-[20px] font-bold'>{props.ourServicesCardTextHead3}</p>
                <p>{props.ourServicesCardTextDesc3}</p>
                </div>
            </div>
            <div className='w-[100%] md:w-[50%] lg:w-[25%] px-3'>
                <div className='text-center bg-[#CFCDFF] text-black max-w-[100%] w-[250px] h-[200px] m-auto flex justify-center flex-col px-3'>
                <p className='text-[20px] font-bold'>{props.ourServicesCardTextHead4}</p>
                <p>{props.ourServicesCardTextDesc4}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ServicesSecondSec