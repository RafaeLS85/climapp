import "../App.css";
import { useLocation } from "../hooks/useLocation";
import { ActualLocation } from "../components/ActualLocation";

export function Home() {
  const { latitude, longitude } = useLocation();  

  return (
    <div>           
        {latitude && longitude && (
          <ActualLocation lat={latitude} lon={longitude} />
        )}      
    </div>
  );
}
