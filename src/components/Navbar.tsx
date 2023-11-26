// StyleはGlobalでImportしてしまっている状態

// redux common import
import { RootState } from '@/features/store'

import { useSelector } from 'react-redux'

import { CartIcon } from '@/components/HeroIcons'

const Navbar = () => {

  const { totalItems } = useSelector((store: RootState) => store.cartSlicer) 

  return (
    <nav>
      <div className='nav-center'>
        <h3>Shopping</h3>
        <div className='nav-container'>
          <CartIcon />
          <div className='amount-container'>
            <p className='total-amount'>{ totalItems }</p>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Navbar