import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import cartItems from '@/resource/cartitems'

const initialState = {
  cartItems: cartItems,
  totalItems: 4,
  totalPrice: 55600
}

const cartSlicer = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: state => {
      return {cartItems: [], totalItems: 0, totalPrice: 0}
    },
    removeItem: (state, action) => {
      const item_id: number = action.payload
      state.cartItems = state.cartItems.filter(el => el.id !== item_id)
    },
    incrementItem: (state, action) => {
      const cartItem = state.cartItems.find(
        el => el.id === action.payload
      )
      cartItem!.amount = cartItem!.amount + 1
    },
    decrementItem: (state, action) => {
      const cartItem = state.cartItems.find(
        el => el.id === action.payload
      )
      cartItem!.amount = cartItem!.amount - 1
    },
    calcTotal: state => {
      let amount = 0
      let total = 0

      state.cartItems.forEach(el => {
        amount += el.amount
        total += el.amount * el.price
      })
      state.totalItems = amount
      state.totalPrice = total
    }
  }
})

export const { clearCart, removeItem, incrementItem, decrementItem, calcTotal } = cartSlicer.actions
export default cartSlicer.reducer