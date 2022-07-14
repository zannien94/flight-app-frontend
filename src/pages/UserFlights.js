import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Stack } from '@mui/material'
import InfoFlight from '../components/InfoFlight'
import { useGlobalState } from '../globalState'
import { format } from 'date-fns'
import { getUserReservation } from '../services'

const UserFlights = () => {
  const navigate = useNavigate()
  const [isUserLogged] = useGlobalState('isUserLogged')
  const [userFlights, setUserFlights] = useState([])

  const getFlightTime = (minutes) => {
    return `${Math.floor(minutes / 60)}:${minutes % 60}`
  }

  useEffect(() => {
    if (!isUserLogged) {
      navigate('/')
    }
  }, [])

  useEffect(() => {
    try {
      ;(async () => {
        const response = await getUserReservation()
        setUserFlights(response)
      })()
    } catch {}
  }, [])

  return (
    <Stack direction='column' spacing={3}>
      <h1>Rezerwacja</h1>
      <Stack flexGrow={1} spacing={3}>
        {userFlights.map(
          ({
            id,
            fromDate,
            carrier,
            flightNumber,
            fromHour,
            toHour,
            fromIata,
            toIata,
            fromAirport,
            toAirport,
          }) => (
            <InfoFlight
              key={id}
              dayFlay={format(new Date(fromDate), 'cccc')}
              fromDate={format(new Date(fromDate), 'dd.MM.yyyy')}
              fromHour={getFlightTime(fromHour)}
              fromAirport={fromIata}
              timeFlay={getFlightTime(toHour - fromHour)}
              toHour={getFlightTime(toHour)}
              toAirport={toIata}
              fromNameAirport={fromAirport}
              toNameAirport={toAirport}
            />
          )
        )}
      </Stack>
    </Stack>
  )
}

export default UserFlights
