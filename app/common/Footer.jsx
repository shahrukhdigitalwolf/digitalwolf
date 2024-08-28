import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline'
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';

function Footer() {
  return (
    <>
      <footer className='mt-5'>
      <div className="bg-[#11009E] pt-10 pb-6 clip-custom-up">
        <div className="container mx-auto px-5">
            <div className="flex flex-wrap gap-y-5">
                <div className="w-[100%] lg:w-[33.33%] px-3">
                    <div className="">
                        <Link href="/">
                            <Image src="/img/dw-logo-white.png" alt="logo" width={100} height={50} />
                        </Link>
                    </div>
                    <div className='border-b-[1px] border-white'>
                        <p className="text-lg text-white mb-5 mt-10">
                            Digital Wolf's best Digital Marketing Company in Kolkata
                            assists you to make your business rank highest in google 
                            and make your brand recognizable.
                        </p>
                    </div>
                    <p className="text-white my-5 sm:my-5">Follow Us On</p>
                    <div className="flex items-center gap-3">
                        <div>
                            <Link href="https://www.facebook.com/digitalwolfindia" className='text-[#fff]'>
                                <FacebookIcon fontSize='large'/>
                            </Link>
                        </div>
                        <div>
                            <Link href="" className='text-[#fff]'>
                                <WhatsAppIcon fontSize='large'/>
                            </Link>
                        </div>
                        <div>
                            <Link href="https://www.instagram.com/digital_wolf_india/" className='text-[#fff]'>
                                <InstagramIcon fontSize='large'/>
                            </Link>
                        </div>
                        <div>
                            <Link href="https://x.com/i/flow/login?redirect_after_login=%2FDigitalWolf12" className='text-[#fff]'>
                                <XIcon fontSize='large'/>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex lg:justify-center w-[100%] lg:w-[33.33%] px-3">
                    <div className="text-white flex flex-col gap-y-5">
                        <p className="text-[25px] border-b-[2px] border-[#fff] w-[140px]">Links</p>
                        <p>About Us</p>
                        <p>Our Services</p>
                        <p>Blog</p>
                        <p>Career</p>
                        <p>Term & Condition</p>
                        <p>Privacy Policy</p>
                        <p>Refund Policy</p>
                        <p>FAQ</p>
                    </div>
                </div>
                <div className="w-[100%] lg:w-[33.33%] px-3">
                    <div className="text-white">
                        <div className="">
                            <p className='text-[25px] border-b-[2px] border-[#fff] w-[180px]'>Contact Us</p>
                        </div>
                        <div className="flex justify- items-start my-5 gap-3">
                            <MapPinIcon width={25}/>
                            <p className="">22/263, Jodhpur Park, Tagore Park Road, Kolkata, West Bengal 700045</p>
                        </div>
                        <div className="flex justify-start items-center gap-3">
                            <PhoneIcon width={20}/>
                            <Link href='tel:+918250054478'>+91 8250054478</Link>
                        </div>
                        <div className="flex justify-start items-center my-5 gap-3">
                            <EnvelopeIcon width={20}/>
                            <Link href='mailto:info@digitalwolf.co.in'>info@digitalwolf.co.in</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" my-10">
                <Link className="girl" href="#">

                </Link>
            </div>
            <div className="border-t border-white pt-8">
                <p className='text-[17px] text-center text-white'>COPYRIGHTS © DIGITAL WOLF 2016 - 2024 | ALL RIGHTS RESERVED</p>
            </div>
        </div>
    </div>
      </footer>
    </>
  )
}

export default Footer