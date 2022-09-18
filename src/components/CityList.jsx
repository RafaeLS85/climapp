import { CityItem } from "./CityItem";

export function CityList({ list }) {
  return (
    <div class="mx-auto">
      <div class="bg-white shadow-md rounded my-6">
        <table class="text-left w-full border-collapse">
          <thead>
            <tr>
              <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                Country
              </th>
              <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                City
              </th>
              <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
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
