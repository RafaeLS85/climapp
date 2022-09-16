export const kelvinToCelsius = (value) =>  {       
    return Math.round( (value - 273.15) * 100 ) / 100;
}

export const fahrenheitToCelsius = (value) =>  {       
    return (value - 32) * 5/9;
}

export const celsiusToFahrenheit = (value) =>  {       
    return (value * 9) / 5 + 32 ; 
}