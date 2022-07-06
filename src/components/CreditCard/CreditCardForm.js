import * as React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import { DatePicker } from '@mui/x-date-pickers'

export default function BasicCard({
  renderBackgroundCard,
  nameCard,
  onChangeCardName,
  cardNumber,
  onChangeCardNumber,
  dateCard,
  onChangeDateCard,
  cardCVV,
  onChangeCardCVV,
}) {
  return (
    <Card
      sx={{
        border: '1px solid white',
        padding: '20px',
      }}
    >
      <Typography
        variant='body1'
        fontSize='20px'
        fontWeight={'700'}
        textAlign='center'
      >
        Payment Details
      </Typography>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <TextField
          label='Name of Card'
          placeholder='John Smith'
          variant='standard'
          value={nameCard}
          onChange={onChangeCardName}
        />
        <TextField
          label='Card Number'
          placeholder='4568 3479 4589 3589'
          inputProps={{ maxLength: 16 }}
          variant='standard'
          value={cardNumber}
          onChange={onChangeCardNumber}
        />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <DatePicker
            label='Valid Through'
            inputFormat='MM/yy'
            value={dateCard}
            onChange={onChangeDateCard}
            renderInput={(params) => (
              <TextField {...params} sx={{ mr: '20px' }} variant='standard' />
            )}
          />
          <TextField
            label='CVV'
            placeholder='666'
            inputProps={{ maxLength: 3 }}
            variant='standard'
            onFocus={renderBackgroundCard}
            onBlur={renderBackgroundCard}
            value={cardCVV}
            onChange={onChangeCardCVV}
          />
        </Box>
      </Box>
      <CardActions>
        <Button variant='outlined' onClick={renderBackgroundCard}>
          PAY
        </Button>
      </CardActions>
    </Card>
  )
}
