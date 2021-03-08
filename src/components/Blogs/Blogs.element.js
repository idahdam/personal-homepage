import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Markdown from "react-markdown"

export const BlogListHeaderContainer = styled.div`
    padding-top: 10rem;
    padding-bottom: 5rem;
    text-align: center;
`

export const BlogListHeaderTitle = styled.div`
    font-size: 5rem;
`

export const BlogListHeaderDesc = styled.div`
    margin: 0 2rem 3rem 0;
    padding: 0 2rem 0 2rem;
    font-size: 1.5rem;
    font-style: italic;
`

export const BlogListBodyContainer = styled.div`
    padding-bottom: 2rem;
`

export const BlogListBodyImage = styled.div`
        height: auto;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        text-align: center;
`

export const BlogListBodyTitle = styled.div`
    text-decoration:none;
    margin-bottom: 10px;    
    width: 300%;
    font-size: 1.5rem;
`

export const BlogListBodyPublished = styled.div`
    width: 300%;
`

export const BlogListColumn = styled.div`
    padding-right: 40rem;
    padding-left: 2rem;
    padding-top: 1rem;
`

export const BlogListColumImage = styled.div`
    drop-shadow(0 0 0.75rem crimson);
    margin: 2rem;
    display: 30%;
`

export const BlogListRow = styled.div`
    display: flex;
`

export const BlogListBodyReadmore = styled.div`
    color: #811313;
    text-align: left;
    font-size: 1rem;
`
export const BlogListBodyReadmoreLink = styled(Link)`
    color: #811313;
`

export const BlogListBodyBody = styled(Markdown)`
    font-size: 1.25rem;
    width: 400%;
`

export const BlogListLinkTitle = styled(Link)`
    color: #811313;
    text-decoration: none;
`