import React, {useEffect, useState } from 'react';

export const Searchbar = ({query}) => {

    return(
        <form className="search-form">
        <input
        className="search-bar"
        type="text" 
        />
        <button className="search-button" type="submit">
            Search
        </button>
    </form>
    );

};