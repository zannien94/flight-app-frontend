import { createGlobalState } from 'react-hooks-global-state'

const { setGlobalState, useGlobalState } = createGlobalState({
  flights: [],
})

export { setGlobalState, useGlobalState }
