'use client'
import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import SubHeading from './sub-heading'
import Image from 'next/image'

function Testimonial() {
    
    const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])

    const reviewData = [
        {
            id:1,
            reviewName:'Subrata Roy',
            designation:'Hi-Tech Animation & Broadcast Pvt. Ltd.',
            review:'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident.',
            star:'/icons/star.png',
            profilePic:'/icons/dp.png'
        },
        {
            id:2,
            reviewName:'Subrata Roy',
            designation:'Hi-Tech Animation & Broadcast Pvt. Ltd.',
            review:'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident.',
            star:'/icons/star.png',
            profilePic:'/icons/dp.png'
        },
        {
            id:3,
            reviewName:'Subrata Roy',
            designation:'Hi-Tech Animation & Broadcast Pvt. Ltd.',
            review:'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident.',
            star:'/icons/star.png',
            profilePic:'/icons/dp.png'
        },
        {
            id:4,
            reviewName:'Subrata Roy',
            designation:'Hi-Tech Animation & Broadcast Pvt. Ltd.',
            review:'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident.',
            star:'/icons/star.png',
            profilePic:'/icons/dp.png'
        },
        {
            id:5,
            reviewName:'Subrata Roy',
            designation:'Hi-Tech Animation & Broadcast Pvt. Ltd.',
            review:'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident.',
            star:'/icons/star.png',
            profilePic:'/icons/dp.png'
        },
    ]

  return (
    <div className='container mx-auto px-5'>
        <div>
            <SubHeading text="Our Client Reviews"/>
            <div className='flex flex-wrap gap-y-5 py-5'>
                <div className='w-[100%] lg:w-[50%]'>
                    <p className='text-[25px]'>Witness the Impact of 
                    Our 😉 Customer Stories</p>
                </div>
                <div className='w-[100%] lg:w-[50%]'>
                    Get to know what they are talking about in our work and collaborative campaigns. Check out the testimonials of our clients to gain trust in us for your future endeavours.
                </div>
            </div>
            <div className="embla" ref={emblaRef}>
                <div className="embla__container">
                    {
                        reviewData.map((ele,i)=>{
                            return(
                                <div key={i} className="embla__slide">
                                    <div className='border-2 border-[#11009E] py-5 px-4'>
                                        <div>
                                            <Image src={ele.star} alt='' width={100} height={100} />
                                        </div>
                                        <div className='flex gap-x-3 py-5'>
                                            <div>
                                                <Image src={ele.profilePic} alt='' width={50} height={100} />
                                            </div>
                                            <div>
                                                <p className='font-bold'>{ele.reviewName}</p>
                                                <p>{ele.designation}</p>
                                            </div>
                                        </div>
                                        <div>
                                            <p>{ele.review}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonial