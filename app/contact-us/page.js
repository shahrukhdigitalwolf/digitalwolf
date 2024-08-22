import React from 'react'
import ContactHeroSection from './ContactHeroSection'
import ContactInfo from './contact-info'
import Faq from '../common/Faq'

function ContactUs() {

  return (
    <>
      <ContactHeroSection/>
      <ContactInfo/>
      <contactMap/>
      <Faq/>
    </>
  )
}

export default ContactUs