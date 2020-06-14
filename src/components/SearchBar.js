import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import classes from './SearchBar.module.css'

const SearchBar = () => {
    return (
        <div className = { classes.InputContainer }>
            <input className = { classes.Input } placeholder = "11214" />
            <FontAwesomeIcon 
                icon = { [ 'fas', 'search' ] } 
                className = { classes.Icon } /> 
        </div>
        
    )
}

export default SearchBar