// redux common import
import { RootState } from '@/features/store'

import { useSelector, useDispatch } from 'react-redux'
import { clearCart } from '@/features/cart/CartSlice'

import CartItem from '@/components/shopping/CartItem'

const CartContainer = () => {

  const dispatch = useDispatch()
  const { totalItems, cartItems, totalPrice } = useSelector((store: RootState) => store.cartSlicer)

  const deleteAllItems = () => {
    dispatch(clearCart())
  }

  return (
    <>
      {
        (totalItems < 1) ? (
          <section className='cart'>
            <header>
              <h2>買い物かご</h2>
              <h4 className='empty-cart'>何も入っていません...(￣△￣*)</h4>
            </header>
          </section>
        ) : (
          <section className='cart'>
            <header>
              <h2>買い物かご</h2>
            </header>
            <div>
              {
                cartItems.map(el => (
                  <CartItem
                    key={el.id}
                    {...el}
                  />
                ))
              }
            </div>
            <footer>
              <hr />
              <div className='cart-total'>
                <h4>合計<span>{totalPrice}円</span></h4>
              </div>
              <button
                className='btn clear-btn'
                onClick={deleteAllItems}
              >全削除
              </button>
            </footer>
          </section>
        )
      }
    </>
  )
}
export default CartContainer