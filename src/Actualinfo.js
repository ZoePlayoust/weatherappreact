import React from "react";
import "./App.css";

export default function Actualinfo() {
  return (
    <div className="actualInfo">
      <div id="city">Marseille</div>
      <div className="current-date">
        Last updated : Wednesday 10:52 <span id="date"></span>
      </div>
      <div className="row">
        <div className="col-10">
          <div className="row">
            <div className="col-4">
              <img
                id="weather-icon"
                src="http://openweathermap.org/img/wn/10d@2x.png"
                alt="rainy"
              />
            </div>
            <div className="col-4">
              <span className="temperature" id="temperature-variable">
                25
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
                Clear Sky
              </span>
            </div>
          </div>
          <div className="row row4">
            <div className="col-8">
              <span className="humidity">Humidity</span>
            </div>
            <div className="col-4">
              <span className="pourcentage" id="humidity">
                48 %
              </span>
            </div>
          </div>
          <div className="row row5">
            <div className="col-8">
              <span className="wind">Wind</span>
            </div>
            <div className="col-4">
              <span className="kmh" id="windspeed">
                17 km/h
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
