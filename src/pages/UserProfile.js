import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { CardActions, Stack, Typography } from '@mui/material'
import { updateUser } from '../services'
import { setGlobalState, useGlobalState } from '../globalState'
import CreditCard from '../components/CreditCard'

export default function UserProfile() {
  const navigate = useNavigate()
  const [isUserLogged] = useGlobalState('isUserLogged')
  const [isLoading] = useGlobalState('isLoading')
  const [user] = useGlobalState('user')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleFirstNameChange = (e) => {
    const { value } = e.target
    setFirstName(value)
  }

  const handleLastNameChange = (e) => {
    const { value } = e.target
    setLastName(value)
  }

  const handleEmailChange = (e) => {
    const { value } = e.target
    setEmail(value)
  }

  const handlePasswordChange = (e) => {
    const { value } = e.target
    setPassword(value)
  }

  const handleProfileSave = async (event) => {
    event.preventDefault()
    const data = {
      firstName,
      lastName,
      email,
    }

    if (password) {
      data.password = password
    }

    try {
      const response = await updateUser(data)

      if (response.statusCode) {
        throw response
      }
      alert(`Profile updated`)
      setGlobalState('user', { ...user, ...data })
    } catch {
      alert(`Something went wrong!`)
    }
  }

  useEffect(() => {
    if (!isUserLogged && !isLoading) {
      navigate('/')
    }
  }, [isUserLogged])

  useEffect(() => {
    if (!user) {
      return
    }
    setFirstName(user.firstName)
    setLastName(user.lastName)
    setEmail(user.email)
  }, [user])

  return (
    <Stack alignItems='center' spacing={3}>
      <Card
        sx={{
          border: '1px solid white',
          padding: '20px',
          direction: 'column',
          alignItems: 'center',
          maxWidth: 600,
          minWidth: 300,
        }}
      >
        <Stack spacing={2}>
          <Stack alignItems='center'>
            <Typography variant='h5'>PROFILE</Typography>
          </Stack>
          <TextField
            label='Email Address'
            variant='standard'
            value={email}
            fullWidth
            onChange={handleEmailChange}
          />
          <TextField
            label='Name'
            variant='standard'
            value={firstName}
            fullWidth
            onChange={handleFirstNameChange}
          />
          <TextField
            label='Surname'
            variant='standard'
            value={lastName}
            fullWidth
            onChange={handleLastNameChange}
          />
          <TextField
            label='Password'
            placeholder='password'
            variant='standard'
            value={password}
            fullWidth
            type='password'
            onChange={handlePasswordChange}
          />
        </Stack>
        <CardActions sx={{ marginTop: '20px' }}>
          <Button variant='outlined' onClick={handleProfileSave}>
            Save creadit card
          </Button>
        </CardActions>
      </Card>
      <CreditCard />
    </Stack>
  )
}
