import "../App.css";
import { useLocation } from "../hooks/useLocation";
import { getBackroundImageByCode } from "../helpers/getBackroundImage";
import { Search } from '../components/Search'
import { Card } from "../components/Card";

export function Home() {

  const {latitude, longitude, data, error, loading } = useLocation()
 
  if (loading) return <p>Loading..</p>;

  if (error) return <p>Error on get actual location</p>;

  if(data){
    console.log(data)
    return (
      <div
        className="myContainer"
        style={{
          backgroundImage: `url(${getBackroundImageByCode(data?.weather[0].main) || ""})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: '100vh', 
          margin: '0px'
        }}
      >
       <Search />

        <Card weather={data}  />

      </div>
    );
  } 

}
