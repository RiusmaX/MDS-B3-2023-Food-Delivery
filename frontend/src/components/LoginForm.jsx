import { useState } from 'react'

function LoginForm ({ onSubmit }) {
  const [credentials, setCredentials] = useState({
    identifier: 'toto@tata.fr',
    password: 'secret'
  })

  const handleChange = (event) => {
    const inputName = event.target.name
    const inputValue = event.target.value
    setCredentials({
      ...credentials,
      [inputName]: inputValue
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit(credentials)
  }

  return (
    <>
      <h2>Se connecter</h2>
      <form noValidate onSubmit={handleSubmit}>
        <label>
          Email :
          <input
            type='email'
            name='identifier'
            placeholder='toto@tata.fr'
            onChange={handleChange}
            value={credentials.identifier}
          />
        </label>
        <br />
        <label>
          Mot de passe :
          <input
            type='password'
            name='password'
            onChange={handleChange}
            value={credentials.password}
          />
        </label>
        <br />
        <input type='submit' value='Se connecter' />
      </form>
    </>
  )
}

export default LoginForm
