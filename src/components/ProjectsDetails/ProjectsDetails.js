import React from "react"
import { Redirect } from "react-router-dom"
import Markdown from "react-markdown"
import postlist from "../../projects.json"
import {
    ProjectsDetailsContainer,
    ProjectsDetailsTitle,
    ProjectsDetailsPublished,
    ProjectsDetailsMarkdown,
    ProjectsDetailsHeaderContainer,
    ProjectsDetailsBodyContainer
} from './ProjectsDetails.elements';
import {Helmet} from 'react-helmet'

const ProjectsDetails = (props) => {
    const TITLE = "Hadi's Project";
    const validId = parseInt(props.match.params.id)
    if (!validId) {
        return <Redirect to="/404" />
    }
    const fetchedPost = {}
    let postExists = false
    postlist.forEach((post, i) => {
        if (validId === post.id) {
            fetchedPost.title = post.title ? post.title : "No title given"
            fetchedPost.date = post.date ? post.date : "No date given"
            fetchedPost.author = post.author ? post.author : "No author given"
            fetchedPost.content = post.content ? post.content : "No content given"
            postExists = true
        }
    })
    if (postExists === false) {
        return <Redirect to="/404" />
    }
    return (
        <>
        <Helmet>
            <title>{ `${TITLE}: ${fetchedPost.title}`}</title>
            <meta
                name="description"
                content={ `${TITLE}: ${fetchedPost.title}`}
            />
        </Helmet>
        <ProjectsDetailsContainer>
            <ProjectsDetailsHeaderContainer>
                <ProjectsDetailsTitle>{fetchedPost.title}</ProjectsDetailsTitle>
                <ProjectsDetailsPublished>Published on {fetchedPost.date} by <strong>{fetchedPost.author}</strong></ProjectsDetailsPublished>
            </ProjectsDetailsHeaderContainer>
            <ProjectsDetailsBodyContainer>
                <hr/>
                <ProjectsDetailsMarkdown source={fetchedPost.content} escapeHtml={false} />
            </ProjectsDetailsBodyContainer>
        </ProjectsDetailsContainer>
        </>
    )
}

export default ProjectsDetails;