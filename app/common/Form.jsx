'use client'
import { Button, colors, MenuItem, TextField } from '@mui/material'
import React from 'react'

function Form() {
    const style = {
            '& label': {
                color: '#fff',
            },
            '& label.Mui-focused': {
                color: '#fff',
            },
            "& .MuiInput-underline:before": {
                borderBottomColor: "#fff", 
            },
            "&:hover .MuiInput-underline:before": {
            borderBottomColor: "blue", 
            },
            "& .MuiInput-underline:after": {
            borderBottomColor: "#b1b1b1", 
            },
            "& .MuiInputBase-input": {
            color: "#f0f0f0", // Input text color
            },
            "& .MuiFormHelperText-root": {
            color: "#b1b1b1", // Helper text color
            },
            marginBottom:'10px'
    }

    const services = [
        { id:1, name: 'Digital Marketing'},
        { id:2, name: 'SEO Services'},
        { id:3, name: 'SMO Services'},
        { id:4, name: 'Website Development'},
        { id:5, name: 'PPC Marketing'},
        { id:6, name: 'Mobile App Development'},
        { id:7, name: 'Logo & Graphic Design'},
        { id:8, name: 'Facebook Ad Services'},
        { id:9, name: 'Content Writing Services'},
        { id:10, name: 'Software Development'},
        { id:11, name: 'Bulk Message Services'},
    ]
  return (
    <div className='bg-[#5A53F4]'>
        <div className='mb-3 bg-[#CBC9FF] py-3 clipPath'>
            <p className='font-semibold text-[23px] text-center'>Enquiry Form</p>
        </div>
        <form className='px-8 py-10'>
            <div className='mb-3'>
                <TextField fullWidth id="standard-basic" label="Name" variant="standard" sx={style} />
            </div>
            <div className='mb-3'>
                <TextField fullWidth id="standard-basic" label="Phone Number" variant="standard" sx={style} />
            </div>
            <div className='mb-3'>
                <TextField fullWidth id="standard-basic" label="Email Id" variant="standard" sx={style} />
            </div>
            <div className='mb-3'>
                <TextField
                    id="standard-select-currency"
                    select
                    fullWidth
                    label="Services"
                    variant="standard"
                    helperText="Please select interested Service"
                    sx={style}
                    >
                    {
                        services.map((val,i)=>{
                            return(
                                <MenuItem key={i} value={val.name}>
                                    {val.name}
                                </MenuItem>
                            )
                        })
                    }
                </TextField>
            </div>
            <div className='mb-3'>
                <Button className='bg-[#E3E3FF] text-[#11009E] hover:bg-[#11009E] hover:text-white transition duration-500 px-20 py-3 block mx-auto'>Apply Now</Button>
            </div>
        </form>
        
    </div>
  )
}

export default Form