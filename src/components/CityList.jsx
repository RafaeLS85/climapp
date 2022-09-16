import { CityItem } from "./CityItem";

export function CityList({ list }) {

  return (
    <ul>
      {list.map((city, index) => (
        <CityItem key={index} city={city} index={index} />
      ))}
    </ul>
  );
}
