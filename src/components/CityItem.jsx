export function CityItem({city}){

    const { country, name, region } = city;
    // const urlOpenApi = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_API_KEY}`  
    return (
        <li>
            { name }, { region}, { country }           
        </li>

    )
}