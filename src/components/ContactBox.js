import React from 'react'
import styled from '@emotion/styled'
import { Stack, Typography } from '@mui/material'
import EditLocationAltOutlinedIcon from '@mui/icons-material/EditLocationAltOutlined'
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk'
import EmailIcon from '@mui/icons-material/Email'

const StylePaper = styled.div`
  height: 200px;
  width: 200px;
  font-size: 15;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 12px;
  border: 2px solid whitesmoke;
  border-radius: 10%;
`
const StyleBox = styled.div`
  background: aqua;
  border-radius: 50%;
  height: 70px;
  width: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 12px;
`
const ContactBox = () => {
  return (
    <Stack direction='row' spacing={5} justifyContent='center'>
      <StylePaper>
        <StyleBox>
          <EditLocationAltOutlinedIcon sx={{ fontSize: 50 }} />
        </StyleBox>
        <Typography variant='body2'>13th Street. 47 W 13th St,</Typography>
        <Typography variant='body2'> New York, NY 10011, USA</Typography>
      </StylePaper>
      <StylePaper>
        <StyleBox>
          <PhoneInTalkIcon sx={{ fontSize: 50 }} />
        </StyleBox>
        <Typography variant='body2'>(+347) 123 4567 890</Typography>
        <Typography variant='body2'> Mon-Sat 9:00am-5:00pm</Typography>
      </StylePaper>
      <StylePaper>
        <StyleBox>
          <EmailIcon sx={{ fontSize: 50 }} />
        </StyleBox>
        <Typography variant='body2'>info@support.com</Typography>
        <Typography variant='body2'> 24 X 7 online support</Typography>
      </StylePaper>
    </Stack>
  )
}

export default ContactBox
