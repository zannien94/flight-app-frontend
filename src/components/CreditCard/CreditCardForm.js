import * as React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'

export default function BasicCard({ renderBackgroundCard }) {
  const [value, setValue] = React.useState('Controlled')

  const handleChange = (event) => {
    setValue(event.target.value)
  }

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
        />
        <TextField
          label='Card Number'
          type='tel'
          inputmode='numeric'
          inputProps={{
            pattern: '[0-9s]{13,19}',
            type: 'tel',
            inputmode: 'numeric',
          }}
          placeholder='4568 3479 4589 3589'
          variant='standard'
        />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <TextField
            sx={{ mr: '20px' }}
            label='Valid Through'
            placeholder='06/22'
            variant='standard'
          />
          <TextField
            label='CVV'
            placeholder='666'
            variant='standard'
            onFocus={renderBackgroundCard}
            onBlur={renderBackgroundCard}
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
