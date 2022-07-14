import { createGlobalState } from 'react-hooks-global-state'

const { setGlobalState, useGlobalState } = createGlobalState({
  flights: [],
  isUserLogged: false,
  user: null,
  isLoading: true,
})

export { setGlobalState, useGlobalState }
