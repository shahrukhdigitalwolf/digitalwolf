import React from 'react'
import SubHeading from './sub-heading'
import Image from 'next/image'
import Link from 'next/link'

function OurTeam() {
  return (
    <div className='container mx-auto px-5'>
        <SubHeading text="Our Team Behind It" />
        <div className='flex flex-wrap py-5'>
            <div className='w-[100%] lg:w-[45%]'>
                <p className='text-[30px]'>Let’s meet the team of our digital marketing and navigate the digital frontiers.</p>
            </div>
            <div className='w-[100%] lg:w-[50%]'>
                <p>We proudly collaborations with the leading marketing professionals, as they provide us with unique ideas or strategies to form a dynamic and innovative team worldwide. </p>
            </div>
        </div>
        <div className='flex flex-wrap pt-5 gap-y-5'>
            <div className='w-[100%] lg:w-[25%] px-3'>
                <div>
                    <div>
                        <Image className='w-full rounded-tr-[120px]' src='/img/team/karndeep.jpg' alt='' width={300} height={100}/>
                    </div>
                </div>
            </div>
            <div className='w-[100%] lg:w-[25%] px-3'>
                <div>
                    <div>
                        <Image className='w-full rounded-tr-[120px]' src='/img/team/sujoy.jpg' alt='' width={300} height={100}/>
                    </div>
                </div>
            </div>
            <div className='w-[100%] lg:w-[25%] px-3'>
                <div>
                    <div>
                        <Image className='w-full rounded-bl-[120px]' src='/img/team/abhas-bhaiya.jpg' alt='' width={300} height={100}/>
                    </div>
                </div>
            </div>
            <div className='w-[100%] lg:w-[25%] px-3'>
                <div>
                    <div>
                        <Image className='w-full rounded-bl-[120px]' src='/img/team/zubair.jpg' alt='' width={300} height={100}/>
                    </div>
                </div>
            </div>
            <div className='w-[100%] lg:w-[25%] px-3'>
                <div>
                    <div>
                        <Image className='w-full rounded-br-[120px]' src='/img/team/subhajit.jpg' alt='' width={300} height={100}/>
                    </div>
                </div>
            </div>
            <div className='w-[100%] lg:w-[25%] px-3'>
                <div>
                    <div>
                        <Image className='w-full rounded-br-[120px]' src='/img/team/nitin.jpg' alt='' width={300} height={100}/>
                    </div>
                </div>
            </div>
            <div className='w-[100%] lg:w-[25%] px-3'>
                <div>
                    <div>
                        <Image className='w-full rounded-bl-[120px]' src='/img/team/rukshar.jpg' alt='' width={300} height={100}/>
                    </div>
                </div>
            </div>
            <div className='w-[100%] lg:w-[25%] px-3'>
                <div>
                    <div>
                        <Image className='w-full rounded-bl-[120px]' src='/img/team/sanchari.jpg' alt='' width={300} height={100}/>
                    </div>
                </div>
            </div>
        </div>
        <div className='text-center pt-16'>
            <p className='text-[23px]'>Hi, Want To Join With DW ? We Are Hiring!</p>
            <p className='pb-5'>Duis aute voluptate velitipsam volup.</p>
            <Link href="/" className='bg-[#11009E] text-[#fff] py-3 px-6 rounded-3xl hover:bg-[#513eff] transition duration-500'>Contact Us For Join</Link>
        </div>
    </div>
  )
}

export default OurTeam