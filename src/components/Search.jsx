import { useState } from "react";
import { FaSistrix } from "react-icons/fa";
import { Card } from "./Card";
import { CityList } from "./CityList";
import "./Search.css";
import { Spinner } from "./Spinner";

export function Search() {
  const defaultCities = [
    {
      city: "Miami",
      country: "United States of America",
      countryCode: "US",
      latitude: 35.69278,
      longitude: -100.63889,
      name: "Miami",
      region: "Texas",
      type: "CITY",
    },
    {
      city: "Miami",
      country: "United States of America",
      countryCode: "US",
      latitude: 33.396666666,
      longitude: -110.871666666,
      name: "Miami",
      region: "Arizona",
      type: "CITY",
    },
    {
      city: "Alexander",
      country: "United States of America",
      countryCode: "US",
      latitude: 42.9022,
      longitude: -78.2583,
      name: "Alexander",
      region: "New York",
      type: "CITY",
    },
  ];

  const [cityList, setCityList] = useState(defaultCities);
  const [loading, setLoading] = useState(false);

  const API_key = import.meta.env.VITE_RAPID_API_KEY;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": API_key,
      "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
    },
  };
  const searchCityWeather = async (inputValue) => {
    setLoading(true);

    if (!inputValue) {
      setLoading(false);
      setCityList([]);
      return;
    }

    const url = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${inputValue}`;
    const response = await fetch(url, options);
    const json = await response.json();
    const { data } = json;
    console.log({ data });
    setLoading(false);

    const formatData = data.map((city) => {
      return {
        city: city.city,
        country: city.country,
        countryCode: city.countryCode,
        latitude: city.latitude,
        longitude: city.longitude,
        name: city.name,
        region: city.region,
        type: city.type,
      };
    });

    console.log({ formatData }); // lista con los resultados, mostrar esta lista y hacer que sea clickeable para llamar a la api:

    setCityList(formatData);

    // const urlOpenApi = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_API_KEY}`
  };

  // function handleChange(event) {
  //   console.log(event.target.value);
  //   onSearchChange(event.target.value);
  // }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("submit", event.target.city.value);
    searchCityWeather(event.target.city.value);
  }
  return (
    <div className="p-8">
      <form onSubmit={handleSubmit} className="form">
        <input
          type="search"
          name="city"
          id="city"
          placeholder="Enter location"
          className="search-field"
        />
        <button type="submit" className="search-button">
          <FaSistrix />
        </button>
      </form>
      {loading && <Spinner />}
      {<CityList list={cityList} />}
    </div>
  );
}
