import React from 'react'
import styled from '@emotion/styled'
import { Typography, Stack } from '@mui/material'
import ContactBox from '../components/ContactBox'

const Header = styled.div`
  height: 400px;
  background-image: url('/images/contact_1.jpg');
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: cover;
`
const Contact = () => {
  return (
    <Stack spacing={3}>
      <Header>
        <Stack
          direction='row'
          justifyContent='center'
          alignItems='center'
          height='100%'
        >
          <Typography variant='h2' color='white'>
            Contact us
          </Typography>
        </Stack>
      </Header>
      <Stack>
        <ContactBox />
      </Stack>
    </Stack>
  )
}

export default Contact
