import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function Forecast(props) {
  let [loaded, setloaded] = useState(false);
  let [forecast, setforecast] = useState(null);

  function handleResponse(response) {
    setforecast(response.data.daily);
    setloaded(true);
  }

  if (loaded) {
    return (
      <div className=" row forecast">
        <WeatherForecastDay data={forecast[0]} />
      </div>
    );
  } else {
    let lat = props.coordinates.lat;
    let lon = props.coordinates.lon;
    let apiKey = "411a942cf48762f8f3d00fd7b552fe5c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    console.log(apiUrl);
    return null;
  }
}
