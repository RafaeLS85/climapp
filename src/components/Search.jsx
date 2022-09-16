import { useState } from "react";
import { FaSistrix } from "react-icons/fa";
import { CityList } from "./CityList";

export function Search() {
  const [cityList, setCityList] = useState();
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

    if(!inputValue) {
      setLoading(false);
      setCityList([]);
      return
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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="city"
          placeholder="search by city"         
        />
        <button type="submit">
          <FaSistrix />
        </button>
      </form>

      {loading && <p>Loading...</p>}      

      {cityList && <CityList list={cityList} />}     

    </div>
  );
}
