import styled from 'styled-components'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Container } from '../../globalStyles'

export const Nav = styled.nav`
    background: #fff;
    transparent: 80%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: right;
    font-size: 1.5rem;
    position: sticky;
    top: 10;
    z-index: 999;
`

export const NavbarContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    height: 70px;   
`

export const NavLogo = styled(Link)`
    justify-self: flex-start;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items: center;
`

export const NavIcon = styled(FaBars)`
    color: #000;
    margin-right: 0.5rem;
`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 960px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size:1.8rem;
        cursor: pointer;
    }

`

export const NavMenu = styled.ul`
    display: flex;
    align-items: right;
    margin-left: 75%;
    list-style: none;
    text-align: center; 

    @media screen and (max-width: 960px){
        display:flex;
        flex-direction: column;
        margin-left: 0%;
        width: 100%;
        height: 90vh;
        position: absolute;
        top: 80px;
        left: ${({click}) => (click ? 0 : '-100%')};
        opacity: 1;
        transition: all 0.5s ease;
        background: #fff;
    }
`

export const NavItem = styled.li`
    height: 75px;
    border-top: 20px solid transparent;
    margin-left: 3.5%;
    margin-right: 3.5%;

    &:hover{
        border-bottom: 10px solid grey;
        transition: all 0.4s ease-in;
    }

    @media screen and (max-width: 960px){
        width: 100%;

        &:hover{
            border: none;
        }
    }
`

export const NavLinks = styled(Link)`
    color: #000;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem;
    height: 100%;

    &:hover{
        color: grey;
        transition: all 0.3s ease;
    }

    @media screen and (max-width: 960px){
        text-align: center;
        padding: 2rem;
        width: 100%;
        display: table;

        &:hover{
            color: grey;
            transition: all 0.3s ease;
        }
    }
`
export const NavItemBtn = styled.li`
    @media screen and (max-width: 960px){
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 120px;
    }
`

export const NavBtnLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    padding: 8px 16px;
    height: 100%;
    width: 100%;
    border: none;
    outline: none;
`