import React from 'react'

import Pin from '../components/Pin'

import classes from './CommunityBoardMembers.module.css'

const CommunityBoardMembers = () => (
    <div className = { classes.Container }>
        <Pin
            name = "William R. Guarinello"
            title = "Board Member"
            setWhite = { true } />
        <Pin
            name = "Laurie Windsor"
            title = "Board Member"
            setWhite = { true }   />
        <Pin
            name = "Sonia Valentin"
            title = "Board Member"
            setWhite = { true }   />
        <Pin
            name = "Man Wai Lau"
            title = "Board Member"
            setWhite = { true }   />
    </div>
)

export default CommunityBoardMembers