import * as React from 'react'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Box from '@mui/material/Box'
import { Paper, TextField } from '@mui/material'
import Checkbox from '@mui/material/Checkbox'
import Button from '@mui/material/Button'
import styled from '@emotion/styled'

const StyledPaper = styled(Paper)`
  background-color: grey;
  max-width: 80%;
  height: 200px;
  padding: 20px;
  border: 2px solid grey;
`

export default function ButtonsGroup() {
  const [from, setFrom] = React.useState('')
  const [departDate, setDepartDate] = React.useState('')
  const [returnDate, setReturnDate] = React.useState('')
  const [to, setTo] = React.useState('')
  const [run, setRun] = React.useState('')
  const [nearbyAirportsTo, setNearbyAirportsTo] = React.useState(false)
  const [nearbyAirportsFrom, setNearbyAirportsFrom] = React.useState(false)
  const [directFlyFrom, setDirectFlyFrom] = React.useState(false)

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

  return (
    <StyledPaper>
      <RadioGroup
        sx={{
          ml: 1,
        }}
        row
        name='ticket'
        onChange={handleRunChange}
        value={run}
      >
        <FormControlLabel value='return' control={<Radio />} label='Return' />
        <FormControlLabel value='one way' control={<Radio />} label='One way' />
        <FormControlLabel
          value='multi-city'
          control={<Radio />}
          label='Multi-city'
        />
      </RadioGroup>

      <Box
        sx={{
          '& > :not(style)': { m: 1 },
          display: 'flex',
          flexDirection: 'row',
        }}
        noValidate
        autoComplete='off'
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <TextField
            label='From'
            placeholder='Country, city, airpot'
            InputLabelProps={{ shrink: true }}
            onChange={handleFromChange}
            value={from}
          />
          <FormControlLabel
            onChange={handleNearbyFromAirportsChange}
            value={nearbyAirportsFrom}
            control={<Checkbox />}
            label='Add nearby airports'
          />
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <TextField
            label='To'
            placeholder='Country, city, airpot'
            InputLabelProps={{ shrink: true }}
            onChange={handleToChange}
            value={to}
          />
          <FormControlLabel
            control={<Checkbox />}
            label='Add nearby airports'
            onChange={handleNearbyToAirportsChange}
            value={nearbyAirportsTo}
          />
        </Box>

        <TextField
          type='date'
          label='Depart'
          onChange={handleDepartDateChange}
          InputLabelProps={{ shrink: true }}
          value={departDate}
        />
        <TextField
          type='date'
          label='Return'
          onChange={handleReturnDateChange}
          InputLabelProps={{ shrink: true }}
          value={returnDate}
        />
      </Box>
      <Box>
        <FormControlLabel
          control={<Checkbox />}
          label='Direct flights only'
          onChange={handleDirectFlightsFromChange}
          value={directFlyFrom}
        />
      </Box>

      <Box
        sx={{
          mt: -5,
          ml: 80,
        }}
      >
        <Button
          variant='contained'
          onClick={() => {
            console.log(
              from,
              to,
              departDate,
              returnDate,
              run,
              nearbyAirportsTo,
              directFlyFrom,
              nearbyAirportsFrom
            )
          }}
        >
          Get started
        </Button>
      </Box>
    </StyledPaper>
  )
}
