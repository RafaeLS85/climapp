import { FaSistrix } from "react-icons/fa";

export function Search({ onSearchChange }) {
  const API_key = import.meta.env.VITE_RAPID_API_KEY;
  const lat = 39.31;
  const lon = -74.5;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": API_key,
      "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
    },
  };

  const searchCityWeather = async (inputValue) => {

    const url = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${inputValue}`;
    const response = await fetch(url, options );
    const json = await response.json();
    const { data } = json;
    console.log({data})

    // need to get latitude and longitude from response.
    const formatData = data.map((city) => {
      return {
        value: `${city.latitude} ${city.longitude}`,
        label: `${city.name}, ${city.countryCode}`,
      };
    });

    console.log(formatData);
    // and then call another api => https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
  };

  function handleChange(event) {
    console.log(event.target.value);
    onSearchChange(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("submit", event.target.city.value);
    searchCityWeather(event.target.city.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="city"
        placeholder="search by city"
        onChange={handleChange}
      />
      <button type="submit">
        <FaSistrix />
      </button>
    </form>
  );
}
