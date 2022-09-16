import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { useState } from "react";


export function CityItem({city, index}){
    const [open, setOpen] = useState();
    const { country, name, region } = city;

    const handleOpen = (value) => {
      console.log(open, value)
      setOpen(open === value ? null : value);
    };

    console.log('CityItem', city)
    // const urlOpenApi = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_API_KEY}`  
    return (      
      <Accordion open={open === index}>
        <AccordionHeader onClick={() => handleOpen(index)}>
        { name }, { region}, { country }  
        </AccordionHeader>
        <AccordionBody>
          We're not always in the position that we want to be at. We're
          constantly growing. We're constantly making mistakes. We're constantly
          trying to express ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
    )
}

