// Write your code here
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const logoImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
      const contentClassName = isDarkTheme ? 'light-content' : 'dark-content'
      const navbarBackgroundColor = isDarkTheme ? 'dark-theme' : 'light-theme'
      const themeImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      return (
        <div className={`nav-content ${navbarBackgroundColor}`}>
          <img src={logoImage} alt="website logo" className="website-logo" />
          <ul className="nav-list">
            <li className="nav-link">
              <Link to="/" className={contentClassName}>
                Home
              </Link>
            </li>
            <li className="nav-link">
              <Link to="/about" className={contentClassName}>
                About
              </Link>
            </li>
          </ul>
          <button
            type="button"
            className="theme-change-button"
            data-testid="theme"
            onClick={toggleTheme}
          >
            <img src={themeImage} alt="theme" className="theme-image" />
          </button>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
