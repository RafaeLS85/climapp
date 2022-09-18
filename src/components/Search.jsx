import { useState } from "react";
import { FaSistrix } from "react-icons/fa";
import { Card } from "./Card";
import { CityList } from "./CityList";
import './Search.css'

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
    <div className="p-8">

    {/* <div className="mt-5 md:col-span-2 md:mt-0">
      <form onSubmit={handleSubmit}>       
        <div className="col-span-6 sm:col-span-3">
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">City name</label>              
                <input  placeholder="Enter location" type="text" name="city" id="city" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
              </div>
        <button type="submit">
          <FaSistrix />
        </button>
      </form>
      {loading && <p>Loading...</p>}           
     {cityList && <CityList list={cityList} />}  
    </div> */}

    
      <form onSubmit={handleSubmit} className="form">
        <input type="search" name="city" id="city" placeholder="Enter location"  className="search-field" />
        <button type="submit" className="search-button">        
          <FaSistrix />
        </button>
      </form>
    

    </div>
  );
}
