import React, { useEffect, useState } from "react";
import { Heroes } from "../../components";
import { NoResults } from "../../components/NoResults/NoResults";
import useResults from "./useResults";
//import "./App.css";

// Esse é o antigo App.js

export const Results = () => {
  const {  heroes,
    search,
    query,
    resp,
    getHeroes,
    updateSearch,
    getSearch,
  } = useResults();

  return (
    <div className="App">
     
      //{/* {resp = "success" &&( 
        //console.log("foi"))} */}
      //{/* <h1 className="frangos">Nelson Heroes</h1> */}
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
      {!resp ? 
      <NoResults/> :
       heroes.map((hero) => (
        <Heroes
          key={hero.id}
          title={hero.name}
          full_name={hero.biography["full-name"]}
          image={hero.image.url}
          powerstats={hero.powerstats}
        />
      ))  
      }
    </div>
  );
};
