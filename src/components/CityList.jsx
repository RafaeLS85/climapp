import { CityItem } from "./CityItem";

export function CityList({ list }) {
  return (
    <div className="mx-auto">
      <div className="bg-white shadow-md rounded my-6">
        <table className="text-left w-full border-collapse">
          <thead>
            <tr>
              <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                Country
              </th>
              <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                City
              </th>
              <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {list.map((city, index) => (
              <CityItem key={index} city={city} index={index} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
