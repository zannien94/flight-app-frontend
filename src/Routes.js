import React from 'react'
import { Routes as Router, Route } from 'react-router-dom'
import Layout from './layout'
import About from './pages/About'
import Flights from './pages/Flights'
import Contact from './pages/Contact'
import FlightDetails from './pages/FlightDetails'
import Login from './pages/Login'
import Register from './pages/Register'
import UserFlights from './pages/UserFlights'
import UserProfile from './pages/UserProfile'
function Routes() {
  return (
    <Layout>
      <Router>
        <Route path='/' element={<Flights />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='flights/:id' element={<FlightDetails />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='user/flights' element={<UserFlights />} />
        <Route path='user/profile' element={<UserProfile />} />
      </Router>
    </Layout>
  )
}

export default Routes
