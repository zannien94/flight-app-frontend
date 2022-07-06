import * as React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

const ContactForm = () => {
  return (
    <Box>
      <TextField label=' Your name' variant='standard' />
      <TextField label='Email' variant='standard' />
      <TextField id='outlined-textarea' label='Your message' multiline />
      <div>
        <button type='submit'> Send a message </button>
      </div>
    </Box>
  )
}

export default ContactForm
