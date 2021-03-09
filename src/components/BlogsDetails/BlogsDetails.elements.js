import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Markdown from "react-markdown"

export const BlogsDetailsContainer = styled.div`

`
export const BlogsDetailsHeaderContainer = styled.div`
    padding-top: 7.5rem;
    text-align: center;
`

export const BlogsDetailsBodyContainer = styled.div`
    margin: 3.5rem;
`

export const BlogsDetailsTitle = styled.div`
    font-size: 2.5rem;
`

export const BlogsDetailsPublished = styled.div`
    margin-top: 15px;
    margin-bottom: -30px;
    font-size: 1.25rem;
    font-style: italic;
`

export const BlogsDetailsMarkdown = styled(Markdown)`
    line-height: 2.5rem;  
    padding-top: 20px;
    font-size: 1.25rem;
`


