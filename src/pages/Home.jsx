import { useLocation } from "../hooks/useLocation";
import { getBackroundImageByCode } from "../helpers/getBackroundImage";
import { Card } from "../components/Card";
import { Spinner } from "../components/Spinner";
import { useState } from "react";
import { FaSistrix } from "react-icons/fa";
import './Home.css'
import { Footer } from "../components/Footer";
import { useTranslation } from "react-i18next";
import { SelectLanguage } from "../components/SelectLanguage";

export function Home() { 
  const { t, i18n } = useTranslation('translation');

  const OPEN_WEATHER_API_KEY = import.meta.env.VITE_OPEN_WEATHER_KEY; 
  const [ newLocation, setNewLocation ] = useState();
  const [ fetching, setFetching ] = useState(false)
  const { data, error, loading } = useLocation()

  const Search = () => {

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
         <SelectLanguage />
        </div>      
      </>
    );
  }

  if (loading) return <Spinner />;

  if (error) return <p>Error on get location</p>;

  if(data){   
    return (
      <>
        <div        
          className="flex flex-col h-screen justify-between"
            style={{
              backgroundImage: `url(${getBackroundImageByCode( newLocation?.weather[0].main ?? data?.weather[0].main )})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              height: '100vh', 
              margin: '0px',
            }}
          >
          <Search />             
          <Card weather={newLocation ?? data } />
          <Footer />
        </div>
      </>
    );
  } 
}