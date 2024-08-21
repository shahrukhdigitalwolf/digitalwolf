import Image from 'next/image'
import React from 'react'
import Form from './Form'

function ServiceHeroSection(props){
  return (
    <div className='servicesHeroSection'>
        <div className='py-20 text-center'>
            <p>{props.headText1}</p>
            <p className='text-[23px] py-2'>{props.headText2}</p>
            <p>{props.headText3}</p>
        </div> 
        <div className="container mx-auto px-5">
            <div className='flex flex-wrap gap-y-5'>
                <div className='w-[100%] lg:w-[50%] px-3'>
                    <Image src={props.featureImg} alt='' width={600} height={250}/>
                </div>
                <div className='w-[100%] lg:w-[50%] px-3'>
                    <Form/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ServiceHeroSection