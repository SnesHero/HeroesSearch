import React from 'react';
import style from './heroes.module.css';

export const Heroes = ({title, full_name, image, powerstats}) => {
    return(
        <div className={style.profile}>
            <h1>{title}</h1>
            <p>{full_name}</p>
            <img className={style.image} src={image} alt=""/>
            <pre>
                {
                `Combat: ${+ powerstats.combat}
Durability: ${+ powerstats.durability}
intelligence: ${+ powerstats.intelligence}
power: ${+ powerstats.power}
speed: ${+ powerstats.speed}
strength: ${+ powerstats.strength}
`
                }
            </pre>
        </div>
    );
};
