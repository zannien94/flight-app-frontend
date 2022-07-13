import { createGlobalState } from 'react-hooks-global-state'

const { setGlobalState, useGlobalState } = createGlobalState({
  flights: [],
  isUserLogged: false,
  user: null,
})

export { setGlobalState, useGlobalState }
