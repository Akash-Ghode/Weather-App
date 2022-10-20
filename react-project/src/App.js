import React, { useState } from 'react';

import { fetchWeather } from './api/fetchWeather';
import './App.css';

const App = () => {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = async (e) => {
    if (e.key === 'Enter') {
      const data = await fetchWeather(query);

      setWeather(data);
      setQuery('');
    }
  }

  return (
    <div className="main-container">
      <input type="text" className="search" placeholder="Search..." value={query} onChange={(e) => setQuery(e.target.value)} onKeyPress={search} />
      {weather.current && (
        <div className="city">
          <h2 className="city-name">
            <span>{weather.location.name}</span>
            <sup>{weather.location.country}</sup>
          </h2>
          <div className="city-temp">
            {Math.round(weather.current.temperature)}
            <sup>&deg;C</sup>
          </div>
          <div className="info">
            <img className="city-icon" src={weather.current.weather_icons[0]} alt={"no"} />
            <p>{weather.current.weather_descriptions[0]}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
