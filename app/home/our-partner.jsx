import Image from 'next/image'
import React from 'react'
import client from '../data/client'
import { Button } from '@mui/material'
import Link from 'next/link'
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

function Ourpartner(props) {
  return (
    <>
        <div className='container mx-auto px-5 pb-10'>
            <div className='py-3'>
                <h2 className='text-[25px] font-bold py-3'>Our Partners</h2>
                <hr/>
            </div>
            <div className='flex flex-wrap py-5'>
                <div className='w-[100%] lg:w-[50%]'>
                    <p className='text-[25px]'>
                        We Collaborate With 
                        Famous Partners From All 
                        Around The World
                    </p>
                </div>
                <div className='w-[100%] lg:w-[50%]'>
                    <p>With a team of a knowledgeable, responsive, and committed team, we collaborate with famous brands from all over the world to accelerate your digital business.</p>
                </div>
            </div>
            <div className='flex flex-wrap'>
                {
                    client.slice(0,props.slice).map((ele, i)=>{
                        return(
                            <div key={i} className='w-[100%] sm:w-[50%] lg:w-[25%] px-3 py-5'>
                                <div>
                                    <Image src={ele.img} alt='' width={150} height={100} />
                                </div>
                                <div>
                                    <p className='font-bold my-4'>{ele.title}</p>
                                    <p>{ele.desc}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className='flex justify-center'>
                <button className='rounded-full bg-[#11009E] px-10 py-3 text-white hover:bg-[#513eff] transition duration-500'>
                <Link href='/'>View All Clients <ArrowCircleDownIcon/></Link>
                </button>
            </div>
        </div>
    </>
  )
}

export default Ourpartner