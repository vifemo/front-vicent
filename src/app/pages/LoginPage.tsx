import Header from '../components/header/Header'
import Login from '../components/login/login'
import Subheader from '../components/subheader/Subheader'
import { useNavigate } from 'react-router-dom'

function LoginPage() {
  return (
    <div>
      <Header />
      <Subheader />
      <Login />
    </div>
  )
}

export default LoginPage
