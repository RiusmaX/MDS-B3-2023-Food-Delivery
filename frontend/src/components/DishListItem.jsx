function DishListItem ({ dish }) {
  const { attributes } = dish
  console.log(attributes)
  return (
    <div className='card'>
      <div className='card-header'>
        <img src={`${process.env.REACT_APP_IMG_URL}${attributes.photo.data.attributes.url}`} />
      </div>
    </div>
  )
}

export default DishListItem
