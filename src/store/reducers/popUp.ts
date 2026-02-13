import { createSlice } from '@reduxjs/toolkit'
import { Restaurante } from '../../App'

type PopUpState = {
  items: Restaurante[]
  visible: boolean
}

const initialState: PopUpState = {
  items: [],
  visible: false
}

const popUpSlice = createSlice({
  name: 'popUp',
  initialState,
  reducers: {
    open: (state) => {
      state.visible = true
    },
    close: (state) => {
      state.visible = false
    }
  }
})

export const { open, close } = popUpSlice.actions

export default popUpSlice.reducer
