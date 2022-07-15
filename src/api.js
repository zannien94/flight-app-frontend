export const BASE_URL = 'http://localhost:3000/api/v1/'
export const EXTERNAL_FLIGHTS_URL = new URL(
  'https://api.lufthansa.com/v1/flight-schedules/flightschedules/passenger'
)
export const token = '5b42gp94f49pgkd25bnnh8hw'

export const API = {
  users: `${BASE_URL}users`,
  me: `${BASE_URL}users/me`,
  login: `${BASE_URL}auth/login`,
  flights: `${BASE_URL}flights`,
  unbookFlight: `${BASE_URL}flights/unbook`,
  reservation: `${BASE_URL}flights/book`,
  card: `${BASE_URL}users/card`,
  userReservation: `${BASE_URL}users/reservations`,
}
