import { useFetch } from "../hooks/useFetch";
import { Card } from "./Card";

export function ActualLocation({ lat, lon }) {
  const OPEN_WEATHER_API_KEY = import.meta.env.VITE_OPEN_WEATHER_KEY;  

  const urlOpenApi = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_API_KEY}`;

  const options = {
    method: "GET",
  };

  const { data, error, loading } = useFetch(urlOpenApi, options);

  if(loading) return <p>Loading..</p>

  if(error)  return <p>Error on get actual location</p>

  if(data){
    return (
      <div>
        {
          <Card weather={data}/> 
        }        
      </div>
    );
  }

}
