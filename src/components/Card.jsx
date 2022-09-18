
import { getDayName } from "../helpers/dates";
import { kelvinToCelsius } from "../helpers/tempConversor";
import "./Card.css";
import { WeatherIcon } from "./WeatherIcon";

export function Card({ weather }) {
  console.log(weather);

  const { main, name } = weather; 
  const icon = weather.weather[0].icon 
  const description = weather.weather[0].description

  const today = new Date();

  return (
    <article className="article-content">
      <div        
        className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <div className="flex mb-4">
          <div className="w-1/2">
            <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h3>
             <p className="text-gray-900 dark:text-white text-base">{ getDayName(today.toString())  }</p>
          </div>
          <div className="w-1/2 capitalize tracking-tight text-gray-900 dark:text-white">{description}</div>
        </div>
        <div className="flex mb-4">
          <div className="w-1/2">
            <p className="text-7xl font-bold tracking-tight text-gray-900 dark:text-white">{ parseInt( kelvinToCelsius(main.temp)) }º<small>c</small></p>
          </div>
          <div className="w-1/2 font-bold tracking-tight text-gray-900 dark:text-white" style={{
           
          }} >
            
            
              <WeatherIcon icon={icon}/>
           
            
            </div>
        </div>

        <div className="flex mb-4">
          <div className="w-1/2 font-bold tracking-tight text-gray-900 dark:text-white">
            <h3>Highest</h3>
            <div>
            { parseInt( kelvinToCelsius(main.temp_max)) }º<small>c</small>
            </div>
          </div>
          <div className="w-1/2 font-bold tracking-tight text-gray-900 dark:text-white">
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
