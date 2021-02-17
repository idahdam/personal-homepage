import styled from 'styled-components'
import {Link, Route} from 'react-router-dom'
import { FaMagento } from 'react-icons/fa'

export const FooterContainer = styled.div`
    // background-color: #fff;
    background: transparent;
    padding: 4rem 0 2rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const FooterSubtext = styled.p`
    margin-bottom: 5px;
    font-size: 20px;
`

export const SocialLogo = styled(Link)`
    color: #fff;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items: center;
    margin-bottom:  16px
`

export const SocialIcon = styled(FaMagento)`
    margin-right: 10px;


`

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
` 

export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 24px;
`

export const FooterLink = styled.a`
    color:#000;
    height: 100%;
    border-top: 20px solid transparent;
    text-decoration: none;
    margin-bottom: 0.5rem;

    &:hover{
        color:grey;
        transition: 0.3 ease-out;
        border-bottom: 6px solid grey;
        transition: all 0.3s ease-out;
        border-bottom: 6px solid transparent;
    }
`

export const FooterRoute = styled.a`
    color:#000;
    height: 100%;
    border-top: 20px solid transparent;
    text-decoration: none;
    margin-bottom: 0.5rem;

    &:hover{
        color:grey;
        transition: 0.3 ease-out;
        border-bottom: 6px solid grey;
        transition: all 0.3s ease-out;
        border-bottom: 6px solid transparent;
    }
`