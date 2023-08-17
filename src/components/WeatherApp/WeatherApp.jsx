import './WeatherApp.css'
import search_icon from '../assets/search.png'
import clear_icon from '../assets/clear.png'
import cloudy_icon from '../assets/cloudy.png'
import drizzle_icon from '../assets/drizzle.png'
import rain_icon from '../assets/rain.png'
import snow_icon from '../assets/snow.png'
import wind_icon from '../assets/wind.png'
import humidity_icon from '../assets/humidity.png'

const WeatherApp = () => {
  return (
    <div className='container'>
      <div className="top-bar">
        <input type="text" className="city-input" placeholder='Search' />
        <div className="search-icon">
          <img src={search_icon} alt="search icon" />
        </div>
      </div>

      <div className="weather-location">London</div>

      <div className="weather-info">
        <div className="weather-image">
          <img src={cloudy_icon} alt="weather icon" />
        </div>
    
        <div className="weather-temp">24°C</div>

        <div className="element">
          <img src={humidity_icon} alt="" className="icon" />
          <div className="data">
            <div className="humidity-percentage">64%</div>
            <div className="text">Humidity</div>
          </div>
        </div>

        <div className="element">
          <img src={wind_icon} alt="" className="icon" />
          <div className="data">
            <div className="wind-speed">18 km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherApp