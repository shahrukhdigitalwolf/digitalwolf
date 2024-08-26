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
                    label="Select"
                    variant="standard"
                    helperText="Please select your currency"
                    sx={style}
                    >
                    <MenuItem  value="value1">
                        value1
                    </MenuItem>
                    <MenuItem  value="value1">
                        value1
                    </MenuItem>
                </TextField>
            </div>
            <div className='mb-3'>
                <Button className='bg-[#E3E3FF] hover:bg-[#aeaeff] text-[#000] px-20 py-3 block mx-auto'>Apply Now</Button>
            </div>
        </form>
        
    </div>
  )
}

export default Form