import { Button, MenuItem, TextField } from '@mui/material'
import React from 'react'

function Form() {
  return (
    <div className='bg-[#5A53F4] text-white px-8 py-10'>
        <form>
            <div className='mb-3'>
                <p className='font-semibold text-[23px] text-center'>Enquary</p>
            </div>
            <div className='mb-3'>
                <TextField className='w-[100%]' id="standard-basic" label="Name" variant="standard" />
            </div>
            <div className='mb-3'>
                <TextField className='w-[100%]' id="standard-basic" label="Phone Number" variant="standard" />
            </div>
            <div className='mb-3'>
                <TextField className='w-[100%]' id="standard-basic" label="Email Id" variant="standard" />
            </div>
            <div className='mb-3'>
                <TextField
                    id="standard-select-currency"
                    select
                    className='w-[100%]'
                    label="Select"
                    defaultValue="EUR"
                    variant="standard"
                    helperText="Please select your currency"
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
                <Button>Apply Now</Button>
            </div>
        </form>
    </div>
  )
}

export default Form