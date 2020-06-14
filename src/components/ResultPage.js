import React, { useState } from 'react'

import SideBar from './SideBar'
import Pin from './Pin'
import SearchBar from './SearchBar'
import InfoContainer from './InfoContainer'
import TagForm from './TagForm'
import Backdrop from './Backdrop'

import classes from './ResultPage.module.css'

const data = [
    {
        name: "Eric Adams",
        party: "(D)",
        contactInfo: {
        phones: [
            "718-266-6666"
        ],
        emails: [
            "AskEric@brooklynbp.nyc.gov"
        ],
        channels: [
            {
                type: "Facebook",
                id: "BPEricAdams"
            },
            {
                type: "Twitter",
                id: "BPEricAdams"
            }
        ]
    },
    role: {
        title: "Borough President",
        description: `Borough president is an elective office in each of the five boroughs of New York City. For most of the city's history, the office exercised significant executive powers within each borough, and the five borough presidents also sat on the New York City Board of Estimate. Since 1990, the borough presidents have been stripped of a majority of their powers in the government of New York City.
        Borough presidents advise the mayor, comment on land-use items in their borough, advocate borough needs in the annual municipal budget process, appoint some officials and community board members, and serve ex officio as members of various boards and committees. They generally act as advocates for their boroughs to mayoral agencies, the city council, the New York State government, public corporations, and private businesses. Their authorizing law is codified in title 4, sections 81 to 85 of the New York City Charter, while their regulations are compiled in title 45 of the New York City Rules.`,
        tag: "Borough president is an elective office in each of the five boroughs of New York City."
    }
}, {
    name: "Scott M. Stringer",
    party: "(D)",
    contactInfo: {
        phones: [
            "(212) 669-3916"
        ],
        emails: [
            "action@comptroller.nyc.gov"
        ],
        channels: [
            {
                type: "Facebook",
                id: "scottstringernyc"
            },
            {
                type: "Twitter",
                id: "NYCComptroller"
            }
        ]
    },
    role: {
        title: "Comptroller",
        description: `The comptroller is essentially the city's chief financial officer, whose job is to "ensure the financial health of New York City by advising the Mayor, the City Council, and the public of the City's financial condition," according to the comptroller's government website.`,
        tag: "The comptroller is essentially the city's chief financial officer."
    }
},
{
    name: "Jumaane D. Williams",
    party: "(D)",
    contactInfo: {
        phones: [
            "(212) 669-7200"
        ],
        emails: [
            "reception@advocate.nyc.gov"
        ],
        channels: [
            {
                type: "Facebook",
                id: "NYCPublicAdvocate"
            },
            {
                type: "Twitter",
                id: "nycpa"
            }
        ]
    },
    role: {
        title: "Public Advocate",
        description: `The office of New York City Public Advocate is a citywide elected position in New York City, which is first in line to succeed the mayor. The office serves as a direct link between the electorate and city government, effectively acting as an ombudsman, or watchdog, for New Yorkers.`,
        tag: "A direct link between the electorate and city government."
    }
},

{
    name: "Community Board",
    party: "",
    contactInfo: {
        phones: [
            "(718) 266-8800"
        ],
        emails: [
            "bk11@cb.nyc.gov"
        ],
        channels: [
            {
                type: "Facebook",
                id: "brooklyncb11"
            },
            {
                type: "Twitter",
                id: "N/A"
            }
        ]
    },
    role: {
        title: "Community Board",
        description: `The Community Boards play an important role in improving the quality of life for all New Yorkers. The purpose of each New York City Community Board is to encourage and facilitate the participation of citizens within City government within their communities, and the efficient and effective organization of agencies that deliver municipal services in local communities and boroughs.`,
        tag: "Community Boards are autonomous City agencies and members are City officers."
    }
}

]

/*
    The result page containing the visualization of the user's represantives
    as well as a side bar and search bar
*/
const ResultPage = () => {
    const [ showTags, setShowTags ] = useState(false)
    const [ showInfo, setShowInfo ] = useState(false)
    const [ currentIndex, setCurrentIndex ] = useState(-1)
    const [ tags, setTags ] = useState([])

    const setInfoHandler = index => {
        setShowInfo(true)
        setCurrentIndex(index)
    }

    return (
        <section className = { classes.ResultPage }>
            <SideBar showTags = { showTags } setShowTags = { setShowTags } />

            <div className = { classes.Container }>
                <div className = { showInfo ? classes.ContentHalf : classes.ContentFull }>
                    {
                        showTags 
                            ? <TagForm closeTagForm = { () => setShowTags(false) } /> 
                            : null
                    }

                    <Backdrop show = { showTags || showInfo } />
                    <SearchBar />
                    { data.map((person, index) =>
                         <Pin 
                            key = { index }
                            index = { index } 
                            name = { person.name } 
                            title = { person.role.title }
                            tag = { person.role.tag }
                            description = { person.role.description }
                            clicked = { () => setInfoHandler(index) } /> )}
                </div>
                { 
                    showInfo 
                        ? <InfoContainer data = { data[currentIndex] } closeShowInfo = { () => setShowInfo(false) } /> 
                        : null 
                }
            </div>
            
        </section>
    )
}

export default ResultPage