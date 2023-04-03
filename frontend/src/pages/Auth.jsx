import { useState } from 'react'
import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm'
import { login, register } from '../services/Api'

function Auth () {
  const [isRegister, setIsRegister] = useState(false)

  const handleSubmit = (params) => {
    if (isRegister) {
      register(params)
    } else {
      login(params)
    }
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
          ? <RegisterForm onSubmit={handleSubmit} />
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
