// Write your code here

// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const aboutUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

      const aboutBackgroundColor = isDarkTheme ? 'about-dark' : 'about-light'
      const homeClassName = isDarkTheme
        ? 'about-dark-heading'
        : 'about-light-heading'
      return (
        <div className="main-about-container">
          <Navbar />
          <div className={`about-container ${aboutBackgroundColor}`}>
            <img src={aboutUrl} alt="about" className="about-image" />
            <h1 className={homeClassName}>About</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
