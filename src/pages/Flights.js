import React from 'react'
import Panel from '../components/Panel'
import Card from '../components/Card'

const Flights = () => {
  return (
    <>
      <h1>Let the journey begin</h1>
      <Panel />
      <Card
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
