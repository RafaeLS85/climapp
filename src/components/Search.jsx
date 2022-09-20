import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaSistrix } from "react-icons/fa";
import './Search.css'
import { Spinner } from "./Spinner";

export default function Search({setNewLocation}) {
  
    const OPEN_WEATHER_API_KEY = import.meta.env.VITE_OPEN_WEATHER_KEY; 
    const [ fetching, setFetching ] = useState(false)
    const { t, i18n } = useTranslation('translation');
    const searchNewLocation = async (inputValue) => {   
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${OPEN_WEATHER_API_KEY}`;  
      try {  
        setFetching(true)    
        const response = await fetch(url, { method: 'GET' });
        const data = await response.json();        
        if(data.cod == '404') {
          alert(data.message)
          setFetching(false)
          return
        }        
        setNewLocation(data)
        setFetching(false)
        console.log(data)
      } catch (error) {
        alert(error.message) 
        setFetching(false)    
      }  
    };  
  
    function handleSubmit(event) {
      event.preventDefault();      
      searchNewLocation(event.target.city.value);
    }
  
    return (
      <>
        <div className="flex p-8">
          <form onSubmit={handleSubmit} className="form">
            <input
              type="search"
              name="city"
              id="city"
              placeholder={t('placeholder_search')}
              className="search-field"
              />
            <button type="submit" className="search-button">
              <FaSistrix />
            </button>
          </form> 
          { fetching ? <Spinner /> : null }         
        </div>      
      </>
    );
  }
  