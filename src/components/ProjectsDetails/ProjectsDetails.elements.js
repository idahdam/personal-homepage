import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Markdown from "react-markdown"

export const ProjectsDetailsContainer = styled.div`

`
export const ProjectsDetailsHeaderContainer = styled.div`
    padding-top: 7.5rem;
    text-align: center;
`

export const ProjectsDetailsBodyContainer = styled.div`
    margin: 3.5rem;
`

export const ProjectsDetailsTitle = styled.div`
    font-size: 2.5rem;
`

export const ProjectsDetailsPublished = styled.div`
    margin-top: 15px;
    margin-bottom: -30px;
    font-size: 1.25rem;
    font-style: italic;
`

export const ProjectsDetailsMarkdown = styled(Markdown)`
    padding-top: 20px;
    font-size: 1.25rem;
`


