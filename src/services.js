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

export const login = async (data) => {
  const response = await fetch(API.login, {
    method: 'POST',
    body: JSON.stringify(data),
    ...DEFAULT_OPTIONS,
  })
  return response.json()
}

export const getUserData = async () => {
  const response = await fetch(API.me, {
    ...DEFAULT_OPTIONS,
  })
  return response.json()
}
