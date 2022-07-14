import { API } from './api'

const DEFAULT_OPTIONS = {
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
  },
}

export const createUser = async (data) => {
  const response = await fetch(API.users, {
    method: 'POST',
    body: JSON.stringify(data),
    ...DEFAULT_OPTIONS,
  })
  return response.json()
}

export const updateUser = async (data) => {
  const response = await fetch(API.users, {
    method: 'PATCH',
    body: JSON.stringify(data),
    ...DEFAULT_OPTIONS,
  })
  return response.json()
}

export const login = async (data) => {
  const response = await fetch(API.login, {
    method: 'POST',
    body: JSON.stringify(data),
    ...DEFAULT_OPTIONS,
  })
  return response.json()
}

export const getUserData = async () => {
  try {
    const response = await fetch(API.me, {
      ...DEFAULT_OPTIONS,
    })
    return response.json()
  } catch {}
}

export const reservateFlight = async (data) => {
  const response = await fetch(API.reservation, {
    method: 'POST',
    body: JSON.stringify(data),
    ...DEFAULT_OPTIONS,
  })
  return response.json()
}

export const removeReservateFlight = async (data) => {
  const response = await fetch(API.unbookFlight, {
    method: 'PATCH',
    body: JSON.stringify(data),
    ...DEFAULT_OPTIONS,
  })
  return response.json()
}

export const getFlights = async () => {
  const response = await fetch(API.flights, {
    ...DEFAULT_OPTIONS,
  })
  return response.json()
}

export const addCreditCard = async (data) => {
  const response = await fetch(API.card, {
    method: 'PATCH',
    body: JSON.stringify(data),
    ...DEFAULT_OPTIONS,
  })
  return response.json()
}

export const getUserReservation = async (data) => {
  try {
    const response = await fetch(API.userReservation, {
      body: JSON.stringify(data),
      ...DEFAULT_OPTIONS,
    })
    return response.json()
  } catch {}
}
