import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const CatalogContainer = styled.div`
    
`

export const CatalogContainerRow = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
`

export const CatalogContainerColor = styled.div`
    background-color: ${({catalogColor}) => (catalogColor ? '#811313': '#808080' )};
    margin: 10px;
    padding: 10px;
    border-radius: 25px;
`

export const CatalogContainerColumn = styled.div`

    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;
    transform: scale(1);
    transition: 0.5s;

    &:hover{
        transform: scale(1.115);
        transition: 0.5s;
    }
`
export const CatalogImg = styled.img`
    padding-top: 5px;
    border-radius: 25px;
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

export const CatalogTitle = styled.div`
    padding-top: 5px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    font-size: 1.25rem;
`

export const CatalogContainerHref = styled.a`
    color: white;
    transition: 0.5s;
    &:hover{
        color: ${({catalogColor}) => (catalogColor ? '#808080': '#811313 ' )};
        transition: 0.5s;
    }
`
export const CatalogBody = styled.div`

`

export const CatalogSideLink = styled(Link)`

`