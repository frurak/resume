
import rootReducer from '../../modules/root/store/slice'
import sharedReducer from '../../modules/shared/store/slice'
import { SharedInitialState } from '../../modules/shared/store/contracts'
import { RootInitialState } from '../../modules/root/store/contracts'

export interface AppReducers {
  shared: SharedInitialState
  root: RootInitialState
}

const reducers = {
  reducer: {
    shared: sharedReducer,
    root: rootReducer
  }
}

export default reducers
