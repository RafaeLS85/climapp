import { WiDaySunny } from "react-icons/wi";

export function Card({ weather }) {

  const kelvinToCelsius = (value) =>  {       
    return Math.round( (value - 273.15) * 100 ) / 100;
  }

  console.log(weather);

  const { main, name } = weather;

  return (
    <article>
      <h3>Current location: {name}</h3>  
     
      <p> Temperature: { kelvinToCelsius(main.temp) }</p>
    </article>
  );
}
