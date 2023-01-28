import React, { useState } from "react";

const WeatherApp = ({ weather,temp }) => {
  const [farehails, setFarehails] = useState(true)
  const handelClickTemp = () =>{
    setFarehails(!farehails)
  }

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
        <p> {farehails ? temp?.celcius + 'ºC' : temp?.farenheil + 'ºF' }

        </p>
      </div>
      <article>
        <h4>{weather?.weather[0].description}</h4>
        <p>{weather?.wind.speed} m/s</p>
        <p>{weather?.clouds.all}%</p>
        <p>{weather?.main.pressure} mb</p>
      </article>
      <>
      <button onClick={handelClickTemp}>change to {!farehails ? 'ºC' : 'ºF'}</button>
      </>
    </div>
  );
};

export default WeatherApp;