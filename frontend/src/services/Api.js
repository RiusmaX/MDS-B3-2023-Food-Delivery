import axios from 'axios'
import { toast } from 'react-toastify'
import { saveToLocalStorage } from './LocalStorage'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  },
  timeout: 10000
})

const getRestaurants = async () => {
  try {
    const response = await api.get('/restaurants?populate=*')
    return response.data
  } catch (error) {
    console.error(error)
  }
}

const getRestaurantById = async (id) => {
  try {
    const response = await api.get(`/restaurants/${id}?populate=*`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

const getDishesByRestaurantId = async (id) => {
  try {
    const response = await api.get(`/dishes?filters[restaurant][id][$eq]=${id}&populate=*`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

const createRestaurant = async (formData) => {
  try {
    const _data = {
      data: { // Spécifique à Strapi
        name: formData.name,
        description: formData.description,
        coordinates: {
          latitude: formData.latitude,
          longitude: formData.longitude
        }
      }
    }
    const response = await api.post('/restaurants', _data)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

const login = async (credentials) => {
  try {
    const response = await api.post('/auth/local', credentials)
    saveToLocalStorage('AUTH', response.data)
    toast.success(`Hello ${response.data.user.firstName}, vous êtes connecté !`)
    return response.data
  } catch (error) {
    toast.error('Identifiant ou mot de passe invalide :(')
  }
}

const register = async (infos) => {
  try {
    const response = await api.post('/auth/local/register', infos)
    saveToLocalStorage('AUTH', response.data)
    toast.success(`Hello ${response.data.user.firstName}, merci pour votre inscription !`)
    return response.data
  } catch (error) {
    let errorMessage = error?.response?.data?.error?.message
    if (error?.response?.data?.error?.details?.errors?.length > 0) {
      errorMessage += ' ('
      errorMessage += error?.response?.data?.error?.details?.errors?.map(e => e.message)
      errorMessage += ') '
    }
    toast.error('Erreur lors de la création : ' + errorMessage)
  }
}
export {
  getRestaurants,
  getRestaurantById,
  getDishesByRestaurantId,
  createRestaurant,
  login,
  register
}
