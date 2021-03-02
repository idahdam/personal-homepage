import React, { useState, useEffect } from 'react'
import { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    NavIcon, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks, 
    NavItemBtn, 
    NavBtnLink
} from './Navbar.Elements'
import {FaBars, FaTimes} from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import {Button} from    '../../globalStyles'
import Scroll from 'react-scroll'

const ScrollLink = Scroll.ScrollLink

const Navbar = () => {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)
 
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        }
        else{
            setButton(true);
        }
    }

    
    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener('resize', showButton) 
    return(
        <>
        <IconContext.Provider value = {{color: '#fff'}}>
            <Nav>
                <NavbarContainer>
                    <MobileIcon onClick={handleClick}>
                        {click ? <FaTimes/> : <FaBars/>}
                    </MobileIcon>
                    <NavMenu onClick={handleClick} click={click}>
                        <NavItem>
                        <NavLinks to="/">Home</NavLinks>
                        </NavItem> 
                        <NavItem>
                            <NavLinks to="/Blogs">Blogs</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/Projects">Projects</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/Socials">Socials</NavLinks>
                        </NavItem>
                    </NavMenu>  
                </NavbarContainer>
            </Nav>  
        </IconContext.Provider>
    </>
    )
}

export default Navbar;