// src/components/SearchBar.jsx
import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city);
      setCity(""); // Arama sonrası inputu temizle
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        type="text"
        placeholder="Şehir adı girin (örn: Ankara)"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit">Ara</button>
    </form>
  );
};

export default SearchBar;