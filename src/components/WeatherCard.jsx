// src/components/WeatherCard.jsx

const WeatherCard = ({ weather }) => {
  // İkon URL'sini oluştur
  const iconUrl = `https://openweathermap.org/img/wn/${weather.icon}@4x.png`;

  return (
    <div className="weather-card">
      <div className="card-header">
        <h2>{weather.name}, {weather.country}</h2>
        <p className="description">{weather.description}</p>
      </div>

      <div className="card-body">
        <img src={iconUrl} alt={weather.description} className="weather-icon" />
        <div className="temp-container">
          <span className="temp">{weather.temp}°</span>
        </div>
      </div>

      <div className="card-footer">
        <div className="detail-item">
          <span>Nem</span>
          <strong>%{weather.humidity}</strong>
        </div>
        <div className="detail-item">
          <span>Rüzgar</span>
          <strong>{weather.wind} m/s</strong>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;