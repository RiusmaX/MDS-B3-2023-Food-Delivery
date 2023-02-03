import { useState } from 'react'
import { createRestaurant } from '../services/Api'

function AddRestaurant () {
  // const [name, setName] = useState('Marius')
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    latitude: '',
    longitude: ''
  })

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (formData.name && formData.description) {
      const result = await createRestaurant(formData)
      console.log(result)
    }
  }

  return (
    <>
      <h1>ADD RESTAURANT</h1>
      <form noValidate onSubmit={handleSubmit}>
        <label>
          Nom :
          <input type='text' name='name' onChange={handleChange} value={formData.name} />
        </label>
        <br />
        <label>
          Description :
          <textarea name='description' onChange={handleChange} value={formData.description} />
        </label>
        <br />
        <label>
          Latitude :
          <input type='text' name='latitude' onChange={handleChange} value={formData.latitude} />
        </label>
        <br />
        <label>
          Longitude :
          <input type='text' name='longitude' onChange={handleChange} value={formData.longitude} />
        </label>
        <br />
        <input type='submit' />
      </form>
    </>
  )
}

export default AddRestaurant
