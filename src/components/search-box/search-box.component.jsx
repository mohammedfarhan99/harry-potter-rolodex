import React from 'react';
import './search-box.styles.css';

export const SearchBox = ({placeholder,handleSearchChange})=>{ //destructuring from props
    return(
        <input  
        className = 'search'
        type='search'
         placeholder={placeholder} 
        onChange={handleSearchChange}/>

    );
}
