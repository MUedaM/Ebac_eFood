import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type ItemCarrinho = {
  id: number
  name: string
  image: string
  details: string
  price: number
  portion: string
}

type CartState = {
  isOpen: boolean
  items: ItemCarrinho[]
  total: number
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  total: 0
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<ItemCarrinho>) => {
      const ItemCarrinho = state.items.find(
        (item) => item.id === action.payload.id
      )

      if (!ItemCarrinho) {
        state.items.push(action.payload)
        state.total += action.payload.price
      } else {
        alert(`O produto ${action.payload.name} já está no carrinho!`)
      }
    },
    removeItem: (state, action: PayloadAction<number>) => {
      const item = state.items.find((i) => i.id === action.payload)
      if (item) {
        state.total -= item.price
      }
      state.items = state.items.filter((i) => i.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { addItem, removeItem, open, close } = cartSlice.actions

export default cartSlice.reducer
