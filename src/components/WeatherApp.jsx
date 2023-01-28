import React from "react";

const WeatherApp = ({ weather }) => {
  console.log(weather);
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
        <p>{weather?.main.temp}</p>
      </div>
      <article>
        <h4>{weather?.weather[0].description}</h4>
        <p>{weather?.wind.speed}</p>
        <p>{weather?.clouds.all}</p>
        <p>{weather?.main.pressure}</p>
      </article>
    </div>
  );
};

export default WeatherApp;