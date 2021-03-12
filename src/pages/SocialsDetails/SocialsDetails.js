import React from "react"
import SocialsDetails from '../../components/SocialsDetails/SocialsDetails'
import { SocialDetailsHM } from '../../components'
import { HomeObjTwo } from '../Homepage/Data'
import { Helmet } from 'react-helmet'

const SocialsDetailss = (props) => {
    const TITLE = "Hadi's Socials";
    return(
        <>
            <Helmet>
                <title>
                    {TITLE}
                </title>
            </Helmet>
            <SocialsDetails {...props}/>
            <SocialDetailsHM/>
        </>
    )
}

export default SocialsDetailss