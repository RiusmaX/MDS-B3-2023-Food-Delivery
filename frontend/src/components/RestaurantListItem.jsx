import { useNavigate } from 'react-router-dom'
import '../styles/RestaurantListItem.scss'
import Draggable from 'react-draggable'

function RestaurantListItem ({ restaurant }) {
  const { attributes } = restaurant
  const navigate = useNavigate()
  // => const attributes = restaurant.attributes
  const handleClick = (restaurant) => {
    navigate(`/restaurant/${restaurant.attributes.slug}`, { state: { id: restaurant.id } })
  }
  return (
    <Draggable>
      <div className='card'>
        <div className='card-header'>
          {attributes.photo && attributes.photo.data && attributes.photo.data.attributes && <img src={`${process.env.REACT_APP_IMG_URL}${attributes.photo.data.attributes.url}`} />}
          <div className='overlay'>
            <h2>{attributes.name}</h2>
          </div>
        </div>
        <div className='card-content'>
          <p>{attributes.description.substring(0, 180)}...</p>
        </div>
        <div className='card-footer'>
          <button onClick={() => handleClick(restaurant)} className='card-actions'>
            Voir la carte
          </button>
        </div>
      </div>
    </Draggable>
  )
}

export default RestaurantListItem
