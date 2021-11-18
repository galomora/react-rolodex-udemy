import React from 'react';
import './search-bar.style.css';

export const SearchBar = ({placeholder, changeAction}) => (
    <input className="search" type='search' placeholder={placeholder} onChange={changeAction} />
);