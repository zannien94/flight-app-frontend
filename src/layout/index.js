import * as React from 'react'
import NavBar from '../components/NavBar'

function Layout({ children }) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
    </>
  )
}

export default Layout
