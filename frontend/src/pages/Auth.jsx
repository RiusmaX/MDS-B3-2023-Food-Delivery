import { useState } from 'react'
import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm'
import { login } from '../services/Api'

function Auth () {
  const [isRegister, setIsRegister] = useState(false)

  const handleSubmit = (credentials) => {
    login(credentials)
  }

  const handleRegisterClick = (event) => {
    event.preventDefault()
    setIsRegister(!isRegister)
  }

  return (
    <>
      <h1>AUTHENTIFICATION</h1>
      {
        isRegister
          ? <RegisterForm />
          : <LoginForm onSubmit={handleSubmit} />
      }
      <div>
        <a onClick={handleRegisterClick} href=''>
          {
            isRegister
              ? "J'ai déjà un compte"
              : "Je n'ai pas de compte"
          }
        </a>
      </div>
    </>
  )
}

export default Auth
