import React from 'react'
import { useSearchParams } from 'react-router-dom'

function Search() {
   const[searchParams, setSearchParams] = useSearchParams();
   const handleSearch = (e) => {
    e.preventDefault();
    const data = searchParams.get('q');
    const age = searchParams.get('age');
    alert(data + " " + age);
   }
  return (
    <div>
      <h1>This is a search page</h1>
      <button onClick={() => setSearchParams({q:"Tendulkar"})}>Show All Users</button>
      <form onSubmit={handleSearch}>
        <label htmlFor="">Search</label>
        <input type="text" placeholder='Search' onChange={(e) => setSearchParams({q:e.target.value})}/>
        <br /><br />
        <input type="submit" value="Search" />
        <input type="button" value="Reset" onClick={() => setSearchParams({})} />
      </form>
    </div>
  )
}

export default Search
