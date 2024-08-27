import Image from 'next/image'
import React from 'react'
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

function AboutDw() {
    return (
        <div className='container mx-auto px-5 my-10'>
            <div className='px-0 lg:px-16'>
                <p className='text-[30px] font-bold py-3'>About DIgital Wolf</p>
                <hr />
            </div>
            <div className='flex flex-wrap justify-around gap-y-5 my-8'>
                <div className='w-[100%] lg:w-[40%]'>
                    <Image src='/img/about/about-us.png' alt='' width={400} height={700} />
                </div>
                <div className='w-[100%] lg:w-[40%] flex justify-evenly flex-col'>
                    <div>
                        <p className='text-[18px] font-semibold mb-5'>Our Vision</p>
                        <p>We are trying to form a dynamic and innovative team around the world by collaborating with the professionals who lead the market. Our partners bring unique ideas as they have intense experience in the marketing space. </p>
                    </div>
                    <div>
                        <p className='text-[18px] font-semibold mb-5'>Our Mission</p>
                        <p>Leading marketing professionals are the ones with whom we can proudly collaborate to form an innovative and dynamic team worldwide.  Our deep-experienced partners bring unique ideas for us in the market space. </p>
                    </div>
                    <div className='py-5'>
                        <button className='rounded-full bg-[#11009E] px-10 py-3 text-white hover:bg-white hover:text-[#11009E]'>
                        Learn More <ArrowCircleDownIcon/>
                        </button>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default AboutDw