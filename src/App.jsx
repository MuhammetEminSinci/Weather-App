// src/App.jsx
import { useWeather } from "./hooks/useWeather";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import "./App.css"; // Birazdan oluşturacağız

function App() {
  const { weather, loading, error, fetchWeather } = useWeather();

  const handleSearch = (city) => {
    fetchWeather(city);
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Hava Durumu</h1>
      
      <SearchBar onSearch={handleSearch} />

      {/* Durum Yönetimi (Hata Kontrolü) */}
      <div className="content-area">
        {loading && <p className="loading-msg">Veriler çekiliyor...</p>}
        
        {error && <p className="error-msg">{error}</p>}
        
        {!loading && !error && weather && (
          <WeatherCard weather={weather} />
        )}
      </div>
    </div>
  );
}

export default App;