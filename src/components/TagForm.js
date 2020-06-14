import React, { useState } from 'react'

import Checkbox from './Checkbox'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import classes from './TagForm.module.css'

const TagForm = ({ closeTagForm }) => {
    const [ crisis, setCrisis ] = useState(false)
    const [ education, setEducation ] = useState(false)
    const [ labor, setLabor ] = useState(false)
    const [ financial, setFinancial ] = useState(false)
    const [ judicary, setJudicary ] = useState(false)
    const [ oversight, setOverSight ] = useState(false)
    const [ reform, setReform ] = useState(false)
    const [ science, setScience ] = useState(false)

    const inputs = [
        { label: "Crisis", value: crisis, changed: setCrisis },
        { label: "Education", value: education, changed: setEducation },
        { label: "Labor", value: labor, changed: setLabor },
        { label: "Financial Services", value: financial, changed: setFinancial },
        { label: "Judicary", value: judicary, changed: setJudicary },
        { label: "Oversight", value: oversight, changed: setOverSight },
        { label: "Reform", value: reform, changed: setReform },
        { label: "Science", value: science, changed: setScience },
    ]
    console.log(crisis)
    return (
        <div className = { classes.TagContainer }>
            <h1 className = { classes.Label }>Filters</h1>
            <FontAwesomeIcon 
                icon = { [ 'fas', 'times' ] } 
                className = { classes.CloseIcon }
                onClick = { closeTagForm } />
            <div className = { classes.InputContainer }>
                { inputs.map(input => 
                    <Checkbox 
                        label = { input.label } 
                        key = { input.label }
                        value = { input.value }
                        changed = { input.changed } />)}
            </div>
        </div>
    )
}

export default TagForm