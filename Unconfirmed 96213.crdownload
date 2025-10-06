import React, { useState } from "react";
import "./App.css";

const API_KEY = "a4ec41f51e560f657cfe107af13fe1a8"; // Your OpenWeatherMap API key

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async (e) => {
    e.preventDefault();
    if (!city) return;

    setLoading(true);
    setError("");
    setWeather(null);
    setForecast([]);

    try {
      // Current weather
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      const data = await response.json();

      if (data.cod !== 200) {
        setError(data.message);
        setLoading(false);
        return;
      }
      setWeather(data);

      // 7-day forecast using One Call API
      const { lat, lon } = data.coord;
      const forecastRes = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&units=metric&appid=${API_KEY}`
      );
      const forecastData = await forecastRes.json();
      setForecast(forecastData.daily.slice(0, 7)); // 7-day forecast

    } catch (err) {
      setError("Something went wrong!");
    }
    setLoading(false);
  };

  // Dynamic background based on weather
  const getBackgroundClass = () => {
    if (!weather) return "app";
    const condition = weather.weather[0].main.toLowerCase();
    if (condition.includes("cloud")) return "app cloudy";
    if (condition.includes("rain") || condition.includes("drizzle")) return "app rainy";
    if (condition.includes("snow")) return "app snowy";
    if (condition.includes("clear")) return "app sunny";
    return "app";
  };

  return (
    <div className={getBackgroundClass()}>
      <h1>🌤️ Live Weather Dashboard</h1>
      <form onSubmit={fetchWeather} className="form">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Get Weather</button>
      </form>

      {loading && <p className="info">Loading...</p>}
      {error && <p className="error">{error}</p>}

      {weather && (
        <div className="weather-card">
          <h2>{weather.name}, {weather.sys.country}</h2>
          <p className="temp">{Math.round(weather.main.temp)}°C</p>
          <p>{weather.weather[0].main}</p>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt="weather icon"
          />
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind: {weather.wind.speed} m/s</p>
        </div>
      )}

      {forecast.length > 0 && (
        <div className="forecast-grid">
          {forecast.map((day, idx) => (
            <div className="forecast-card" key={idx}>
              <p>{new Date(day.dt * 1000).toLocaleDateString("en-US", { weekday: "short" })}</p>
              <img
                src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                alt="icon"
              />
              <p>{Math.round(day.temp.day)}°C</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
