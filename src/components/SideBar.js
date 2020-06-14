import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import classes from './SideBar.module.css'

/*
    The side bar which contains the menu toggle
*/
const SideBar = ({ showTags, setShowTags }) => (
    <div className = { classes.SideBar }>
        <FontAwesomeIcon 
            icon = { [ 'fas', 'bars' ] } 
            className = { classes.MenuIcon } /> 
        <FontAwesomeIcon 
            icon = { [ 'fas', 'sliders-h' ] } 
            className = { classes.SlidersIcon } 
            onClick = { () => setShowTags(!showTags) }/> 
    </div>
)

export default SideBar