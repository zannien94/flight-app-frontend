import React, { useEffect } from 'react'
import Cookies from 'js-cookie'
import Routes from './Routes'
import { getUserData } from './services'
import { setGlobalState, useGlobalState } from './globalState'
import { CircularProgress, Stack } from '@mui/material'

function App() {
  const [isUserLogged] = useGlobalState('isUserLogged')
  const [isLoading] = useGlobalState('isLoading')

  useEffect(() => {
    setGlobalState('isUserLogged', !!Cookies.get('isUserLogged'))
    setGlobalState('isLoading', false)
  }, [])

  useEffect(() => {
    if (isUserLogged) {
      try {
        ;(async () => {
          const userData = await getUserData()
          setGlobalState('user', userData)
        })()
      } catch {}
    }
  }, [isUserLogged])

  if (isLoading) {
    return (
      <Stack
        justifyContent='center'
        alignItems='center'
        width='100vw'
        height='100vh'
      >
        <CircularProgress color='secondary' />
      </Stack>
    )
  }

  return <Routes />
}

export default App
