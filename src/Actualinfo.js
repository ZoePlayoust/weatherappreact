import React from "react";
import "./App.css";
import FormatedDate from "./FormatedDate";

export default function Actualinfo(props) {
  return (
    <div className="actualInfo col-6 p-0">
      <div id="city">{props.data.city}</div>
      <div className="current-date">
        <FormatedDate date={props.data.date} />, <span id="date"></span>
      </div>
      <div className="row">
        <div className="col-10">
          <div className="row">
            <div className="col-4">
              <img
                id="weather-icon"
                src={props.data.img}
                alt={props.data.description}
              />
            </div>
            <div className="col-4">
              <span className="temperature" id="temperature-variable">
                {Math.round(props.data.temperature)}
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
                {props.data.description}
              </span>
            </div>
          </div>
          <div className="row row4">
            <div className="col-8">
              <span className="humidity">Humidity</span>
            </div>
            <div className="col-4">
              <span className="pourcentage" id="humidity">
                {props.data.humidity} %
              </span>
            </div>
          </div>
          <div className="row row5">
            <div className="col-8">
              <span className="wind">Wind</span>
            </div>
            <div className="col-4">
              <span className="kmh" id="windspeed">
                {Math.round(props.data.wind * 3.6)} km/h
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
