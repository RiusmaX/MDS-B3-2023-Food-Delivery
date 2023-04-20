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

// Intercepteur pour ajouter le token (si il y en a un) à chaque requête
api.interceptors.request.use(
  config => {
    const authState = window.localStorage.getItem('AUTH')
    const auth = JSON.parse(authState)
    if (auth.user && auth.token) {
      config.headers.Authorization = `Bearer ${auth.token}`
    } 
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

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
  const response = await api.post('/auth/local', credentials)
  return response.data
}

const register = async (infos) => {
  const response = await api.post('/auth/local/register', infos)
  return response.data
}
export {
  getRestaurants,
  getRestaurantById,
  getDishesByRestaurantId,
  createRestaurant,
  login,
  register
}
