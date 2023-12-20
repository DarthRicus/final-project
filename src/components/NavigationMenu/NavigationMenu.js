import { Link } from 'react-router-dom'
import './NavigationMenu.css'

function NavigationMenu() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li>
          <Link to="/" className="nav-link">
            TodoApp
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-link">
            About Us
          </Link>
        </li>
        <li className="login-link">
          <Link to="/login" className="nav-link">
            LogIn
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavigationMenu
