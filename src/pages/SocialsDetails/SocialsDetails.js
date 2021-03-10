import React from "react"
import SocialsDetails from '../../components/SocialsDetails/SocialsDetails'
import { SocialDetailsHM } from '../../components'
import { HomeObjTwo } from '../Homepage/Data'

const SocialsDetailss = (props) => {
    return(
        <>
            <SocialsDetails {...props}/>
            <SocialDetailsHM/>
        </>
    )
}

export default SocialsDetailss