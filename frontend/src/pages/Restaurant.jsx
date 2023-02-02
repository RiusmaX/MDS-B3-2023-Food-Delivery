import { useLocation, useParams } from 'react-router-dom'

function Restaurant () {
  const { slug } = useParams()
  const { state: { id } } = useLocation()
  return (
    <h1>{slug} - {id}</h1>
  )
}

export default Restaurant
