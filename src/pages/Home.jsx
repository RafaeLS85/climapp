import { Card } from "../components/Card";
import { Search } from "../components/Search";
import "../App.css"

export function Home() {

  const handleChange = (data) => {
    console.log(data)

  }   

  return (
    <div className="container">
      <Search onSearchChange={handleChange}/>
      <Card />     
    </div>
  );
}
