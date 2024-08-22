import React from 'react'
import SubHeading from '../common/sub-heading'
import Image from 'next/image'
import eventsGallery from '../data/events-gallery'

function EventsGallery() {
  return (
    <div className='container mx-auto px-5'>
        <SubHeading text='Events' />
       <div className='flex flex-wrap gap-y-5 py-5'>
        {
            eventsGallery.map((ele,i)=>{
                return(
                    <div key={i} className='w-[100%] md:w-[50%] lg:w-[25%] px-3'>
                        <Image className='mx-auto' src={ele.img} alt='' width={350} height={400}/>
                    </div>
                )
            })
        }
        </div> 
    </div>
  )
}

export default EventsGallery