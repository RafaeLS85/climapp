import { useState } from "react";
import { FaSistrix } from "react-icons/fa";
import "./Search.css";
import { Spinner } from "./Spinner";

export function Search() { 
  
  const OPEN_WEATHER_API_KEY = import.meta.env.VITE_OPEN_WEATHER_KEY;  

  const [location, setLocation] = useState();
  const [loading, setLoading] = useState(false);

  const API_key = import.meta.env.VITE_RAPID_API_KEY;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": API_key,
      "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
    },
  }; 

  // fill the dropdown 
  const searchCityList = async (inputValue) => {
    setLoading(true);

    if (!inputValue) {
      setLoading(false);
      setCityList([]);
      return;
    }       

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${OPEN_WEATHER_API_KEY}`


    try {      
      const response = await fetch(url, { method: 'GET' });
      const data = await response.json();  
      console.log(data) 
      if(data.cod == '404') alert(data.message)      
      setLoading(false);
    } catch (error) {
      alert(error.message)
      setLoading(false);
    }

  };  

  function handleSubmit(event) {
    event.preventDefault();
    console.log("submit", event.target.city.value);
    searchCityList(event.target.city.value);
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
      {/* replace list for serach dropdown */}
      {/* <Card weather={children.props} /> */}
      {/* {<CityList list={cityList} />} */}
    </div>
  );
}
