import React from 'react'
import { Routes as Router, Route } from 'react-router-dom'
import Layout from './layout'
import Home from './pages/Home'
import About from './pages/About'
import Flights from './pages/Flights'
import Booking from './pages/Booking'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'

function Routes() {
  return (
    <Layout>
      <Router>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='flights' element={<Flights />} />
        <Route path='booking' element={<Booking />} />
        <Route path='gallery' element={<Gallery />} />
        <Route path='contact' element={<Contact />} />
      </Router>
    </Layout>
  )
}

export default Routes
