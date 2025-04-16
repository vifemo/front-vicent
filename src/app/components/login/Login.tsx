import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../button/Button'
import './login.css'
import { useTranslation } from 'react-i18next'
import Swal from 'sweetalert2'

//usuarios de prueba
const users = [
  { username: 'admin', password: 'admin' },
  { username: 'user', password: 'user' },
]

function Login() {
  const { t } = useTranslation()
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = (e: React.FormEvent) => {
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
      Swal.fire(t('APP.LOGIN.EROR'))
    }
  }

  const handleLogout = () => {
    Swal.fire(t('APP.LOGOUT.MESSAGE'))
    sessionStorage.removeItem('user')
    navigate('/')
  }

  return (
    <div className="login-container">
<<<<<<< HEAD
      <h1>Login</h1>
=======
      <h1>Login form</h1>
>>>>>>> 69c675b46b20b7ff0ac2d35b6c5fbe4b528b2533
      <form className="login-container__form">
        <input
          data-cy="username"
          className="login-container__input"
          type="text"
          placeholder={t('APP.LOGIN.USER.PLACEHOLDER')}
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value.toLowerCase())
          }}
          required
        />
        <input
          data-cy="password"
          className="login-container__input"
          type="text"
          placeholder={t('APP.LOGIN.PASSWORD.PLACEHOLDER')}
          value={password}
          onChange={(e) => {
            setPassword(e.target.value.toLowerCase())
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
