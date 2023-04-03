import { Link } from 'react-router-dom'

import '../styles/Navbar.scss'

function Navbar () {
  return (
    <>
      <nav className='navbar'>
        <img src='/assets/img/logo.png' />
        <ul>
          <Link to='/'>
            <li>
              Accueil
            </li>
          </Link>
          <Link to='/about'>
            <li>
              A propos
            </li>
          </Link>
          <Link to='/restaurants'>
            <li>
              Restaurants
              <ul>
                <Link to='/add-restaurant'>
                  <li>
                    Ajouter un restaurant
                  </li>
                </Link>
              </ul>
            </li>
          </Link>
          <Link to='/auth'>
            <li>
              S'incrire / Se connecter
            </li>
          </Link>
        </ul>
        <button className='menu-btn'>H</button>
      </nav>
      <nav className='mobile-menu'>
        <button className='mobile-menu-close'>X</button>
        <Link to='/'>Accueil</Link>
        <Link to='/'>Accueil</Link>
        <Link to='/'>Accueil</Link>
        <Link to='/'>Accueil</Link>
      </nav>
    </>
  )
}

export default Navbar
