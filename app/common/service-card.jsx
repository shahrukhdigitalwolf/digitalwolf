import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

function ServiceCard(props) {
  return (
    <div className='flex border-[1px] border-[#000] p-7 h-[100%] hover:bg-[#EBEAFF]'>
        <div className='flex justify-between flex-col w-[20%]'>
            <p className='text-[23px] font-semibold'>[{props.srno}]</p>
            <Image src={props.icons} alt='' width={100} height={100} />
        </div>
        <div className='w-[80%]'>
            <Link className='font-bold text-[20px]' href={props.link}>{props.title}</Link>
            <p className='py-10'>{props.desc}</p>
            <Link className='bg-[#11009E] px-5 py-3 rounded-full text-white hover:bg-[#513eff] transition duration-1000' href={props.link}>Learn More <ArrowRightAltIcon/></Link>
        </div>
    </div>
  )
}

export default ServiceCard