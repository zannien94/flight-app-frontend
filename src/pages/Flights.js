import React, { useState } from 'react'
import styled from '@emotion/styled'
import { Typography, Stack } from '@mui/material'
import Panel from '../components/Panel'
import CardList from '../components/CardList'
import { getDateForFlight } from '../utils'
import { setGlobalState } from '../globalState'

const Header = styled.div`
  height: 600px;
  background-image: url('/images/picture.jpg');
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: cover;
  display: flex;
  justify-content: center;
`

const Flights = () => {
  const [from, setFrom] = useState('')
  const [departDate, setDepartDate] = useState('')
  const [returnDate, setReturnDate] = useState('')
  const [to, setTo] = useState('')
  const [run, setRun] = useState('')
  const [nearbyAirportsTo, setNearbyAirportsTo] = useState(false)
  const [nearbyAirportsFrom, setNearbyAirportsFrom] = useState(false)
  const [directFlyFrom, setDirectFlyFrom] = useState(false)

  const handleFromChange = (event) => {
    setFrom(event.target.value)
  }

  const handleDepartDateChange = (event) => {
    setDepartDate(event.target.value)
  }

  const handleReturnDateChange = (event) => {
    setReturnDate(event.target.value)
  }
  const handleToChange = (event) => {
    setTo(event.target.value)
  }
  const handleRunChange = (event) => {
    setRun(event.target.value)
  }
  const handleNearbyFromAirportsChange = () => {
    setNearbyAirportsFrom((value) => !value)
  }

  const handleNearbyToAirportsChange = () => {
    setNearbyAirportsTo((value) => !value)
  }

  const handleDirectFlightsFromChange = () => {
    setDirectFlyFrom((value) => !value)
  }

  const onSubmit = async () => {
    try {
      const url = new URL(
        'https://api.lufthansa.com/v1/flight-schedules/flightschedules/passenger'
      )
      const params = {
        airlines: 'LH',
        startDate: getDateForFlight(departDate).toUpperCase(),
        endDate: getDateForFlight(returnDate).toUpperCase(),
        origin: from.toUpperCase(),
        destination: to.toUpperCase(),
        daysOfOperation: 1234567,
        timeMode: 'UTC',
      }
      url.search = new URLSearchParams(params).toString()

      const response = await fetch(url, {
        headers: {
          Accept: 'application/json',
          Authorization: 'Bearer jn3v7jnf335gej34u73t6zqv',
        },
      })
      const data = await response.json()
      setGlobalState('flights', data)
    } catch (err) {
      alert(err)
    }
  }

  return (
    <Stack spacing={3}>
      <Header>
        <Stack direction='column' justifyContent='center'>
          <Typography fontWeight={'700'} mb='15px' variant='h2' color='white'>
            Let the journey begin
          </Typography>
          <Panel
            from={from}
            departDate={departDate}
            returnDate={returnDate}
            to={to}
            run={run}
            nearbyAirportsFrom={nearbyAirportsFrom}
            nearbyAirportsTo={nearbyAirportsTo}
            directFlyFrom={directFlyFrom}
            handleFromChange={handleFromChange}
            handleDepartDateChange={handleDepartDateChange}
            handleReturnDateChange={handleReturnDateChange}
            handleToChange={handleToChange}
            handleRunChange={handleRunChange}
            handleNearbyFromAirportsChange={handleNearbyFromAirportsChange}
            handleNearbyToAirportsChange={handleNearbyToAirportsChange}
            handleDirectFlightsFromChange={handleDirectFlightsFromChange}
            onSubmit={onSubmit}
          />
        </Stack>
      </Header>

      <Stack
        display='flex'
        justifyContent='center'
        alignItems='center'
        mt='60px'
      >
        <Typography fontWeight={'700'} variant='h4'>
          Travel like a pro with our best offers!
        </Typography>
      </Stack>
      <CardList />
    </Stack>
  )
}

export default Flights
