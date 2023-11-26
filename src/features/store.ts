import { configureStore } from '@reduxjs/toolkit'

// Slicer
import cartSlicer from '@/features/cart/CartSlice'

const store = configureStore({
  reducer: {
    cartSlicer
  }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store