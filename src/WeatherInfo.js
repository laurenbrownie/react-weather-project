import React from "react";
import TodaysDate from "./TodaysDate";
import TemperatureInfo from "./TemperatureInfo";

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
          <TemperatureInfo celsius={props.data.temperature} />
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
