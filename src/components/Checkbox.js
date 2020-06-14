import React from 'react'

import classes from './Checkbox.module.css'

const Checkbox = ({ label, value, changed }) => (
    <div className = { classes.CheckboxContainer }>
        <input 
            type = "checkbox" 
            className = { classes.Checkbox }
            checked = { value }
            onChange = { () => changed(!value) } />
        <label>{ label }</label>
    </div>
)

export default Checkbox