import axios from "axios";
import React, { useState } from "react";
import "./App.css";
import Forecast from "./Forecast";
import FormatedDate from "./FormatedDate";

export default function Search(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      img: "http://openweathermap.org/img/wn/10d@2x.png",
      date: new Date(response.data.dt * 1000),
    });
  }
  if (weatherData.ready) {
    return (
      <div className="row">
        <form className="search-city-bar col-8">
          <input
            type="search"
            className="form-control"
            id="city-form"
            placeholder="Enter the name of your city"
            size="55px"
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
        <div className="data"></div>
        <div className="actualInfo col-6 p-0">
          <div id="city">{weatherData.city}</div>
          <div className="current-date">
            <FormatedDate date={weatherData.date} />, <span id="date"></span>
          </div>
          <div className="row">
            <div className="col-10">
              <div className="row">
                <div className="col-4">
                  <img
                    id="weather-icon"
                    src={weatherData.img}
                    alt={weatherData.description}
                  />
                </div>
                <div className="col-4">
                  <span className="temperature" id="temperature-variable">
                    {Math.round(weatherData.temperature)}
                  </span>
                </div>
                <div className="col-4">
                  <a href="/" className="unit">
                    °C
                  </a>{" "}
                  <span className="unit">| </span>{" "}
                  <a href="/" className="unit">
                    °F
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="row row3">
                <div className="col-12">
                  <span className="precipitation" id="description">
                    {weatherData.description}
                  </span>
                </div>
              </div>
              <div className="row row4">
                <div className="col-8">
                  <span className="humidity">Humidity</span>
                </div>
                <div className="col-4">
                  <span className="pourcentage" id="humidity">
                    {weatherData.humidity} %
                  </span>
                </div>
              </div>
              <div className="row row5">
                <div className="col-8">
                  <span className="wind">Wind</span>
                </div>
                <div className="col-4">
                  <span className="kmh" id="windspeed">
                    {Math.round(weatherData.wind * 3.6)} km/h
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
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
    const apiKey = "0c1a639b4888a93ab5ae1ed2074d5083";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return "Loading ...";
  }
}
