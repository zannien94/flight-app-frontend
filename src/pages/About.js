import React from 'react'
import styled from '@emotion/styled'
import { Typography, Stack } from '@mui/material'
import ReactPlayer from 'react-player'

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-position: 50%;
  background-size: cover;
`
const StyleBox = styled.div`
  width: 100%;
  max-height: 80px;
  background-color: black;
`

const About = () => {
  const [setSpacing] = React.useState(2)

  const handleChange = (event) => {
    setSpacing(Number(event.target.value))
  }

  return (
    <Stack>
      <Header>
        <StyleBox>
          <Typography fontWeight='700' variant='h4' color='white' ml='5px'>
            Discover the real value of travel with MiuMiuSky
          </Typography>
        </StyleBox>
        <ReactPlayer
          width={'100%'}
          height={'600px'}
          url='https://www.youtube.com/watch?v=tMFnxRZqEnw'
          playing
          controls={false}
          loop
          muted={true}
        />
      </Header>
    </Stack>
  )
}

export default About
