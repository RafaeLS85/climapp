import { mainCodes } from "./weather_conditions_codes";

export function getBackroundImageByCode(code) {

  if (code === mainCodes.clear ) return "codes/Clear.webp";
  if (code === mainCodes.clouds ) return "codes/Clouds.jpg";
  if (code === mainCodes.drizzle ) return "codes/Drizzle.jpg";
  if (code === mainCodes.rain ) return "codes/Rain.jpg";
  if (code === mainCodes.snow ) return "codes/Snow.jpg";  
  if (code === mainCodes.storm ) return "codes/Thunderstorm.jpg"; 

  if (!code) return "fallback.webp";
}
