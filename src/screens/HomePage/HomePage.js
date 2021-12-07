import React from 'react';
import {Searchbar} from "C:/Users/PC/nelson-test/src/components/Searchbar/Searchbar.js";
import "./HomePage.css";

export const HomePage = () => {

    return(
        <div className="home">
            <h1 className="title">Super Nelson Wars</h1>
            <div>Account change test email</div>
           <Searchbar/>

            <div >
                <h3>Escolha entre diversos personagens!</h3>
                <img className="image" src="C:/Users/PC/nelson-test/src/screens/HomePage/placeholder.png" alt=""/>
            </div>

            <div>
                <h3>Compare Stats!</h3>
                <img className="image" src="src/screens/HomePage/placeholder.jpg" alt=""/>
            </div>

            <div>
                <h3>Escolha entre diversos personagens</h3>
                <img className="image" src="src/screens/HomePage/placeholder.jpg" alt=""/>
            </div>
        </div>
        
    );
};