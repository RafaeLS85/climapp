import { Card } from "../components/Card";
import { Search } from "../components/Search";
import { useFetch } from "../hooks/useFetch";

export function Home() {
  const API_key = import.meta.env.VITE_RAPID_API_KEY;
  const lat = 39.31;
  const lon = -74.5;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": API_key,
      "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
    },
  };

  // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
  const { data, loading, error } = useFetch(
    "https://wft-geo-db.p.rapidapi.com/v1/geo/cities",
    options
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;

  return (
    <>

      <Search />
      <Card />
      <div>
        {data?.data.map((item) => (
          <p key={item.id}> {item.city} </p>
        ))}
      </div>
    </>
  );
}
