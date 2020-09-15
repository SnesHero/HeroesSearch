import React from 'react';

export const Powerstats = ({combat, durability, intelligence, power, speed, strength}) => {
    return(
        <div>
            <p>{`Combat: ${+ combat}`}</p>
            <p>{`Durability: ${+ durability}`}</p>
            <p>{`Intelligence: ${+ intelligence}`}</p>
            <p>{`Power: ${+ power}`}</p>
            <p>{`Speed: ${+ speed}`}</p>
            <p>{`Strength: ${+ strength}`}</p>
        </div>
    );
};