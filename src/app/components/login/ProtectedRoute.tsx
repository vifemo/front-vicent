import { Navigate } from 'react-router-dom'

function ProtectedRoute({ children }: any) {
  const user = JSON.parse(sessionStorage.getItem('user')!)

  if (!user) {
    return alert('You must log in'), (<Navigate to="/login" />)
  }

  return children
}

export default ProtectedRoute
