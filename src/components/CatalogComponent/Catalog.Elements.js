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
    padding: 20px;
    border-radius: 25px;
`

export const CatalogContainerColumn = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;
`
export const CatalogImg = styled.img`
    border-radius: 25px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    padding: 1px;
    height: 177px;
    width: 177px;
    object-fit: cover;
`

export const CatalogTitle = styled.div`
    padding-top: 5px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
`

export const CatalogBody = styled.div`

`

export const CatalogSideLink = styled(Link)`

`