import DishListItem from './DishListItem'

function DishList ({ dishes }) {
  return dishes && (
    <div className='list-container'>
      {
        dishes.map(dish => {
          return (
            <DishListItem key={dish.id} dish={dish} />
          )
        })
      }
    </div>
  )
}

export default DishList
