import * as React from 'react'
import { NavLink } from 'react-router-dom'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { Stack, Typography } from '@mui/material'
import { createUser } from '../services'

export default function Register() {
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
        <Stack
          spacing={2}
          component='form'
          onSubmit={async (event) => {
            event.preventDefault()
            const { email, firstName, lastName, password } = event.target

            const data = {
              firstName: firstName.value,
              lastName: lastName.value,
              email: email.value,
              password: password.value,
            }

            try {
              const res = await createUser(data)

              if (res.statusCode === 409) {
                throw res.statusCode
              }

              alert(`USER CREATED!`)
            } catch (err) {
              if (err === 409) {
                alert(`USER EXIST!`)
              } else {
                alert(`CAN NOT CREATE USER! ${err}`)
              }
            }
          }}
        >
          <Stack spacing={2} direction='row' justifyContent='space-between'>
            <Typography variant='h5'>REGISTER</Typography>
            <NavLink to='/login'>Login</NavLink>
          </Stack>

          <TextField
            label='Email Address'
            variant='standard'
            placeholder='Write Email Address'
            fullWidth
            name='email'
          />
          <TextField
            label='Name'
            variant='standard'
            placeholder='Write Name'
            fullWidth
            name='firstName'
          />
          <TextField
            label='Surname'
            variant='standard'
            placeholder='Write Surname'
            fullWidth
            name='lastName'
          />

          <TextField
            label='Password'
            variant='standard'
            type='password'
            placeholder='Write Password'
            fullWidth
            name='password'
          />

          <Button type='submit' fullWidth variant='outlined' color='primary'>
            Register
          </Button>
        </Stack>
      </Card>
    </Stack>
  )
}
