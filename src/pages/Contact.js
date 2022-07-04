import React from 'react'
import styled from '@emotion/styled'
import { Typography, Stack, Box } from '@mui/material'
import Paper from '@mui/material/Paper'
import EditLocationAltOutlinedIcon from '@mui/icons-material/EditLocationAltOutlined'

const Header = styled.div`
  height: 400px;
  background-image: url('/images/picture_1.jpg');
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: cover;
`
const Contact = () => {
  const [spacing, setSpacing] = React.useState(2)

  const handleChange = (event) => {
    setSpacing(Number(event.target.value))
  }

  return (
    <>
      <Header>
        <Stack
          direction='row'
          justifyContent='center'
          alignItems='center'
          height='100%'
        >
          <Typography variant='h2'>Contact us </Typography>
        </Stack>
      </Header>

      <Paper
        sx={{
          height: 200,
          width: 200,
          fontSize: 15,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: '12px',
          background: 'marvin',
        }}
      >
        <Box
          sx={{
            background: 'aqua',
            borderRadius: '50%',
            height: '70px',
            width: '70px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            mb: '12px',
          }}
        >
          <EditLocationAltOutlinedIcon sx={{ fontSize: 50 }} />
        </Box>
        <Typography variant='body2'>
          13th Street. 47 W 13th St, New York, NY 10011, USA
        </Typography>
      </Paper>
    </>
  )
}

export default Contact
