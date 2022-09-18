import { useEffect, useState } from "react";

export function useLocation() {
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [error, setError] = useState();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {      

      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);

      const OPEN_WEATHER_API_KEY = import.meta.env.VITE_OPEN_WEATHER_KEY;     

      const urlOpenApi = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${OPEN_WEATHER_API_KEY}`;
      const options = {
        method: "GET",
      };

      fetchApi(urlOpenApi, options);
    });
  }, []);

  const fetchApi = async (urlOpenApi, options) => {
    try {
      setLoading(true);
      const response = await fetch(urlOpenApi, options);
      const json = await response.json();
      setData(json);
      setLoading(false);      
    } catch (error) {
      setError(error);
      setLoading(false);
      console.log("error", error);
    }
  };

  return { latitude, longitude, data, error, loading };
}
