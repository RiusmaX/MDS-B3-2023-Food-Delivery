import { RiShoppingCart2Line } from 'react-icons/ri'
import { useCart } from '../contexts/CartContext'

import '../styles/CartIcon.scss'

function CartIcon () {
  const { state: { items } } = useCart()
  return (
    <div className='cart-icon'>
      <RiShoppingCart2Line size={30} color='white' />
      <span className='badge'>{items.length}</span>
    </div>
  )
}

export default CartIcon
