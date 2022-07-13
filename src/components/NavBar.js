import * as React from 'react'
import Cookies from 'js-cookie'
import { NavLink, useNavigate } from 'react-router-dom'
import styled from '@emotion/styled'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { useGlobalState, setGlobalState } from '../globalState'

const LinkWrapper = styled.div`
  flex-grow: 1;
  font-size: 24px;
  color: black;
  font-weight: bold;
  border-radius: 4px;

  > a {
    color: black;
    text-decoration: none;
  }
  .active {
    color: #fff;
  }
`

function Wrapper({ to, text }) {
  return (
    <LinkWrapper>
      <NavLink end to={to}>
        {text}
      </NavLink>
    </LinkWrapper>
  )
}

export default function NavBar() {
  const [isUserLogged] = useGlobalState('isUserLogged')

  const navigate = useNavigate()

  const handleRedirect = () => {
    navigate(`../login`)
  }

  const handleLogout = () => {
    setGlobalState('isUserLogged', false)
    Cookies.remove('isUserLogged')
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='fixed' sx={{ background: 'skyblue' }}>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Wrapper to='/' text='Flights' />
          <Wrapper to='/about' text='About us' />
          <Wrapper to='/contact' text='Contact us' />
          <Button
            onClick={isUserLogged ? handleLogout : handleRedirect}
            color='inherit'
            sx={{ ml: 'auto' }}
          >
            {isUserLogged ? 'Logout' : 'Login'}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
