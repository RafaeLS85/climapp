
import { getDayName } from "../helpers/dates";
import { getBackroundColorByDesc } from "../helpers/getBackroundImage";
import { kelvinToCelsius } from "../helpers/tempConversor";
import "./Card.css";
import { WeatherIcon } from "./WeatherIcon";

export function Card({ weather }) {
  console.log(weather);

  const { main, name } = weather; 
  const icon = weather.weather[0].icon 
  const description = weather.weather[0].description
  const maindesc = weather.weather[0].main

  const today = new Date();  

  return (
    <article className="article-content ">
      <div        
        className="block p-6 rounded-lg border border-gray-200 shadow-md  dark:bg-gray-800 dark:border-gray-700"
        style={{
          backgroundColor: `${getBackroundColorByDesc(null)}`,
        }}       
      >
        <div className="flex mb-4">
          <div className="w-1/2">
            <h3 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">{name}</h3>
             <p className="text-gray-900 text-center dark:text-white text-base">{ getDayName(today.toString())  }</p>
          </div>
          <div className="w-1/2 capitalize text-center tracking-tight text-gray-900 dark:text-white">{description}</div>
        </div>
        <div className="flex mb-4">
          <div className="w-1/2">
            <p className="text-7xl mt-5 font-bold text-center tracking-tight text-gray-900 dark:text-white">{ parseInt( kelvinToCelsius(main.temp)) }º<small>c</small></p>
          </div>
          <div className="w-1/2">            
              <WeatherIcon icon={icon}/>           
           </div>
        </div>

        <div className="flex mb-4">
          <div className="w-1/2 font-bold  text-center tracking-tight text-gray-900 dark:text-white">
            <h3>Highest</h3>
            <div>
            { parseInt( kelvinToCelsius(main.temp_max)) }º<small>c</small>
            </div>
          </div>
          <div className="w-1/2 font-bold text-center tracking-tight text-gray-900 dark:text-white">
            <h3>Lowest</h3>
            <div>
            { parseInt( kelvinToCelsius(main.temp_min)) }º<small className="">c</small>
            </div>
            
          </div>
        </div>
      </div>
    </article>
  );
}
