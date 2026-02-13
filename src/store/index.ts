import { configureStore } from '@reduxjs/toolkit'

import popUpReducer from './reducers/popUp'

export const store = configureStore({
  reducer: {
    popUp: popUpReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
