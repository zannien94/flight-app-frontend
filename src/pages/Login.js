import * as React from 'react'
import { NavLink } from 'react-router-dom'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { Stack, Typography } from '@mui/material'

export default function Login() {
  return (
    <Stack alignItems='center'>
      <Card
        sx={{
          border: '1px solid white',
          padding: '20px',
          direction: 'column',
          alignItems: 'center',
          maxWidth: 345,
          minWidth: 300,
        }}
      >
        <Stack spacing={2}>
          <Stack spacing={2} direction='row' justifyContent='space-between'>
            <Typography variant='h5'>LOGIN</Typography>
            <NavLink to='/register'>Register</NavLink>
          </Stack>
          <TextField
            label='Email Address'
            variant='standard'
            placeholder='Write Email Address'
            fullWidth
          />

          <TextField
            label='Password'
            variant='standard'
            placeholder='Write Password'
            fullWidth
          />
          <Button fullWidth variant='outlined' color='primary'>
            Login
          </Button>
        </Stack>
      </Card>
    </Stack>
  )
}
