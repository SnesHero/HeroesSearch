import React from 'react';
import style from "./NoResults.module.css";
import image from "./dk.png";

export const NoResults = () => {
  
  return(
    
    <div className={style.flexing}>
      <div>
      <h1 className={style.galinhas}>
      No results were found
      </h1>
      <p className={style.galinhas}> Tip: try searching "superman" instead of "super man" </p>
      </div>
      <br/>
     
      <img className={style.image} src={image} alt=""/>
      
    </div>
    
  );
};