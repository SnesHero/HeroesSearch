import React, { useEffect, useState } from "react";
import { Heroes } from "../../components";
import { NoResults } from "../../components/NoResults/NoResults";
import useResults from "./useResults";
import style from "./Results.module.css";

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
    <div className={style.App}>
     
      {/* {resp = "success" &&( 
        //console.log("foi"))} */}
      <h1 className={style.frangos}>Nelson Heroes</h1>
      <p className={style.frangos}> A simple API search application made with React </p>
      <form onSubmit={getSearch} className={style.searchform}>
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />

        <button className={style.searchbutton} type="submit">
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
