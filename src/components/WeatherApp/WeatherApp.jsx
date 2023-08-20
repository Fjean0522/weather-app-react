import './WeatherApp.css'
import search_icon from '../assets/search.png'
import wind_icon from '../assets/wind.png'
import humidity_icon from '../assets/humidity.png'

const WeatherApp = () => {

  const search = async () => {
    

    try {
      const api_key = '0bc33a8bd7ce493f86a174800232707';
      const element = document.getElementsByClassName('city-input');
      const url = `https://api.weatherapi.com/v1/current.json?key=${api_key}&q=${element[0].value}`;

      if (element[0].value === '') {
      return 0;
      };

      const response = await fetch(url);
      const data = await response.json();
      
      const humidity = document.getElementsByClassName('humidity-percentage')[0];
      const wind = document.getElementsByClassName('wind-speed')[0];
      const temperature = document.getElementsByClassName('weather-temp')[0];
      const location = document.getElementsByClassName('weather-location')[0];

      humidity.innerHTML = data.current.humidity + '%';
      wind.innerHTML = data.current.wind_mph + 'mph';
      temperature.innerHTML = data.current.temp_f + '°F';
      location.innerHTML = data.location.name;

    } catch (error) {
      console.log('ERROR 404');
    };
  };

  return (
    <div className='container'>
      <div className="top-bar">
        <input type="text" className="city-input" placeholder='Search' />
        <div className="search-icon">
          <img src={search_icon} alt="search icon" onClick={() => {search()}}/>
        </div>
      </div>

      <div className="weather-location">London</div>

      <div className="weather-info">
        <div className="weather-temp">24°F</div>

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
            <div className="wind-speed">18 mph</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherApp