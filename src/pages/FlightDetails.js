import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Stack } from '@mui/material'
import InfoFlight from '../components/InfoFlight'
import CreditCart from '../components/CreditCard'
import { useGlobalState } from '../globalState'

const FlightDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [flights] = useGlobalState('flights')

  const flightDetails = flights.find(
    (flight) =>
      `${flight.flightNumber}${flight.periodOfOperationUTC.startDate}` === id
  )

  useEffect(() => {
    if (!flightDetails) {
      navigate('/')
    }
  }, [])

  console.log({ flightDetails })

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
