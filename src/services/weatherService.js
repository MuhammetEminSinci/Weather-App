// src/services/weatherService.js

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = import.meta.env.VITE_WEATHER_BASE_URL;

export const getWeatherByCity = async (city) => {
  if (!city) throw new Error("Lütfen bir şehir adı giriniz.");

  // OpenWeatherMap çağrısı (Metric birim sistemi ile)
  const response = await fetch(
    `${BASE_URL}weather?q=${city}&units=metric&lang=tr&appid=${API_KEY}`
  );

  // 404 veya 401 gibi hataları kontrol et
  if (!response.ok) {
    if (response.status === 404) {
      throw new Error("Şehir bulunamadı. Lütfen kontrol edip tekrar deneyin.");
    } else if (response.status === 401) {
      throw new Error("API Anahtarı geçersiz. .env dosyasını kontrol edin.");
    } else {
      throw new Error("Bir hata oluştu. Lütfen daha sonra tekrar deneyin.");
    }
  }

  const data = await response.json();

  // Veriyi UI için sadeleştirip dönüyoruz
  return {
    id: data.id,
    name: data.name,
    country: data.sys.country,
    temp: Math.round(data.main.temp), // Dereceyi yuvarla
    description: data.weather[0].description, // "parçalı bulutlu" vs.
    icon: data.weather[0].icon, // ikon kodu (örn: 10d)
    humidity: data.main.humidity,
    wind: data.wind.speed,
  };
};