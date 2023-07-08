import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import sharedInitialState from './state'
import { DeviceType } from './contracts'

/**
 * Shared store
 */
const sharedState = createSlice({
  name: 'shared',
  initialState: sharedInitialState,

  reducers: {
    setDevice: (state, action: PayloadAction<DeviceType>) => {
      state.device = { ...state.device, ...action.payload }
    }
  }
})

export const { setDevice } = sharedState.actions

export default sharedState.reducer
