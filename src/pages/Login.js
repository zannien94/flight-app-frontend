import * as React from 'react'
import Cookies from 'js-cookie'
import { NavLink, useNavigate } from 'react-router-dom'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { Stack, Typography } from '@mui/material'
import { login } from '../services'
import { setGlobalState } from '../globalState'

export default function Login() {
  const navigate = useNavigate()

  const handleRedirect = () => {
    navigate(`/`)
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    const { email, password } = event.target
    const data = {
      email: email.value,
      password: password.value,
    }

    try {
      const res = await login(data)

      if (res.statusCode !== 201) {
        throw res.statusCode
      }
      Cookies.set('isUserLogged', true)
      setGlobalState('isUserLogged', true)
      alert(`${res.message}`)
      handleRedirect()
    } catch {
      alert(`Wrong email or password!!`)
    }
  }

  return (
    <Stack alignItems='center' component='form' onSubmit={onSubmit}>
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
            name='email'
          />

          <TextField
            label='Password'
            variant='standard'
            placeholder='Write Password'
            fullWidth
            type='password'
            name='password'
          />
          <Button type='submit' fullWidth variant='outlined' color='primary'>
            Login
          </Button>
        </Stack>
      </Card>
    </Stack>
  )
}
