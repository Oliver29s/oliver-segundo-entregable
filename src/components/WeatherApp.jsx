import React, { useState } from "react";

const WeatherApp = ({ weather }) => {
  
  const weatherCelsius = weather =>{
     let celcius =  weather.main.temp - 273.15 
     return celcius
  }
  
  console.log(weatherCelsius);
  const [temperature, setTemperature] = useState()
  return (
    <div>
      <h1>WeatherApp</h1>
      <h2>
        {weather?.name}, {weather?.sys?.country}
      </h2>
      <div>
        <img
          src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`}
          alt=""
        />
        <p>{}ºC</p>
      </div>
      <article>
        <h4>{weather?.weather[0].description}</h4>
        <p>{weather?.wind.speed} m/s</p>
        <p>{weather?.clouds.all}%</p>
        <p>{weather?.main.pressure} mb</p>
      </article>
      <>
      <button>change to</button>
      </>
    </div>
  );
};

export default WeatherApp;