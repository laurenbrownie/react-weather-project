import React from "react";

export default function ForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];

    return days[day];
  }

  return (
    <div>
      <div className="forecastDay">{day()}</div>
      <span className="forecast-temp-max">
        {Math.round(props.data.temp.max)}°
      </span>
      <span className="forecast-temp-min">
        {Math.round(props.data.temp.min)}°
      </span>
    </div>
  );
}
