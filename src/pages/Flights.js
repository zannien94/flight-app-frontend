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
  const [departDate, setDepartDate] = useState(new Date())
  const [returnDate, setReturnDate] = useState(new Date())
  const [to, setTo] = useState('')

  const handleFromChange = (event) => {
    setFrom(event.target.value)
  }

  const handleDepartDateChange = (date) => {
    setDepartDate(date)
  }

  const handleReturnDateChange = (date) => {
    setReturnDate(date)
  }

  const handleToChange = (event) => {
    setTo(event.target.value)
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

      if (
        !params.startDate ||
        !params.endDate ||
        !params.origin ||
        !params.destination
      ) {
        return alert('You forgot to fill inputs!')
      }

      const response = await fetch(url, {
        headers: {
          Accept: 'application/json',
          Authorization: 'Bearer 6d7bw5ga3ghg2a2mh4azhpqn',
        },
      })
      const data = await response.json()
      if (data.httpStatus) {
        throw data
      }
      setGlobalState('flights', data)
    } catch (err) {
      alert('Something went wrong!')
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
            handleFromChange={handleFromChange}
            handleDepartDateChange={handleDepartDateChange}
            handleReturnDateChange={handleReturnDateChange}
            handleToChange={handleToChange}
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
