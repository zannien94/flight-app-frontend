import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { format } from 'date-fns'
import { Button, Stack } from '@mui/material'
import InfoFlight from '../components/InfoFlight'
import { useGlobalState } from '../globalState'
import { getUserReservation, removeReservateFlight } from '../services'

const UserFlights = () => {
  const navigate = useNavigate()
  const [isUserLogged] = useGlobalState('isUserLogged')
  const [userFlights, setUserFlights] = useState([])

  const getFlightTime = (minutes) => {
    return `${Math.floor(minutes / 60)}:${minutes % 60}`
  }
  const fetchUserReservation = async () => {
    try {
      ;(async () => {
        const response = await getUserReservation()
        if (response) {
          setUserFlights(response)
        }
      })()
    } catch {}
  }

  const deleteUserReservation = async ({ flightNumber, fromDate }) => {
    try {
      const data = {
        flightNumber,
        fromDate,
      }

      const response = await removeReservateFlight(data)
      if (response.statusCode) {
        throw response
      }
      alert(`Reservation Removed!"`)
      fetchUserReservation()
    } catch (err) {
      alert(`${err.message}`)
    }
  }

  useEffect(() => {
    if (!isUserLogged) {
      navigate('/')
    }
  }, [])

  useEffect(() => {
    fetchUserReservation()
  }, [])

  return (
    <Stack direction='column' spacing={3}>
      <h1>My Flights</h1>
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
            <Stack
              direction='row'
              justifyContent='center'
              alignItems='center'
              spacing={3}
              key={id}
            >
              <InfoFlight
                title={`Flight no. ${flightNumber}, carrier ${carrier}, `}
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
              <Button
                onClick={() =>
                  deleteUserReservation({ flightNumber, fromDate })
                }
                variant='contained'
                color='secondary'
                disableElevation
              >
                Delete
              </Button>
            </Stack>
          )
        )}
      </Stack>
    </Stack>
  )
}

export default UserFlights
