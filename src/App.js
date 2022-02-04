import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather city="Des Moines" />
        <footer>
          coded by Lauren Brown 👩🏼‍💻{" "}
          <a
            href="https://github.com/laurenbrownie/react-weather-project"
            target="_blank"
            rel="noreferrer"
          >
            view source code
          </a>{" "}
          💜 hosted on{" "}
          <a href="https://netlify.com" target="blank" rel="noreferrer">
            netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
