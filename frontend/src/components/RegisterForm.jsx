import { useState } from 'react'
import TextInput from './TextInput'
import SubmitButton from './SubmitButton'

function RegisterForm ({ onSubmit }) {
  const [userInfos, setUserInfos] = useState({
    email: 'toto@tata2.fr',
    username: 'RiusmaX',
    password: 'secret',
    firstName: 'Marius',
    lastName: 'Sergent'
  })

  const handleChange = (event) => {
    const inputName = event.target.name
    const inputValue = event.target.value
    setUserInfos({
      ...userInfos,
      [inputName]: inputValue
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit(userInfos)
  }

  return (
    <>
      <h2>Inscription</h2>
      <form noValidate onSubmit={handleSubmit}>
        <br />
        <TextInput
          label="Nom d'utilisateur"
          type='text'
          name='username'
          onChange={handleChange}
          value={userInfos.username}
        />
        <br />
        <TextInput
          label='Prénom'
          type='text'
          name='firstName'
          onChange={handleChange}
          value={userInfos.firstName}
        />
        <br />
        <TextInput
          label='Nom'
          type='text'
          name='lastName'
          onChange={handleChange}
          value={userInfos.lastName}
        />
        <br />
        <TextInput
          label='Email'
          type='email'
          name='email'
          placeholder='toto@tata.fr'
          onChange={handleChange}
          value={userInfos.email}
        />
        <br />
        <TextInput
          label='Mot de passe'
          type='password'
          name='password'
          onChange={handleChange}
          value={userInfos.password}
        />
        <br />
        <SubmitButton value='Créer un compte' />
      </form>
    </>
  )
}

export default RegisterForm
