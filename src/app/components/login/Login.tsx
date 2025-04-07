import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../button/Button'
import './login.css'

//usuarios de prueba
const users = [
  { username: 'admin', password: 'admin' },
  { username: 'user', password: 'user' },
]

function Login() {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()

    const user = users.find(
      (u) => u.username == userName && u.password === password
    )

    if (user) {
      sessionStorage.setItem(
        'user',
        JSON.stringify({ username: user.username })
      )
      navigate('/')
    } else {
      alert('Incorrect login')
    }
  }

  const handleLogout = () => {
    alert('Logged out')
    sessionStorage.removeItem('user')
  }

  return (
    <div className="login-container">
      <form className="login-container__form">
        <input
          className="login-container__input"
          type="text"
          placeholder="User"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value)
          }}
          required
        />
        <input
          className="login-container__input"
          type="text"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
          }}
          required
        />
        <div className="login-container__button">
          <Button
            text="Log in"
            onClick={(e: React.FormEvent) => {
              handleLogin(e)
            }}
          />
        </div>
        <div className="login-container__button login-container__button-logout">
          <Button
            text="Log out"
            onClick={() => {
              handleLogout()
            }}
          ></Button>
        </div>
      </form>
    </div>
  )
}

export default Login
