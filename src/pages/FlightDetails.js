import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Stack, Typography } from '@mui/material'
import { format } from 'date-fns'
import Button from '@mui/material/Button'
import InfoFlight from '../components/InfoFlight'
import CreditCart from '../components/CreditCard'
import { useGlobalState } from '../globalState'
import { cityList } from '../utils'
import { getFlights, reservateFlight } from '../services'

const FlightDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [flights] = useGlobalState('flights')

  const flightDetails = flights.find(
    (flight) =>
      `${flight.flightNumber}${flight.periodOfOperationUTC.startDate}` === id
  )

  const fromAirport =
    flightDetails &&
    cityList.find((item) => item.iata === flightDetails.legs[0].origin).name

  const toAirport =
    flightDetails &&
    cityList.find((item) => item.iata === flightDetails.legs[0].destination)
      .name

  const toCity =
    flightDetails &&
    cityList.find((item) => item.iata === flightDetails.legs[0].destination)
      .city

  const price =
    flightDetails &&
    (flightDetails.legs[0].aircraftArrivalTimeUTC -
      flightDetails.legs[0].aircraftDepartureTimeUTC) *
      5

  const getFlightTime = (minutes) => {
    return `${Math.floor(minutes / 60)}:${minutes % 60}`
  }

  const handleReservationRedirect = async () => {
    try {
      const data = {
        flightNumber: flightDetails.flightNumber.toString(),
        city: toCity,
        fromDate: flightDetails.periodOfOperationUTC.startDate,
        toDate: flightDetails.periodOfOperationUTC.endDate,
        carrier: flightDetails.airline,
        toAirport: toAirport,
        price,
        fromAirport: fromAirport,
        fromHour: flightDetails.legs[0].aircraftDepartureTimeUTC,
        toHour: flightDetails.legs[0].aircraftArrivalTimeUTC,
        fromIata: flightDetails.legs[0].origin,
        toIata: flightDetails.legs[0].destination,
      }

      const res = await getFlights()

      const currentFlight = res.find(
        ({ flightNumber, fromDate }) =>
          flightNumber === flightDetails.flightNumber.toString() &&
          fromDate === flightDetails.periodOfOperationUTC.startDate
      )
      const isAllSeatTaken = currentFlight && currentFlight.availableSeats

      if (isAllSeatTaken <= 0) {
        return alert(`NO SEATS AVAILABLE!!!"`)
      }

      const response = await reservateFlight(data)
      if (response.statusCode) {
        throw response
      }
      alert(
        `Reservation Successed!, you can check your reservation in "My Fligts"`
      )
    } catch (err) {
      if (err.statusCode === 403) {
        alert(`${err.message}`)
      } else {
        alert(`Something went wrong!`)
      }
    }
  }

  useEffect(() => {
    if (!flightDetails) {
      navigate('/')
    }
  }, [])

  if (!flightDetails) {
    return null
  }

  return (
    <Stack>
      <Stack direction='row' spacing={3}>
        <Stack flexGrow={1} spacing={3}>
          <InfoFlight
            title='Outboard'
            dayFlay={format(
              new Date(flightDetails.periodOfOperationUTC.startDate),
              'cccc'
            )}
            fromDate={format(
              new Date(flightDetails.periodOfOperationUTC.startDate),
              'dd.MM.yyyy'
            )}
            fromHour={getFlightTime(
              flightDetails.legs[0].aircraftDepartureTimeUTC
            )}
            fromAirport={flightDetails.legs[0].origin}
            timeFlay={getFlightTime(
              flightDetails.legs[0].aircraftArrivalTimeUTC -
                flightDetails.legs[0].aircraftDepartureTimeUTC
            )}
            toHour={getFlightTime(flightDetails.legs[0].aircraftArrivalTimeUTC)}
            toAirport={flightDetails.legs[0].destination}
            fromNameAirport={fromAirport}
            toNameAirport={toAirport}
            defaultExpanded
          />
          <Stack
            justifyContent='flex-end'
            alignItems='flex-end'
            flexGrow={1}
            direction='row'
          >
            <Typography typography='h4' color='green' marginRight='20px'>
              {price}$
            </Typography>

            <Button
              onClick={handleReservationRedirect}
              variant='contained'
              disableElevation
            >
              Reservation
            </Button>
          </Stack>
        </Stack>
        <CreditCart />
      </Stack>
    </Stack>
  )
}

export default FlightDetails
