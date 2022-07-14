import * as React from 'react'
import Box from '@mui/material/Box'
import { Paper, TextField } from '@mui/material'
import Button from '@mui/material/Button'
import styled from '@emotion/styled'
import { DatePicker } from '@mui/x-date-pickers'

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

export default function Panel({
  from,
  departDate,
  returnDate,
  to,
  handleFromChange,
  handleDepartDateChange,
  handleReturnDateChange,
  handleToChange,
  onSubmit,
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
        <StyledTextField
          label='From'
          placeholder='Country, city, airpot'
          InputLabelProps={{ shrink: true }}
          onChange={handleFromChange}
          value={from}
          required
        />

        <StyledTextField
          label='To'
          placeholder='Country, city, airpot'
          InputLabelProps={{ shrink: true }}
          onChange={handleToChange}
          value={to}
          required
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

      <Button
        sx={{
          display: 'block',
          marginLeft: 'auto',
          marginTop: '20px',
        }}
        variant='contained'
        onClick={onSubmit}
      >
        Get started
      </Button>
    </StyledPaper>
  )
}
