import { useLocation } from "../hooks/useLocation";
import { getBackroundImageByCode } from "../helpers/getBackroundImage";
// import { Search } from '../components/Search'
import { Card } from "../components/Card";
import { Spinner } from "../components/Spinner";
import { useState } from "react";
import { FaSistrix } from "react-icons/fa";
import '../components/Search.css'

export function Home() {

  const OPEN_WEATHER_API_KEY = import.meta.env.VITE_OPEN_WEATHER_KEY;
  
  const [newLocation, setNewLocation] = useState();

  const {latitude, longitude, data, error, loading } = useLocation()

  const Search = () => {
    const searchNewLocation = async (inputValue) => {           
  
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${OPEN_WEATHER_API_KEY}`  
  
      try {      
        const response = await fetch(url, { method: 'GET' });
        const data = await response.json();  
        console.log(data) 
        setNewLocation(data)
        if(data.cod == '404') alert(data.message)     
        
      } catch (error) {
        alert(error.message)     
      }
  
    };  
  
    function handleSubmit(event) {
      event.preventDefault();
      console.log("submit", event.target.city.value);
      searchNewLocation(event.target.city.value);
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
       
      </div>
    );
  }


  if (loading) return <Spinner />;

  if (error) return <p>Error on get location</p>;

  if(data){
    console.log(data)
    return (
      <div        
        style={{
          backgroundImage: `url(${getBackroundImageByCode( newLocation?.weather[0].main ?? data?.weather[0].main )})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: '100vh', 
          margin: '0px'
        }}
      >
       <Search />
             
       <Card weather={newLocation ?? data } />

      </div>
    );
  } 



}

