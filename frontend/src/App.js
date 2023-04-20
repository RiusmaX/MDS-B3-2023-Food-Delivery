import './styles/App.scss'
import Navbar from './navigation/Navbar'
import Router from './navigation/Router'
import { AuthProvider } from './contexts/AuthContext'
import { CartProvider } from './contexts/CartContext'

function App () {
  return (
    <div className='App'>
      <AuthProvider>
        <CartProvider>
          <Navbar />
          <Router />
        </CartProvider>
      </AuthProvider>
    </div>
  )
}

export default App
