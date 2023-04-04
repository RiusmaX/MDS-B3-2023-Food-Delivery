import './styles/App.scss'
import Navbar from './navigation/Navbar'
import Router from './navigation/Router'
import { AuthProvider } from './contexts/AuthContext'

function App () {
  return (
    <div className='App'>
      <AuthProvider>
        <Navbar />
        <Router />
      </AuthProvider>
    </div>
  )
}

export default App
