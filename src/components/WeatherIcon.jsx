

export function WeatherIcon( {icon} ){
    const image = `http://openweathermap.org/img/wn/${icon}@2x.png`
    return <img className=" mx-auto " src={image} alt='weather icon' />    
}