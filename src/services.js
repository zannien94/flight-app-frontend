import { API } from './api'

export const createUser = async (data) => {
  const response = await fetch(API.users, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
  return response.json()
}
