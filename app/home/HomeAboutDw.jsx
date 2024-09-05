import Image from 'next/image'
import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Button } from '@mui/material';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

function HomeAboutDw() {
  return (
    <div className='clipPath bg-[#322854] pb-10'>
        <div className='container mx-auto px-5'>
            <div>
                <div className='py-3'>
                    <h2 className='text-[25px] font-bold py-3 text-white'>About Dw</h2>
                    <hr/>
                </div>
                <div className='pb-10'>
                    <p className='text-white text-[30px]'>Who We Are ?</p>
                </div>
                <div className='flex flex-wrap gap-y-3 pb-16'>
                    <div className='w-[100%] lg:w-[33.33333%]'>
                        <div>
                            <Image src='/img/about/digitalwolf-about-im2.png' alt='' width={400} height={400} />
                        </div>
                    </div>
                    <div className='w-[100%] lg:w-[33.33333%]'>
                        <div>
                            <p className='text-white'>We are a team of extremely talented professionals empowering businesses to next levels by providing the best idea and strategies at budget-friendly commercials.</p>
                        </div>
                        <div className='pt-12'>
                            <div className='flex items-center gap-x-3 text-[20px] pb-3 text-white'>
                                <CheckCircleIcon className='text-[#11009E] bg-white rounded-full' />
                                <p>Instruction and Development</p>
                            </div>
                            <div className='flex items-center gap-x-3 text-[20px] pb-3 text-white'>
                                <CheckCircleIcon className='text-[#11009E] bg-white rounded-full' />
                                <p>Learn Skills With Over 120k+</p>
                            </div>
                            <div className='flex items-center gap-x-3 text-[20px] pb-3 text-white'>
                                <CheckCircleIcon className='text-[#11009E] bg-white rounded-full' />
                                <p>Choose Courses Taught</p>
                            </div>
                            <div className='flex items-center gap-x-3 text-[20px] pb-3 text-white'>
                                <CheckCircleIcon className='text-[#11009E] bg-white rounded-full' />
                                <p>Learn With Lifetime Access On</p>
                            </div>
                        </div>
                        <div className='pt-5'>
                            <Button className='block mx-auto my-10 rounded-full bg-white px-10 py-3 text-[#513eff] hover:bg-[#513eff] hover:text-white transition duration-500'>
                                Learn More <ArrowCircleRightIcon/> 
                            </Button>
                        </div>
                    </div>
                    <div className='w-[100%] lg:w-[33.33333%] flex justify-center'>
                        <div>
                            <div>
                                <p className='font-bold text-[60px] text-white'>09+</p>
                                <p className='text-white'>Years of Experience</p>
                            </div>
                            <div>
                                <p className='font-bold text-[60px] text-white'>98.6%</p>
                                <p className='text-white'>Projects Completed</p>
                            </div>
                            <div>
                                <p className='font-bold text-[60px] text-white'>70+</p>
                                <p className='text-white'>Satisfied Clients</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeAboutDw