import Navbar from '@/components/Navbar'

import { RootState } from '@/features/store'

import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import CartContainer from '@/components/shopping/CartContainer'

import { calcTotal } from '@/features/cart/CartSlice'

const Redux = () => {

  const { cartItems } = useSelector((state: RootState) => state.cartSlicer)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(calcTotal())
  }, [cartItems])

  return (
    <>
      <Navbar />
      <CartContainer />
    </>
  )
}
export default Redux