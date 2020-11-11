import React from 'react';
import style from "./NoResults.module.css";
import image from "./dk.png";

export const NoResults = () => {
  
  return(
    
    <div className={style.flexing}>
      <div>
      <h1 className={style.galinhas}>
      Nenhum resultado encontrado
      </h1>
      </div>
      <br/>
     
      <img className={style.image} src={image} alt=""/>
      
    </div>
    
  );
};