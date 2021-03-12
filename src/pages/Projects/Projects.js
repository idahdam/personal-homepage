import React from "react"
import { Redirect } from "react-router-dom"
import Markdown from "react-markdown"
import postlist from "../../projects.json"
import ProjectsDetails from '../../components/ProjectsDetails/ProjectsDetails'
import {Helmet} from 'react-helmet'

const ProjectDetails = (props) => {
    return(
        <>
            <ProjectsDetails {...props}/>
        </>
    )
}

export default ProjectDetails