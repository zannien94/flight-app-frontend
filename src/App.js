import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import Routes from './Routes'
import { getUserData } from './services'
import { setGlobalState, useGlobalState } from './globalState'

function App() {
  const [isUserLogged] = useGlobalState('isUserLogged')

  useEffect(() => {
    setGlobalState('isUserLogged', !!Cookies.get('isUserLogged'))
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

  return <Routes />
}

export default App
