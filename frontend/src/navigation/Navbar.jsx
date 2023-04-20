import { Link } from 'react-router-dom'
import '../styles/Navbar.scss'
import { useAuth } from '../contexts/AuthContext'
import CartIcon from '../components/CartIcon'

function Navbar () {
  const { state: { isAuthenticated, user } } = useAuth()

  return (
    <>
      <nav className='navbar'>
        <img src='/assets/img/logo.png' />
        <ul>
          {/* <Link to='/'>
            <li>
              Accueil
            </li>
          </Link>
          <Link to='/about'>
            <li>
              A propos
            </li>
          </Link> */}
          <Link to='/restaurants'>
            <li>
              Restaurants
              {
                isAuthenticated && (
                  <ul>
                    <Link to='/add-restaurant'>
                      <li>
                        Ajouter un restaurant
                      </li>
                    </Link>
                  </ul>
                )
              }
            </li>
          </Link>
          {
            isAuthenticated
              ? <li>Hello, {user.firstName}</li>
              : (
                <Link to='/auth'>
                  <li>
                    S'incrire / Se connecter
                  </li>
                </Link>
                )
          }
          <Link to='/cart'>
            <li>
              <CartIcon />
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
