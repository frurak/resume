import { createSlice } from '@reduxjs/toolkit'
import initialRootState from './state'

/**
 * Root store
 */
const rootState = createSlice({
  name: 'root',
  initialState: initialRootState,

  reducers: {}
})

export const {} = rootState.actions

export default rootState.reducer
