import React from 'react'
import { Stack } from '@mui/material'
import InfoFlight from '../components/InfoFlight'
import CreditCart from '../components/CreditCard'

const FlightDetails = () => {
  return (
    <Stack direction='row' spacing={3}>
      <Stack flexGrow={1} spacing={3}>
        <InfoFlight />
        <InfoFlight />
      </Stack>
      <CreditCart />
    </Stack>
  )
}

export default FlightDetails
