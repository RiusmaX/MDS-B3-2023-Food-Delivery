import { Link } from 'react-router-dom'

function Navbar () {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Accueil</Link>
        </li>
        <li>
          <Link to='/about'>A propos</Link>
        </li>
        <li>
          <Link to='/restaurants'>Restaurants</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
