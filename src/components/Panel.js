import * as React from 'react'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Box from '@mui/material/Box'
import { Paper, TextField } from '@mui/material'
import Checkbox from '@mui/material/Checkbox'
import Button from '@mui/material/Button'
import styled from '@emotion/styled'
import { grey } from '@mui/material/colors'

const StyledPaper = styled(Paper)`
  padding: 20px;
  height: 220px;
  border: 2px solid whitesmoke;
  background-color: #0e0054;
`

const StyledTextField = styled(TextField)({
  '& label': {
    color: 'white',
  },
  '& label.Mui-focused': {
    color: 'white',
  },
  '& .MuiOutlinedInput-root': {
    color: 'white',
    '& fieldset': {
      borderColor: 'white',
    },
  },

  'input::-webkit-calendar-picker-indicator': {
    filter: 'invert(1)',
  },
})

export default function Panel({
  from,
  departDate,
  returnDate,
  to,
  run,
  nearbyAirportsFrom,
  nearbyAirportsTo,
  directFlyFrom,
  handleFromChange,
  handleDepartDateChange,
  handleReturnDateChange,
  handleToChange,
  handleRunChange,
  handleNearbyFromAirportsChange,
  handleNearbyToAirportsChange,
  handleDirectFlightsFromChange,
  onSubmit,
}) {
  return (
    <StyledPaper>
      <RadioGroup
        sx={{
          ml: 1,
          color: 'white',
        }}
        row
        name='ticket'
        onChange={handleRunChange}
        value={run}
      >
        <FormControlLabel
          value='return'
          control={
            <Radio
              sx={{
                color: 'white',
              }}
            />
          }
          label='Return'
        />
        <FormControlLabel
          value='one way'
          control={
            <Radio
              sx={{
                color: 'white',
              }}
            />
          }
          label='One way'
        />
        <FormControlLabel
          value='multi-city'
          control={
            <Radio
              sx={{
                color: 'white',
              }}
            />
          }
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
          <StyledTextField
            label='From'
            placeholder='Country, city, airpot'
            InputLabelProps={{ shrink: true }}
            onChange={handleFromChange}
            value={from}
          />
          <FormControlLabel
            onChange={handleNearbyFromAirportsChange}
            value={nearbyAirportsFrom}
            label='Add nearby airports'
            sx={{
              color: 'white',
            }}
            control={
              <Checkbox
                sx={{
                  color: grey[50],
                  '&.Mui-checked': {
                    color: 'white',
                  },
                }}
              />
            }
          />
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <StyledTextField
            label='To'
            placeholder='Country, city, airpot'
            InputLabelProps={{ shrink: true }}
            onChange={handleToChange}
            value={to}
          />
          <FormControlLabel
            label='Add nearby airports'
            sx={{
              color: 'white',
            }}
            onChange={handleNearbyToAirportsChange}
            value={nearbyAirportsTo}
            control={
              <Checkbox
                sx={{
                  color: grey[50],
                  '&.Mui-checked': {
                    color: 'white',
                  },
                }}
              />
            }
          />
        </Box>

        <StyledTextField
          type='date'
          label='Depart'
          onChange={handleDepartDateChange}
          InputLabelProps={{ shrink: true }}
          value={departDate}
        />
        <StyledTextField
          type='date'
          label='Return'
          onChange={handleReturnDateChange}
          InputLabelProps={{ shrink: true }}
          value={returnDate}
        />
      </Box>
      <Box
        sx={{
          ml: 1,
        }}
      >
        <FormControlLabel
          onChange={handleDirectFlightsFromChange}
          value={directFlyFrom}
          label='Direct flights only'
          sx={{
            color: 'white',
          }}
          control={
            <Checkbox
              sx={{
                color: grey[50],
                '&.Mui-checked': {
                  color: 'white',
                },
              }}
            />
          }
        />
      </Box>

      <Button
        sx={{
          display: 'Block',
          marginLeft: 'auto',
        }}
        variant='contained'
        onClick={onSubmit}
      >
        Get started
      </Button>
    </StyledPaper>
  )
}
