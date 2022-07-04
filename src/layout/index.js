import * as React from 'react'
import styled from '@emotion/styled'
import { useLocation } from 'react-router-dom'
import { Box } from '@mui/material'
import NavBar from '../components/NavBar'

const Main = styled.main`
  padding: 20px;
`

function Layout({ children }) {
  const location = useLocation()

  const pathName = location.pathname.replace('/', ' ').toUpperCase()

  return (
    <>
      <NavBar />
      <Box margin='16px'>
        <h2> {pathName}</h2>
      </Box>
      <Main>{children}</Main>
    </>
  )
}

export default Layout
