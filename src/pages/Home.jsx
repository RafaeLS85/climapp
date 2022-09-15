import { Card } from "../components/Card";
import { Search } from "../components/Search";
import "../App.css";
import { useLocation } from "../hooks/useLocation";
import { ActualLocation } from "../components/ActualLocation";
import { useState } from "react";

export function Home() {
  const handleChange = (data) => {
    console.log(data);
  };

  const seassons = ['autumn.jpg', 'spring.jpg', 'summer.jpg', 'winter.jpg']

  const { latitude, longitude } = useLocation();
  const [backgroundImage, setBackgroundImage] = useState("")

  return (
    <div
      className="myConteiner"
      style={{
        backgroundImage: `${backgroundImage || "defaultBackgroundImage"}`,
      }}
    >
      <div className="content">
        <h1 className="text-2xl font-bold underline">Climapp v1</h1>
        <Search onSearchChange={handleChange} />
        {latitude && longitude && (
          <ActualLocation lat={latitude} lon={longitude} />
        )}
      </div>
    </div>
  );
}
