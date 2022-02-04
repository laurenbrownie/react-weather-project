import React from "react";
import TodaysDate from "./TodaysDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <TodaysDate date={props.data.date} />
        </li>
        <li>Cloudy</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <img src={props.data.iconUrl} alt={props.data.description} />
          <span className="temperature">
            {Math.round(props.data.temperature)}
          </span>
          <span className="unit">°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>precipitation: 2%</li>
            <li>humidity: {props.data.humidity}%</li>
            <li>wind: {props.data.wind}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
