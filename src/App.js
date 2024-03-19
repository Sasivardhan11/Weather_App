// import logo from './logo.svg';
import './App.css';
import './style.css';
import React,{useState} from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCloudSun, faWind } from '@fortawesome/free-solid-svg-icons';

function App() {

  const apiKey = "65742aff487698eef1ccade0ec4d2e0d";
  const apiUrl = "https://api.openweathermap.org/data/2.5/weather"
  const [city,setCity]= useState("");
  const [result,setResult] = useState("");
  // const [icon,setIcon] = useState("");
  // const [windIcon,setWind] =useState("");
  const [windSpeed,setSpeed] = useState("");
  // const [timeIcon,setTimeIcon] = useState(""); 
  // const [time,setTime] =useState("");
  const changeHandler = e =>{
    setCity(e.target.value)
  }
  const submitHandler = e=>{
    e.preventDefault();
    const url =`${apiUrl}?q=${city}&appid=${apiKey}&units=metric`;
    fetch(url).then(
      response => response.json()
    ).then(data =>{
      const celcius = data.main.temp;
      // const cloud=<FontAwesomeIcon icon={faCloudSun} />
      // setIcon(cloud);
      setResult(city+`\n`+ Math.round(celcius)+"°C");
      // const wind = <FontAwesomeIcon icon={faWind} />  
      // setWind(wind);
      const windspeed = data.wind.speed;
      setSpeed(windspeed+`km/h`);
      // setTimeIcon(document.getElementById('icon3').innerHTML=<i class="fa-regular fa-clock"></i>);
      // const date = new Date();
      // setInterval(() => {
      //   const Time = date.getHours() 
      // + ':' + date.getMinutes() 
      // + ":" + date.getSeconds();
      // setTime(Time);
      // }, 1000);
      setCity("");
    })
    .catch(error=>{
      console.error('Error fetching weather data:', error);
    })
  }
  return (
    <div className="App">
      <div className='card' id='container'>
          <div className='card-body'>
              <h1 className='card-title'>Weather App</h1>
              <form onSubmit={submitHandler}>
                <input type="text" name="city" value={city} onChange={changeHandler} placeholder='Enter the City Name'/><br/><br/>
                <input type="submit" value="Get Temperature"/>
              </form>
              <h1>
                {/* <span id='icon'>{icon} </span> */}
                <span id='content'>{result}</span>
              </h1>
              <h1>
                {/* <span id='icon2'>{windIcon} </span> */}
                <span id='content'>{windSpeed}</span>
              </h1>
              {/* <h1>
                <span id='icon3'>{timeIcon} </span>
                <span>{time}</span>
              </h1> */}
          </div>
      </div>
    </div>
  );
}

export default App;
