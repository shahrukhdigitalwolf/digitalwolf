import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <>
      <footer>
      <div className="bg-[#11009E] py-10 clip-custom-up">
        <div className="container mx-auto px-5 pt-20">
            <div className="flex flex-wrap gap-y-5">
                <div className="w-[100%] lg:w-[33.33%] px-3">
                    <div className="">
                        <Link className="girl" href="#">
                            {/* <Image className="" src="assets\DW.png" alt="logo" width={50} height={50} /> */}
                        </Link>
                    </div>
                    <p className="text-lg text-white mt-3 sm:mt-10">Digital Wolf's best Digital Marketing Company in Kolkata
                        assists you to make your business rank highest in google and make your brand recognizable.</p>
                    <div className="my-1 sm:my-8">
                        <Link className="girl" href="#">
                            {/* <Image className="" src="assets\Line 15.png" alt="logo" width={50} height={50}/> */}
                        </Link>
                    </div>
                    <p className="text-white my-3 sm:my-8">Follow Us On</p>
                    <div className="flex gap-3">
                        <lord-icon src="https://cdn.lordicon.com/nlsfemdg.json" trigger="hover">
                        </lord-icon>
                        <lord-icon src="https://cdn.lordicon.com/fjuachvi.json" trigger="hover">
                        </lord-icon>
                        <lord-icon src="https://cdn.lordicon.com/nnfbxwtf.json" trigger="hover">
                        </lord-icon>
                        <lord-icon src="https://cdn.lordicon.com/ramibnzh.json" trigger="hover">
                        </lord-icon>
                    </div>
                </div>
                <div className="flex lg:justify-center w-[100%] lg:w-[33.33%] px-3">
                    <div className="text-white flex flex-col gap-y-5">
                        <p className="text-2xl lg:text-4xl">Links</p>
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
                        <div className="text-2xl lg:text-4xl">
                            <p>Contact Us</p>
                        </div>
                        <div className="flex justify-start my-5 gap-3">
                            <lord-icon src="https://cdn.lordicon.com/iikoxwld.json" trigger="hover">
                            </lord-icon>
                            <p className="">22/263, Jodhpur Park, Tagore Park Road, Kolkata, West Bengal 700045</p>
                        </div>
                        <div className="flex justify-start gap-3">
                            <lord-icon src="https://cdn.lordicon.com/dpecyqry.json" trigger="hover">
                            </lord-icon>
                            <p>+91 8250054478</p>
                        </div>
                        <div className="flex justify-start my-5 gap-3">
                            <lord-icon src="https://cdn.lordicon.com/tmqaflqo.json" trigger="hover">
                            </lord-icon>
                            <p>info@digitalwolf.co.in</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" my-10">
                <Link className="girl" href="#">
                    {/* <Image className="" src="" alt="logo" width={50} height={50} /> */}
                </Link>
            </div>
            <div className="text-xl text-center text-white">
                <p>COPYRIGHTS © DIGITAL WOLF 2016 - 2024 | ALL RIGHTS RESERVED</p>
            </div>
        </div>
    </div>
      </footer>
    </>
  )
}

export default Footer