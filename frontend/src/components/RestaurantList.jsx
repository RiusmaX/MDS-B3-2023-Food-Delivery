import '../styles/RestaurantList.scss'
import RestaurantListItem from './RestaurantListItem'

function RestaurantList ({ restaurants }) {
  return (
    <div className='list-container'>
      {
        restaurants.map(restaurant => {
          return (
            <RestaurantListItem key={restaurant.id} restaurant={restaurant} />
          )
        })
      }
    </div>
  )
}

export default RestaurantList
