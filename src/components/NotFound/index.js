// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const notFoundUrl =
        'https://assets.ccbp.in/frontend/react-js/not-found-img.png'
      const headingClassName = isDarkTheme
        ? 'not-found-dark-heading'
        : 'not-found-light-heading'
      const descClassName = isDarkTheme
        ? 'not-found-dark-desc'
        : 'not-found-light-desc'
      const notFoundBackgroundColor = isDarkTheme
        ? 'not-found-dark'
        : 'not-found-light'

      return (
        <div className="main-not-found-container">
          <Navbar />
          <div className={`not-found-container ${notFoundBackgroundColor}`}>
            <img
              src={notFoundUrl}
              alt="not found"
              className="not-found-image"
            />
            <h1 className={`not-found-heading ${headingClassName}`}>
              Lost Your Way?
            </h1>
            <p className={`not-found-desc ${descClassName}`}>
              We cannot seem to find the page
            </p>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
