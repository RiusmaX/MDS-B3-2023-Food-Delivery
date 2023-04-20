import { useState, useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import DishList from '../components/DishList'
import RestaurantHeader from '../components/RestaurantHeader'
import RestaurantInfos from '../components/RestaurantInfos'
import { getDishesByRestaurantId, getRestaurantById } from '../services/Api'

function Restaurant () {
  const { slug } = useParams()
  const { state: { id } } = useLocation()
  const [restaurant, setRestaurant] = useState()
  const [dishes, setDishes] = useState()

  useEffect(() => {
    const getData = async () => {
      const result = await getRestaurantById(id)
      const resultDishes = await getDishesByRestaurantId(id)
      setRestaurant(result.data)
      setDishes(resultDishes.data)
    }
    getData()
  }, [])

  console.log(dishes)

  if (!restaurant) {
    return <h1>Chargement...</h1>
  }

  return (
    <>
      <RestaurantHeader restaurant={restaurant} />
      <RestaurantInfos restaurant={restaurant} />
      <DishList dishes={dishes} />
    </>
  )
}

export default Restaurant
