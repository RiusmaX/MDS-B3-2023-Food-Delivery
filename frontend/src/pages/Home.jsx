import { useAuth } from '../contexts/AuthContext'

function Home () {
  const { state: { isAuthenticated }, logout } = useAuth()
  return (
    <>
      <h1>HOME</h1>
      {isAuthenticated && <button onClick={logout}>Se déconnecter</button>}
    </>
  )
}

export default Home
