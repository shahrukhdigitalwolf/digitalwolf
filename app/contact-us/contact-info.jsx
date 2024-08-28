import React from 'react'
import SubHeading from '../common/sub-heading'
import { Button, MenuItem, TextField } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';

function ContactInfo() {
    return (
        <div className="container mx-auto px-5 my-20">
            <SubHeading text="Contact Us" />
            <div>
                <div className='flex flex-wrap justify-between my-5 lg:my-10'>
                    <p className='w-[100%] lg:w-[50%] text-[25px] font-semibold'>Beyond Clicks, Your Direct Line to Excellence </p>
                    <p className='w-[100%] lg:w-[50%]'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat
                        cupidatat non proident.</p>
                </div>
                <div className="flex flex-wrap justify-between gap-y-5">
                    <div className="w-[100%] lg:w-[45%]">
                        <div className="">
                            <span className='border-b border-black'><strong>Address</strong></span>
                            <div className="flex justify-start my-5 gap-3">
                                <LocationOnIcon />
                                <p className="">22/263, Jodhpur Park, Tagore Park Road, Kolkata, West Bengal 700045</p>
                            </div>
                            <span className='border-b border-black'><strong>Call</strong></span>
                            <div className="flex justify-start my-5 gap-3">
                                <CallIcon />
                                <p>+91 8250054478</p>
                            </div>
                            <span className='border-b border-black'><strong>Mail</strong></span>
                            <div className="flex justify-start my-5 gap-3">
                                <EmailIcon />
                                <p>info@digitalwolf.co.in</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-[5%]'>
                        <div className="h-full w-[1px] bg-black hidden lg:block"></div>
                    </div>

                    <div className="w-[100%] lg:w-[45%] border border-black">
                        <div className="bg-[#CBC9FF] px-3 py-3">
                            <div className="flex flex-wrap gap-y-5">
                                <div className="w-[100%] px-3">
                                    <TextField className='bg-white' fullWidth id="outlined-basic" label="Name" variant="outlined" />
                                </div>
                                <div className="w-[100%] lg:w-[50%] px-3">
                                    <TextField className='bg-white' fullWidth id="outlined-basic" label="Email Address" variant="outlined" />
                                </div>
                                <div className="w-[100%] lg:w-[50%] px-3">
                                    <TextField className='bg-white' fullWidth id="outlined-basic" label="Phone Number" variant="outlined" />
                                </div>
                                <div className="w-[100%] lg:w-[50%] px-3">
                                    <TextField className='bg-white' fullWidth id="outlined-basic" label="Subject" variant="outlined" />
                                </div>
                                <div className="w-[100%] lg:w-[50%] px-3">
                                    <TextField
                                        fullWidth
                                        className='bg-white rounded-md'
                                        id="outlined-select-currency"
                                        select
                                        label="Select"
                                    >

                                        <MenuItem value="">Digital Marketing</MenuItem>
                                        <MenuItem value="">Digital</MenuItem>
                                        <MenuItem value="">Digital Marketing Services</MenuItem>
                                        <MenuItem value="">Digital Services</MenuItem>
                                        <MenuItem value="">Digital Marketing Services</MenuItem>
                                        <MenuItem value="">Digital Marketing Services</MenuItem>

                                    </TextField>
                                </div>
                                <div className="w-[100%] px-3">
                                    <TextField className='bg-white' fullWidth id="outlined-multiline-flexible" label="Write a message" rows={3} multiline />
                                </div>
                                <div className="w-[100%] flex justify-center">
                                    <Button className="bg-[#11009E] text-[#fff] hover:bg-[#10009ec3] hover:text-white px-10 py-3">Submit</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo