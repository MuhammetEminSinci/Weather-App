// src/hooks/useWeather.js
import { useState } from "react";
import { getWeatherByCity } from "../services/weatherService";

export const useWeather = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async (city) => {
    setLoading(true);
    setError(null);
    setWeather(null); // Yeni arama yaparken eski veriyi temizle

    try {
      const data = await getWeatherByCity(city);
      setWeather(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { weather, loading, error, fetchWeather };
};