import { useState } from "react";

export function CityItem({ city, index }) {
  const [open, setOpen] = useState();
  const { country, name, region } = city;

  const handleOpen = (value) => {
    console.log(open, value);
    setOpen(open === value ? null : value);
  };

  console.log("CityItem", city);
  // const urlOpenApi = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_API_KEY}`
  return (
    <tr class="hover:bg-grey-lighter">
      <td class="py-4 px-6 border-b border-grey-light">{country}</td>
      <td class="py-4 px-6 border-b border-grey-light">
        {name}, {region}
      </td>
      <td class="py-4 px-6 border-b border-grey-light">      
        <a
          href="#"
          class="text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-blue hover:bg-blue-dark"
        >
          View
        </a>
      </td>
    </tr>
  );
}
