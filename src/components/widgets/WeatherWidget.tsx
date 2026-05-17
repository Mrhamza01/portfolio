import React, { useEffect, useState } from "react";
import { fetchWeather, type WeatherData } from "~/utils/publicApis";

interface WeatherWidgetProps {
  onOpenApp?: () => void;
}

export default function WeatherWidget({ onOpenApp }: WeatherWidgetProps) {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchWeather()
      .then(setWeather)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <button
      type="button"
      className="w-72 sm:w-80 text-left"
      onClick={onOpenApp}
    >
      <div className="bg-white/10 dark:bg-black/20 backdrop-blur-3xl border border-white/20 dark:border-white/10 rounded-[2.5rem] p-5 shadow-2xl hover:bg-white/15 transition-all">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center space-x-2">
            <span className="i-heroicons-outline:sun text-lg text-yellow-300" />
            <h3 className="text-[11px] font-bold uppercase tracking-wider opacity-50 dark:text-white">
              Weather
            </h3>
          </div>
          <span className="text-[10px] opacity-40 dark:text-white">Faisalabad</span>
        </div>
        {loading ? (
          <div className="h-12 animate-pulse bg-white/10 rounded-xl" />
        ) : weather ? (
          <div className="flex items-end justify-between">
            <div>
              <p className="text-3xl font-light dark:text-white">{weather.temperature}°C</p>
              <p className="text-sm opacity-70 dark:text-white">{weather.label}</p>
            </div>
            <p className="text-xs opacity-50 dark:text-white">Humidity {weather.humidity}%</p>
          </div>
        ) : (
          <p className="text-xs opacity-50">Unavailable</p>
        )}
      </div>
    </button>
  );
}
