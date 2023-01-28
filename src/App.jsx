import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import WeatherApp from "./components/WeatherApp";

function App() {
  const [coords, setCoords] = useState();
  const [weather, setweather] = useState();
  useEffect(() => {
    const succes = (pos) => {
      setCoords({
        lat: pos.coords.latitude,
        lon: pos.coords.longitude,
      });
    };

    navigator.geolocation.getCurrentPosition(succes);
  }, []);

  useEffect(() => {
    if (coords) {
      const apiKey = '959162f01b305dd27c5a663cbd80b050'
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${apiKey}`
      axios
      .get(url)
      .then(res => setweather(res.data) )
      .catch( err => console.log(err))

    }
  }, [coords]);

  return <div className="App">
    
   <WeatherApp weather={weather}/>
  </div>;
}

export default App;
