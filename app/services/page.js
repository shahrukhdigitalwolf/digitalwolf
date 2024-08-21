import React from 'react'
import ServicesHeroSection from './servicesHeroSection'
import OurServices from '../home/our-services'
import DigitalMeeting from '../common/digital-meeting'
import Ourpartner from '../home/our-partner'

function page() {
  return (
    <>
      <ServicesHeroSection/>
      <OurServices display='hidden'/>
      <div className='bg-[#F4F4FF] py-10 my-6'>
        <DigitalMeeting/>
      </div>
      <Ourpartner/>
    </>
  )
}

export default page