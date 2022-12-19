
import './App.css';
import Time from './Background.js'
import Searchweather from './Searchbar.js';
import {useEffect, useState} from 'react';
import Background from './Weather.js'

function App() {
  
  // const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const [search, setSearch] = useState('');
  const [image, setImage] = useState('');
  const [clockface, setClockface] = useState('');
  const [hour, setHour] = useState('');
  const [isActive, setIsActive] = useState(false);
  const Requestweather = async() => {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=5cd3203f3d37e93d4368988e91a58495&units=metric`)
      const json = await res.json();
      
        setWeather(json)
        console.log(json)
  /*  var newweather= json;
   console.log(newweather.coord.lat)
   ;
        console.log(json.coord.lon) */
      // .then(result => {
      //   Time()
      // });       useEffect(() => {
    }
    useEffect(() => {
      Requestweather(search);
      // localStorage.removeItem('savesearch');
  },[search]);

  const getTodaysDate = (d) => {

    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
      ];
    const days = [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday'
    ]
  
    var day = days[d.getDay()]; // Fetches the day of the week
    var date = d.getDate(); // Fetches the date i.e. 1st - 31st day of the month
    var month = months[d.getMonth()]; // Fetches the month
    var year = d.getFullYear();
    
    return `${day} ${date} ${month} ${year}`
  }

  return (
    // <div className={(typeof weather.main != "undefined")
    /* ? ((weather.main.temp > 16)
    ? 'app warm' :'app') :'app'}> */
      <main>
      <div className='searchbar'>
        <Searchweather search={search} setSearch={setSearch} setIsActive={setIsActive}/>
        <Background  image={image} setImage={setImage} hour={hour} search={search} weatherType={weather.weather.main} clockface={clockface} />
      </div>
        {(typeof weather.main != "undefined") ? (
        <div>
        <div className="weather-container"  style={{display: isActive ? 'flex' : 'none'}}>
          <div className="weather">
        <div className="temp">{Math.round(weather.main.temp)}°C</div>
            <div className="condition">{weather.weather[0].main}</div>
            <div className="city">{weather.name}, {weather.sys.country}</div>
          <br></br>
          <div className="date">{getTodaysDate(new Date())}</div>
          {/* <div className="city">Long:{weather.coord.lon}, Lat:{weather.coord.lat}</div> */}
          <div>
             <Time hour={hour} setHour={setHour}clockface={clockface} setClockface={setClockface} weather={weather.coord} search={search}/> 
          </div>
          <br></br>
          </div>
        </div>
        </div>
        ) :('')}
      </main>
    /*  </div> */
  );
}

export default App