import React from 'react'
import Contct from '../Images/Contact.jpeg'
import Contct1 from '../Images/Contact1.jpeg'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
function Contact() {
  return (
    <>
      <Header
      title="Contact Us"
      para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
      visit='/courses'
      btntext='Join Now'
     imgpath={Contct}
    />
    
  <div className='contact-us'>
    
    <div className='container'>
    
      <div className='row gy-3'>
        <div className='col-lg-6'>
            <img src={Contct1} alt="contact image"/>
        </div>
        <div className='col-lg-6'>
        <h2>Contact Us</h2>
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div className='my-5'>
      <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Full Name"
        />
      </div>
      <div className='my-5'>
      <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Email"
        />
      </div>
      <div className='my-5'>
      <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Mobile No."
        />
      </div>
      </Box>
      <div className='my-5'>
      
      <Stack direction="row" spacing={2}>
      
      <Button variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
    </Stack>
    </div>

        </div>
      </div>
    </div>
  </div>
    </>
  )
}

export default Contact