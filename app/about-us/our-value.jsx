"use client"
import { LinearProgress, linearProgressClasses, styled } from '@mui/material';
import Image from 'next/image'
import React from 'react'

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 6,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? '#6659FA' : '#308fe8',
    },
  }));

function OurValue() {
  return (
    <div className='bg-[#322854] pt-10 pb-52 clipPath'>
        <div className="container mx-auto px-5">
            <div>
                <p className='text-[30px] font-bold py-5 text-white'>Our Values</p>
                <hr/>
            </div>
            <div className="flex flex-wrap gap-y-5 my-8 text-white">
                <div className="w-[100%] lg:w-[50%]">
                    <p className='text-[25px] font-semibol'>Build fast marketing and innovative<br/> strategies with new ideas</p>
                </div>
                <div className="w-[100%] lg:w-[50%]">
                    <p className='font-semibold'>Need your marketing results across marketing space?</p>
                    <p>We are coming up with innovative marketing services. You can get the experience of a potential combination of data, collaboration, marketing technologies, partnerships, and optimizations constantly. </p>
                </div>
            </div>
            <div className='flex flex-wrap text-white'>
                <div className='w-[100%] lg:w-[30%] '>
                    <div className='bg-[#6659FA] border-[1px] px-5 h-full flex justify-evenly flex-col'>
                        <div className='pb-10 border-b-[1px] border-white'>
                            <p>01.</p>
                            <p className='font-bold text-[20px]'>Customer Approach</p>
                            <p className='text-[15px]'>We approach the customers.</p>
                        </div>
                        <div className='pb-10 border-b-[1px] border-white'>
                            <p>02.</p>
                            <p className='font-bold text-[20px]'>Innovation and Creativity</p>
                            <p className='text-[15px]'>Our strategies are always creative and innovative</p>
                        </div>
                        <div>
                            <p>03.</p>
                            <p className='font-bold text-[20px]'>Teamwork Collaboration</p>
                            <p className='text-[15px]'>We provide teamwork with collaborations</p>
                        </div>
                    </div>
                </div>
                <div className='w-[100%] lg:w-[40%]'>
                    <Image className='mx-auto' src='/img/about/digitalwolf-about-im2.png' alt='' width={400} height={600} />
                </div>
                <div className='w-[100%] lg:w-[30%]'>
                    <div className='border-[1px] px-5 py-7 h-[100%] flex justify-evenly flex-col'>
                        <div className=''>
                            <p className='text-[20px]'>Let's Check Our Expertise</p>
                            <p className='text-[15px]'>Duis aute irure dolor elit.</p>
                        </div>
                        <div className='py-5'>
                            <div className='flex justify-between pb-2'>
                                <p>AI-Powered Marketing</p>
                                <p>95%</p>
                            </div>
                            <div>
                                <BorderLinearProgress variant="determinate" value={95} />
                            </div>
                        </div>
                        <div className='py-5'>
                            <div className='flex justify-between pb-2'>
                                <p>Influencer Mastery</p>
                                <p>88%</p>
                            </div>
                            <div>
                                <BorderLinearProgress variant="determinate" value={88} />
                            </div>
                        </div>
                        <div className='py-5'>
                            <div className='flex justify-between pb-2'>
                                <p>Chatbot Optimization</p>
                                <p>83%</p>
                            </div>
                            <div>
                                <BorderLinearProgress variant="determinate" value={83} />
                            </div>
                        </div>
                        <div className='border-t-[1px] border-white'>
                            <p className='pt-5'>Visit our Help Center for more information.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurValue