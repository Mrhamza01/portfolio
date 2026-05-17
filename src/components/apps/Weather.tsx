import React, { useEffect, useState } from "react";
import { fetchWeather, fetchWeatherForecast, type ForecastDay, type WeatherData } from "~/utils/publicApis";

export default function Weather() {
  const [current, setCurrent] = useState<WeatherData | null>(null);
  const [forecast, setForecast] = useState<ForecastDay[]>([]);

  useEffect(() => {
    Promise.all([fetchWeather(), fetchWeatherForecast()])
      .then(([c, f]) => {
        setCurrent(c);
        setForecast(f);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="size-full bg-gradient-to-b from-sky-400 to-sky-600 text-white p-6 overflow-y-auto">
      <h1 className="text-2xl font-semibold">Faisalabad</h1>
      {current && (
        <div className="mt-4">
          <p className="text-6xl font-extralight">{current.temperature}°</p>
          <p className="text-xl opacity-90">{current.label}</p>
          <p className="text-sm opacity-70 mt-2">Humidity {current.humidity}%</p>
        </div>
      )}
      <h2 className="mt-8 text-sm font-bold uppercase tracking-wider opacity-70">5-Day Forecast</h2>
      <ul className="mt-3 space-y-2">
        {forecast.map((d) => (
          <li key={d.date} className="flex justify-between bg-white/10 rounded-lg px-4 py-2">
            <span>{d.date}</span>
            <span>{d.min}° / {d.max}°</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
