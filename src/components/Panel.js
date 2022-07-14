import * as React from 'react'
import Box from '@mui/material/Box'
import { Autocomplete, Paper, TextField } from '@mui/material'
import Button from '@mui/material/Button'
import styled from '@emotion/styled'
import { LoadingButton } from '@mui/lab'
import { DatePicker } from '@mui/x-date-pickers'
import { cityList } from '../utils'

const StyledPaper = styled(Paper)`
  padding: 20px;
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
  button: {
    color: 'white',
  },
})

const flightCityList = cityList.map(
  ({ name, iata, icao }) => `${name} - ${iata} - ${icao}`
)

export default function Panel({
  departDate,
  returnDate,
  handleFromChange,
  handleDepartDateChange,
  handleReturnDateChange,
  handleToChange,
  onSubmit,
  loading,
}) {
  return (
    <StyledPaper>
      <Box
        sx={{
          '& > :not(style)': { m: 1 },
          display: 'flex',
          flexDirection: 'row',
        }}
        noValidate
        autoComplete='off'
      >
        <Autocomplete
          disablePortal
          options={flightCityList}
          sx={{ width: 300 }}
          onBlur={handleFromChange}
          renderInput={(params) => (
            <StyledTextField
              {...params}
              label='From'
              placeholder='Country, city, airpot'
              InputLabelProps={{ shrink: true }}
            />
          )}
        />

        <Autocomplete
          disablePortal
          options={flightCityList}
          sx={{ width: 300 }}
          onBlur={handleToChange}
          renderInput={(params) => (
            <StyledTextField
              {...params}
              label='To'
              placeholder='Country, city, airpot'
              InputLabelProps={{ shrink: true }}
            />
          )}
        />

        <DatePicker
          label='Depart'
          minDate={new Date()}
          value={departDate}
          onChange={handleDepartDateChange}
          renderInput={(params) => <StyledTextField {...params} />}
        />
        <DatePicker
          label='Return'
          minDate={departDate}
          value={returnDate}
          onChange={handleReturnDateChange}
          renderInput={(params) => <StyledTextField {...params} />}
        />
      </Box>

      <LoadingButton
        loading={loading}
        sx={{
          display: 'block',
          marginLeft: 'auto',
          marginTop: '20px',
          '.MuiLoadingButton-loadingIndicator': {
            color: 'white',
          },
        }}
        variant='contained'
        onClick={onSubmit}
      >
        Get started
      </LoadingButton>
    </StyledPaper>
  )
}
