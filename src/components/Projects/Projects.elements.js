import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const ProjectsListHeaderContainer = styled.div`
    padding-top: 10rem;
    padding-bottom: 0.5rem;
    text-align: center;
`

export const ProjectsListHeaderTitle = styled.div`
    font-size: 5rem;
`

export const ProjectsListHeaderDesc = styled.div`
    margin: 0 3rem 3rem 3rem;
    font-size: 1.5rem;
    font-style: italic;
`
export const ProjectsListContainerRow = styled.div`
    overflow-x: scroll;
    scroll-behavior: smooth;
    padding-top: 3rem;
    height: 25rem;

`
export const ProjectsListContainerColumn = styled.div`
    width:15vw;
    height: 1vw;
    overflow: auto;
    display: table-cell;
    margin-left: 28rem;
    margin-right: 28rem;
    align-items: center;
    flex-direction: column;
    flex: 1;
    transform: scale(1);
    transition: 0.5s;

    &:hover{
        transform: scale(0.95);
        transition: 0.5s;
        overflow: auto;
        width: 100%;
    }
`
export const ProjectsListContainerHref = styled(Link)`
    text-decoration:none;
    color: white;
    transition: 0.5s;
    &:hover{
        color: ${({catalogColor}) => (catalogColor ? '#808080': '#811313 ' )};
        transition: 0.5s;
    }
`
export const ProjectsListContainerColor = styled.div`
    background-color: ${({catalogColor}) => (catalogColor ? '#811313': '#808080' )};
    margin: 10px;
    padding: 10px;
    border-radius: 15px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.25);
`

export const ProjectsListImg = styled.img`
    padding-top: 5px;
    border-radius: 10px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    height: 200px;
    width: 250px;
    object-fit: cover;
    filter: grayscale(100%);
    transition: 0.3s;

    &:hover{
        transition: 0.3s;
        filter: none;
    }
`
export const ProjectsListTitle = styled.div`
    padding-top: 5px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    font-size: 1.25rem;
`

export const SlideTitle = styled.div`
    padding-top: 2rem;
    font-size: 2rem;
    text-align: center;
`

export const SlideDesc = styled.div`
    font-size: 1.25rem;
    text-align: center;
`
