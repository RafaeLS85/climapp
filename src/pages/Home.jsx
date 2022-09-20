import { useLocation } from "../hooks/useLocation";
import { Card } from "../components/Card";
import { Spinner } from "../components/Spinner";
import { useState } from "react";
import './Home.css'
import { Footer } from "../components/Footer";
import MainContainer from "../components/layout/MainContainer";
import Search from "../components/Search";
import { SelectLanguage } from "../components/SelectLanguage";

export function Home() { 
 
  const [ newLocation, setNewLocation ] = useState();  
  const { data, error, loading } = useLocation()  

  if (loading) return <Spinner />;

  if (error) return <p>Error on get location</p>;

  if(data){   
    return (
      <MainContainer data={newLocation?.weather[0].main ?? data?.weather[0].main}>
          <Search setNewLocation={setNewLocation}/>    
          <SelectLanguage />         
          <Card weather={newLocation ?? data } />
          <Footer />
      </MainContainer>        
    );
  } 
}