import React from 'react'

import ericAdams from '../Assets/ericAdams.jpg'
import scottStringer from '../Assets/scottStringer.jpg'
import juamaaneWilliams from '../Assets/JumaaneWilliams.png'
import communityBoard from '../Assets/communityBoard.jpg'

import classes from './Pin.module.css'

const getImageSrc = index => {
    let src = null

    switch(index) {
        case 0:
            src = ericAdams
            break
        case 1:
            src = scottStringer
            break
        case 2:
            src = juamaaneWilliams
            break
        case 3:
            src = communityBoard
            break
        default: return // ERROR
    }

    return src
}

const getPinClass = index => {
    let cssClass = null

    switch(index) {
        case 0:
            cssClass = classes.Pin1
            break
        case 1:
            cssClass = classes.Pin2
            break
        case 2:
            cssClass = classes.Pin3
            break
        case 3:
            cssClass = classes.Pin4
            break
        default: return // ERROR
    }

    return cssClass
}

const Pin = ({ name, title, tag, clicked, index }) => {
    const cssClasses = [ classes.Pin ]
    const positionClass = getPinClass(index)
    cssClasses.push(positionClass)
    
    return (
        <div 
            className = { cssClasses.join(' ') }
            onClick = { clicked }>
            <div className = { classes.Picture }>
                <img className = { classes.Image } src = { getImageSrc(index) } />
            </div>
            <div className = { classes.Info }>
                <h5 className = { classes.Name }>{ name }</h5>
                <p className = { classes.Title }>{ title }</p>
                <p className = { classes.Description }>
                    { tag }
                </p>
            </div>
        </div>
    )
}

export default Pin