import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

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

  return (
    <div>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="User"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value)
          }}
          required
        />
        <input
          type="text"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
          }}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login
