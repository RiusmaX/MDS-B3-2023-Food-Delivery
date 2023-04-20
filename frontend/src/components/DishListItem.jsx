import { useCart } from '../contexts/CartContext'
import '../styles/RestaurantListItem.scss'

function DishListItem ({ dish }) {
  const { attributes } = dish

  const { addToCart } = useCart()

  const handleClick = () => {
    addToCart(dish)
  }

  return (
    <div className='card'>
      <div className='card-header'>
        <img src={attributes.photo && attributes.photo.data && `${process.env.REACT_APP_IMG_URL}${attributes.photo.data.attributes.url}`} />
      </div>
      <div className='card-content'>
        <b>{attributes.name.toUpperCase()}</b>
      </div>
      <div className='card-footer'>
        <button className='card-actions' onClick={handleClick}>AJOUTER AU PANIER</button>
      </div>
    </div>
  )
}

export default DishListItem
