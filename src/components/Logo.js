import React from 'react'
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports'
import LuggageIcon from '@mui/icons-material/Luggage'
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'

const Logo = () => {
  return (
    <Box
      sx={{
        background: '#92a8d1',
        borderRadius: '50%',
        border: '1px solid grey',
        height: '72px',
        width: '72px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2px',
      }}
    >
      <Typography fontWeight={'700'}>AIR</Typography>
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <ConnectingAirportsIcon />
        <AirplaneTicketIcon />
        <LuggageIcon />
      </Box>
    </Box>
  )
}

export default Logo
