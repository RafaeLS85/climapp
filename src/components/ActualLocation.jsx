import { getBackroundImage } from "../helpers/getBackroundImage";
import { useFetch } from "../hooks/useFetch";
import { Card } from "./Card";
import { Search } from "./Search";

export function ActualLocation({ lat, lon }) {
  const OPEN_WEATHER_API_KEY = import.meta.env.VITE_OPEN_WEATHER_KEY;

  const urlOpenApi = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_API_KEY}`;

  const options = {
    method: "GET",
  };

  const { data, error, loading } = useFetch(urlOpenApi, options);

  if (loading) return <p>Loading..</p>;

  if (error) return <p>Error on get actual location</p>;

  if (data) {
    return (
      <div
        className="myConteiner"
        style={{
          backgroundImage: `url(${getBackroundImage(data) || ""})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        {<Card weather={data} />}

        <div className="content">
          <h1 className="text-2xl font-bold underline">Climapp v1</h1>
          <Search />
        </div>
      </div>
    );
  }
}
