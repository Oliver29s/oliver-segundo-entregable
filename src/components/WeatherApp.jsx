import React, { useState } from "react";

const WeatherApp = ({ weather,temp }) => {
  const [farehails, setFarehails] = useState(true)
  const handelClickTemp = () =>{
    setFarehails(!farehails)
  }

  return (
    <div className="weather__contains">
      <h1 className="title__contain">WeatherApp</h1>
      <h2 className="subtitle__contain">
        {weather?.name}, {weather?.sys?.country}
      </h2>
      <div className="img__contain">
        <img
          src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`}
          alt=""
        />
        <p> {farehails ? temp?.celcius + ' ºC' : temp?.farenheil + ' ºF' }

        </p>
      </div>
      <article className="infoApp__contain">
        <h3>{weather?.weather[0].description}</h3>
        <div className="data__contain">
        <p className="data__text">Wind/Speed: {weather?.wind.speed}m/s</p>
        <p className="data__text">Clouds: {weather?.clouds.all}%</p>
        <p className="data__text">Presusure: {weather?.main.pressure} mb</p>
        </div>
      </article>
      <>
      <button className="button__app" onClick={handelClickTemp}>change to {!farehails ? 'ºC' : 'ºF'}</button>
      </>
    </div>
  );
};

export default WeatherApp;