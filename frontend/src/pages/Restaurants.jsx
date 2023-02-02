import { useState, useEffect } from 'react'
import RestaurantList from '../components/RestaurantList'
import { getRestaurants } from '../services/Api'

function Restaurants () {
  const [restaurants, setRestaurants] = useState()

  useEffect(() => {
    const getData = async () => {
      const result = await getRestaurants()
      setRestaurants(result.data)
    }
    getData()
  }, [])

  if (!restaurants) {
    return <h1>Chargement...</h1>
  }

  return (
    <>
      <h1>RESTAURANTS</h1>
      <RestaurantList restaurants={restaurants} />
    </>
  )
}

export default Restaurants
