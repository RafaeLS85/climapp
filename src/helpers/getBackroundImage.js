import { kelvinToCelsius } from "./tempConversor";

export function getBackroundImage(temp) {
  const celsius = kelvinToCelsius(temp?.main?.temp);

  if (celsius >= -50 && celsius <= 10) return "winter.jpg";
  if (celsius >= 10 && celsius < 20) return "autumn.jpg";
  if (celsius >= 20 && celsius < 30) return "spring.jpg";
  if (celsius >= 30 && celsius < 50) return "summer.jpg";

  if (!celsius) return "fallback.webp";
}
