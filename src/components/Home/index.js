// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const homeUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'

      const homeBackgroundColor = isDarkTheme ? 'home-dark' : 'home-light'
      const homeClassName = isDarkTheme
        ? 'home-dark-heading'
        : 'home-light-heading'

      return (
        <div className="main-home-container">
          <Navbar />
          <div className={`home-container ${homeBackgroundColor}`}>
            <img src={homeUrl} alt="home" className="home-image" />
            <h1 className={`home-heading ${homeClassName}`}>Home</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
