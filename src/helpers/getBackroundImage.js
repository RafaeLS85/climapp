import { kelvinToCelsius } from "./tempConversor";
import { mainCodes } from "./weather_conditions_codes";

export function getBackroundImageByTemp(temp) {
  const celsius = kelvinToCelsius(temp?.main?.temp);

  if (celsius >= -50 && celsius <= 10) return "winter.jpg";
  if (celsius >= 10 && celsius < 20) return "autumn.jpg";
  if (celsius >= 20 && celsius < 30) return "spring.jpg";
  if (celsius >= 30 && celsius < 50) return "summer.jpg";

  if (!celsius) return "fallback.webp";
}


export function getBackroundColorByDesc(desc){  

  if (desc === mainCodes.clear ) return "#0D9DE3";
  if (desc === mainCodes.clouds ) return "#01BFFF";
  if (desc === mainCodes.drizzle ) return "#00CCFF";
  if (desc === mainCodes.rain ) return "#7F9BA6";
  if (desc === mainCodes.snow ) return "#F1F1F1";  
  if (desc === mainCodes.storm ) return "#4E6969"; 

  if (!desc) return "#fff";
}


export function getBackroundImageByCode(code) {

  if (code === mainCodes.clear ) return "codes/Clear.webp";
  if (code === mainCodes.clouds ) return "codes/Clouds.jpg";
  if (code === mainCodes.drizzle ) return "codes/Drizzle.jpg";
  if (code === mainCodes.rain ) return "codes/Rain.jpg";
  if (code === mainCodes.snow ) return "codes/Snow.jpg";  
  if (code === mainCodes.storm ) return "codes/Thunderstorm.jpg"; 

  if (!code) return "fallback.webp";
}
