import { WiDaySunny } from "react-icons/wi";
import { kelvinToCelsius } from "../helpers/tempConversor";
import '../App.css'

export function Card({ weather }) {  

  console.log(weather);

  const { main, name } = weather;

  return (
    <article className="article-content">
      <h3>Your location: {name}</h3>  
     
      <p> Temperature: { kelvinToCelsius(main.temp) }</p>
    </article>
  );
}

