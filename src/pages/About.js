import styled from '@emotion/styled'
import { Typography, Stack } from '@mui/material'
import React from 'react'

const Header = styled.div`
  height: 400px;
  background-image: url('/images/picture_1.jpg');
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: cover;
`

const About = () => {
  return (
    <>
      <h1>About us</h1>
      <Header>
        <Stack
          direction='row'
          justifyContent='center'
          alignItems='center'
          height='100%'
        >
          <Typography variant='h2'>Witajce</Typography>
        </Stack>
      </Header>
    </>
  )
}

export default About
