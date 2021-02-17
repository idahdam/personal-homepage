import React from 'react'
import { 
	FooterContainer, 
	FooterSubtext, 
	FooterRoute,
	FooterLink,
	SocialIcon, 
	SocialIconLink, 
	SocialIcons, 
	SocialLogo
} from './Footer.Elements'
import { Button } from '../../globalStyles'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
    return (
        <>
            <FooterContainer>
                <FooterSubtext>
                    made with ❤️ by <FooterLink href="https://instagram.com/idahdam" target="_blank">Hadi</FooterLink> (code) dan <FooterLink href="https://instagram.com/hamaswaree" target="_blank"> Hamas </FooterLink> (UI)
                </FooterSubtext>
                <FooterSubtext>
                	@2021 <FooterRoute href="/">Go to top.</FooterRoute>	
                </FooterSubtext>
                <FooterSubtext>
                	
                </FooterSubtext>
            </FooterContainer> 
        </>
    )
}

export default Footer