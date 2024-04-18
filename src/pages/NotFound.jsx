import { useNavigate } from "react-router-dom"

const NotFound = () => {
  const navigate = useNavigate()
  return (
    <div>
      404 Bulunamadı
      <button onClick={() => navigate(-1)}>back</button>
    </div>
  )
}

export default NotFound
