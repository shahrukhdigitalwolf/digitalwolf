import React from 'react'
import SubHeading from '../common/sub-heading'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRightCircleIcon } from '@heroicons/react/24/outline'

function Blogs() {
    const blogs = [
        {
            id:1,
            img:'/img/blogs/blog-1.jpg',
            title:`How a Digital Marketing Company Can Assist Your Business`,
            desc:`Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex dfrt dxv bfb n nn gfs dddddd`,
            date:'23 Oct 2024',
            link:'digital-marketing-in-india',
        },
        {
            id:2,
            img:'/img/blogs/blog-1.jpg',
            title:`How a Digital Marketing Company Can Assist Your Business`,
            desc:`Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident.`,
            date:'23 Oct 2024',
            link:'digital-marketing-in-india',
        },
        {
            id:3,
            img:'/img/blogs/blog-1.jpg',
            title:`How a Digital Marketing Company Can Assist Your Business`,
            desc:`Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident.`,
            date:'23 Oct 2024',
            link:'digital-marketing-in-india-startup',
        },
        {
            id:4,
            img:'/img/blogs/blog-1.jpg',
            title:`How a Digital Marketing Company Can Assist Your Business How a Digital Marketing Company Can Assist Your Business`,
            desc:`Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident. Excepteur sint occaecat cupidatat non proident. Excepteur sint occaecat cupidatat non proident.`,
            date:'23 Oct 2024',
            link:'digital-marketing-in-india',
        },
    ]
  return (
    <div className='container mx-auto px-5'>
        <SubHeading text='Blogs'/>
        <div className='flex flex-wrap gap-y-5'>
                {
                    blogs.map((ele,i)=>{
                        return(
                        <div key={i} className='w-[100%] lg:w-[33%] px-3'>
                            <div className='border-[1px] border-[#6f6f6f] rounded-lg p-3'>
                                <div  className='overflow-hidden'>
                                    <Link href={`/blogs/${ele.link}`}>
                                        <Image className='w-full hover:scale-110 transition-all' src={ele.img} alt='' width={400} height={100} />
                                    </Link>
                                </div>
                                <div>
                                    <div className='py-2'>
                                        <p>{ele.date}</p>
                                    </div>
                                    <div>
                                        <Link className='text-[22px] font-semibold line-clamp-2' href={`/blogs/${ele.link}`} title={ele.title}>{ele.title}</Link>
                                        <p className='py-5 line-clamp-2 h-[4.5rem] mb-3'>{ele.desc}</p>
                                    </div>
                                    <div>
                                        <Link className='flex justify-evenly w-[250px] px-8 py-2 text-[18px] text-[#FFF] font-semibold bg-[#11009E] rounded-full hover:bg-[#3f31bb] transition-all' href={`/blogs/${ele.link}`}>Read More <ArrowRightCircleIcon width={25}/></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                   }) 
                }
        </div>
    </div>
  )
}

export default Blogs