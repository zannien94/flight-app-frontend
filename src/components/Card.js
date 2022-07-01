import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Stack,
} from '@mui/material'

export default function MediaCard({
  city,
  fromDate,
  toDate,
  fromAirport,
  toAirport,
  fromPlane,
  returnPlane,
  returnToAirport,
  returnFromAirport,
  cityImage,
  fromAmount,
  id,
}) {
  let navigate = useNavigate()
  const { src, alt } = cityImage || {}

  const handleRedirect = () => {
    navigate(`../flights/${id}`)
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component='img'
        height='140'
        image={src || ''}
        alt={alt || ''}
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {city}
        </Typography>
        <Stack spacing={2}>
          <Stack>
            <Typography variant='body2'>{fromDate}</Typography>
            <Typography variant='body2'>
              {fromAirport} - {toAirport}, {fromPlane}
            </Typography>
          </Stack>
          <Stack>
            <Typography variant='body2'>{toDate}</Typography>
            <Typography variant='body2'>
              {returnFromAirport} - {returnToAirport}, {returnPlane}
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
      <CardActions>
        <Stack
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 'auto',
          }}
        >
          <Typography color='green'>{fromAmount}PLN</Typography>
          <Button onClick={handleRedirect} variant='contained'>
            Select
          </Button>
        </Stack>
      </CardActions>
    </Card>
  )
}
