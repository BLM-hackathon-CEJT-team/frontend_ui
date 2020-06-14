import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import classes from './InfoContainer.module.css'

const Header = ({ name, party }) => (
    <h1 className = { classes.InfoHeader }>{ name + " " + party }</h1>
)

const Role = ({ title, description }) => (
    <div className = { classes.RoleContainer }>
        <h4 className = { classes.RoleTitle }>{ title }</h4>
        <p className = { classes.RoleDescription }>{ description }</p>
    </div>
)

const ContactInfo = ({ iconPackage, icon, data }) => (
    <div className = { classes.ContactInfo }>
        <FontAwesomeIcon 
            icon = { [ iconPackage, icon ] } 
            className = { classes.Icon } />
        <p className = { classes.ContactInfoData }>{ data }</p> 
    </div>
)

/*
    Reps tag name on social media will be listed on the id
    socialMediaType.id
*/
const ContactInfoContainer = ({ phone, email, facebook, twitter }) => (
    <div className = { classes.ContactInfoContainer }>
        <ContactInfo iconPackage = "fas" icon = "phone" data = { phone } />
        <ContactInfo iconPackage = "fas" icon = "at" data = { email } />
        <ContactInfo iconPackage = "fab" icon = "facebook" data = { facebook.id } />
        <ContactInfo iconPackage = "fab" icon = "twitter" data = { twitter.id } />
    </div>
)

const InfoContainer = ({ data, closeShowInfo }) => (
    <div className = { classes.InfoContainer }>
        <FontAwesomeIcon 
            icon = { [ 'fas', 'times' ] } 
            className = { classes.CloseIcon }
            onClick = { closeShowInfo } />
        <Header name = { data.name } party = { data.party } />
        <Role title = { data.role.title } description = { data.role.description } />
        <h4 className = { classes.Label }>Contact Info</h4>
        <ContactInfoContainer 
            phone = { data.contactInfo.phones[0] }
            email = { data.contactInfo.emails[0] }
            facebook = { data.contactInfo.channels[0] }
            twitter = { data.contactInfo.channels[1] } />
    </div>
)

export default InfoContainer 