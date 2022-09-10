import { FaSistrix } from 'react-icons/fa'

export function Search() {

  function handleChange(event) {
    console.log(event.target.value);
  }

  function handleSubmit(event){
    event.preventDefault();
    console.log('submit', event.target.city.value)    
  }

  return (

    <form onSubmit={handleSubmit}>
        <input
        type="text"
        name="city"
        placeholder="search by city"
        onChange={handleChange}        
        />
        <button type='submit'>
            <FaSistrix />
        </button>
    </form>

  );
}
