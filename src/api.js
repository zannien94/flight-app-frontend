export const BASE_URL = 'http://localhost:3000/'

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
