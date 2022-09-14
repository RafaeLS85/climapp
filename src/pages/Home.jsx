import { Card } from "../components/Card";
import { Search } from "../components/Search";
import "../App.css"
import { useLocation } from "../hooks/useLocation";
import { ActualLocation } from "../components/ActualLocation";

export function Home() {

  const handleChange = (data) => {
    console.log(data)
  }  
  
  const { latitude, longitude } = useLocation()


  return (
    <div className="container">
      <h1 className="text-2xl font-bold underline">Climapp v1</h1>
      <Search onSearchChange={handleChange} />
      <Card /> 

       {
        latitude && longitude && <ActualLocation lat={latitude} lon={longitude}  />
       }     


    </div>
  );
}
