export function ActualLocation({ lat, lon }){

      // const urlOpenApi = `https://api.openweathermap.org/data/2.5/weather?lat=${lattitude}&lon=${longitude}&appid=${OPEN_WEATHER_API_KEY}` 

  // const options = {
  //  method: "GET",
  //  headers: {
  //    "Content-Type": "application/json; charset=utf-8",
  //  }
  // }

  // const { data, error, loading } = useFetch(urlOpenApi, options)


    return ( <div>Actual location:  {lat}, {lon}   </div> )


}