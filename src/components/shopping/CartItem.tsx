// redux common import
import { RootState } from '@/features/store'

import { useSelector, useDispatch } from 'react-redux'
import { removeItem, incrementItem, decrementItem } from '@/features/cart/CartSlice'

import { CartItemType } from '@/resource/cartitems'
import { MinusIcon, PlusIcon } from '../HeroIcons'
const CartItem = ({ id, img, title, price, amount }: CartItemType) => {
  
  const dispatch = useDispatch()

  const remove = () => {
    dispatch(removeItem(id))
  }

  const increment = () => {
    dispatch(incrementItem(id))
  }

  const decrement = () => {
    if (amount === 1) {
      dispatch(removeItem(id))
    } else {
      dispatch(decrementItem(id))
    }
  }

  return (
    <article className='cart-item'>
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className='item-price'>{price}</h4>
        <button
          className='remove-btn'
          onClick={remove}
        >削除
        </button>
      </div>
      <div>
        <button
          className='amount-btn'
          onClick={increment}
        >
          <PlusIcon />
        </button>
        <p className='amount'>{amount}</p>
        <button
          className='amount-btn'
          onClick={decrement}
        >
          <MinusIcon />
        </button>
      </div>
    </article>
  )
}
export default CartItem