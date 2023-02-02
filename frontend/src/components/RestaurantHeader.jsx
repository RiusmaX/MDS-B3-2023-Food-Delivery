import '../styles/RestaurantHeader.scss'

function RestaurantHeader ({ restaurant }) {
  const { attributes } = restaurant
  return (
    <div className='restaurant-header'>
      <img src={`${process.env.REACT_APP_IMG_URL}${attributes.photo.data.attributes.url}`} />
      <div className='overlay'>
        <h2>{attributes.name}</h2>
      </div>
    </div>
  )
}

export default RestaurantHeader
