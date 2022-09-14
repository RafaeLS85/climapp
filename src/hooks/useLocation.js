import { useEffect, useState } from "react";

export function useLocation(){

    const [latitude, setLatitude] = useState()
    const [longitude, setLongitude] = useState()

   useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {

        console.log(position.coords.latitude, position.coords.longitude)

        setLatitude(position.coords.latitude)
        setLongitude(position.coords.longitude)
    })
   }, []) 
   return { latitude, longitude }
}