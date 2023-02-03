import { useState } from 'react'

function AddRestaurant () {
  const [name, setName] = useState('Marius')

  const handleChangeName = (event) => {
    setName(event.target.value)
  }

  return (
    <>
      <h1>ADD RESTAURANT</h1>
      <p>{name}</p>
      <form noValidate>
        <label>
          Nom :
          <input type='text' name='name' onChange={handleChangeName} value={name} />
        </label>
        <br />
        <label>
          Description :
          <textarea name='description' />
        </label>
        <br />
        <label>
          Latitude :
          <input type='text' name='latitude' />
        </label>
        <br />
        <label>
          Longitude :
          <input type='text' name='longitude' />
        </label>
        <br />
        <input type='submit' />
      </form>
    </>
  )
}

export default AddRestaurant
