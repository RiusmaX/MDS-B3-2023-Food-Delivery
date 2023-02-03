import { Route, Routes } from 'react-router-dom'
import About from '../pages/About'
import AddRestaurant from '../pages/AddRestaurant'
import Home from '../pages/Home'
import Restaurant from '../pages/Restaurant'
import Restaurants from '../pages/Restaurants'

function Router () {
  return (
    <Routes>
      <Route index path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/restaurants' element={<Restaurants />} />
      <Route path='/restaurant'>
        <Route path=':slug' element={<Restaurant />} />
      </Route>
      <Route path='/add-restaurant' element={<AddRestaurant />} />
    </Routes>
  )
}

export default Router
