import React, { useEffect, useState } from "react";
//import "./App.css";

// Esse é o antigo App.js

export default () => {
  const ACCESS_TOKEN = "104619144729990";

  const [heroes, setHeroes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("batman");
  const [resp, setResp] = useState(null);

  useEffect(() => {
    getHeroes();
  }, [query]);




  const getHeroes = async () => {
    const response = await fetch(
      `https://www.superheroapi.com/api.php/${ACCESS_TOKEN}/search/${query}`
    );
    const data = await response.json();
    
    if (data.response === "success"){
      setResp(true);
      setHeroes(data.results)
    }
    else{
      setResp(false);
      setHeroes([])
    }
    console.log(data);
    

    
   
    // setResp(response);
  };
  console.log(heroes);
  

  

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };
  return {
    heroes,
    search,
    query,
    resp,
    getHeroes,
    updateSearch,
    getSearch,
  };
};
