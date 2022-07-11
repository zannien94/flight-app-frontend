import * as React from 'react'
import styled from '@emotion/styled'
import NavBar from '../components/NavBar'

const Main = styled.main`
  padding: 20px;
  margin-top: 70px;
`

function Layout({ children }) {
  return (
    <>
      <NavBar />
      <Main>{children}</Main>
    </>
  )
}

export default Layout
