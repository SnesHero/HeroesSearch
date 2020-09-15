import React, {useEffect, useState } from 'react';
import {Heroes} from "../../components";
import "./App.css";

const App = () => {
  //const APP_ID = "6a65f9e5";
 // const APP_KEY = "900c15e594f8d16a10438b3451575bd8";
  const ACCESS_TOKEN = "2860483204056912";

  const [heroes, setHeroes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('batman');

  useEffect(() => {
    getHeroes();
  }, [query]);

  const getHeroes = async () => {
    const response = await fetch (
      `https://www.superheroapi.com/api.php/${ACCESS_TOKEN}/search/${query}`
    );
    const data = await response.json();
    setHeroes(data.results);
    console.log(data.results);
  };

  const updateSearch = e =>{
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('')
  };


  return(
    
    <div className="App">
      <h1 className="frangos">Nelson Heroes</h1>
      <form onSubmit={getSearch} className="search-form">
        <input 
        className="search-bar" 
        type="text" 
        value={search} 
        onChange={updateSearch}
        />

        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      {heroes.map(hero => (
        <Heroes 
          key={hero.id}
          title={hero.name} 
          full_name={hero.biography["full-name"]}
          image={hero.image.url}
          powerstats={hero.powerstats}/>
      ))}
      </div>
    
  );
};

export default App; 