import './header.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="header">
      <h1>This is the header</h1>
      <nav>
        <ul className="link-list">
          <li>
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/posts">
              Posts
            </Link>
          </li>
          <li>
            <Link className="link" to="/create">
              Create
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
