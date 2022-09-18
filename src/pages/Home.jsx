import { useLocation } from "../hooks/useLocation";
import { getBackroundImageByCode } from "../helpers/getBackroundImage";
import { Search } from '../components/Search'
import { Card } from "../components/Card";
import { Spinner } from "../components/Spinner";

export function Home() {

  const {latitude, longitude, data, error, loading } = useLocation()
 
  if (loading) return <Spinner />;

  if (error) return <p>Error on get location</p>;

  if(data){
    console.log(data)
    return (
      <div        
        style={{
          backgroundImage: `url(${getBackroundImageByCode(data?.weather[0].main) || ""})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: '100vh', 
          margin: '0px'
        }}
      >
       <Search />       
       <Card weather={data} />

      </div>
    );
  } 

}
