import React, { memo } from 'react'
import Card from './Card'
import { Stack } from '@mui/material'
import { cityList } from '../utils'
import { useGlobalState } from '../globalState'

const CardList = memo(() => {
  const [flights] = useGlobalState('flights')

  return (
    <Stack
      direction='row'
      flexDirection='row'
      gap='20px'
      flexWrap='wrap'
      justifyContent='space-between'
    >
      {flights.map((flight) => {
        const cityObject = cityList.find(
          (cityItem) => cityItem.iata === flight.legs[0].destination
        )

        return (
          <Card
            key={`${flight.flightNumber}${flight.periodOfOperationUTC.startDate}`}
            id={`${flight.flightNumber}${flight.periodOfOperationUTC.startDate}`}
            city={cityObject && cityObject.city}
            fromDate={flight.periodOfOperationUTC.startDate}
            toDate={flight.periodOfOperationUTC.startDate}
            fromAirport={flight.legs[0].origin}
            toAirport={flight.legs[0].destination}
            fromPlane={flight.airline}
            fromAmount={
              (flight.legs[0].aircraftArrivalTimeUTC -
                flight.legs[0].aircraftDepartureTimeUTC) *
              5
            }
            returnPlane={flight.airline}
            returnToAirport={flight.legs[0].origin}
            returnFromAirport={flight.legs[0].destination}
          />
        )
      })}
    </Stack>
  )
})

export default CardList
