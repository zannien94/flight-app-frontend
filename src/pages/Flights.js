import React from 'react'
import Panel from '../components/Panel'
import Card from '../components/Card'
import { Box } from '@mui/material'

const Flights = () => {
  return (
    <>
      <h1>Let the journey begin</h1>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Panel />
      </Box>
      <Card
        id='2334'
        city='Barcelona'
        fromDate='12-12-2023'
        toDate='14-12-2023'
        fromAirport='Warszawa'
        toAirport='Barcelona'
        fromPlane='Wizz'
        fromAmount='350'
        returnPlane='Ryanair'
        returnToAirport='Warszawa'
        returnFromAirport='Barcelona'
      />
    </>
  )
}

export default Flights
