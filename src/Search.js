import axios from "axios";
import React, { useState } from "react";
import "./App.css";
import Forecast from "./Forecast";
import Actualinfo from "./Actualinfo";
export default function Search(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      img: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      date: new Date(response.data.dt * 1000),
    });
  }

  function search() {
    const apiKey = "0c1a639b4888a93ab5ae1ed2074d5083";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="row">
        <form onSubmit={handleSubmit} className="search-city-bar col-8">
          <input
            type="search"
            className="form-control"
            id="city-form"
            placeholder="Enter the name of your city"
            size="55px"
            onChange={handleCityChange}
          />
        </form>
        <div className="col-2 search-city-button">
          <button
            type="submit"
            className="btn btn-primary mb-3 search"
            id="search"
          >
            Search
          </button>
        </div>
        <div className="col-2 search-city-button">
          <button
            type="button"
            className="btn btn-primary mb-3 current"
            id="current-location"
          >
            Current
          </button>
        </div>
        <Actualinfo data={weatherData} />
        <div className="col-6 block-days mt-4" id="weather-forecast">
          <Forecast day="Thur" tempMax="25" tempMin="20" />
          <Forecast day="Fri" tempMax="23" tempMin="18" />
          <Forecast day="Sat" tempMax="30" tempMin="27" />
          <Forecast day="Sun" tempMax="22" tempMin="17" />
          <Forecast day="Mon" tempMax="18" tempMin="15" />
        </div>{" "}
      </div>
    );
  } else {
    search();
    return "Loading ...";
  }
}
