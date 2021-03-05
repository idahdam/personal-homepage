import React from 'react'
import { Container } from '../../globalStyles'
import { InfoSec, SocialLink, SocialsCol, SocialsHeader, SocialsRow, SocialsDesc, SocialsItem, Twitter, SocialsFolks, Instagram, Mail, Github, Youtube, LinkedIn } from './Socials.Elements'

const Socials = ({status, lightBg, mainBold, imgStart, lightTopLine, lightTextDesc, description, main, lightText, topLine, link}) => {
    return(
        <>
            <InfoSec lightBg = {lightBg}>
                <Container lightBg = {lightBg}>
                    <SocialsHeader>Socials</SocialsHeader>
                    <SocialsDesc>You can find me here.</SocialsDesc>
                    <SocialsRow>
                        <SocialsCol>
                            <Twitter size={50}/><SocialsItem><SocialLink href="https://twitter.com/idahdam">Twitter</SocialLink></SocialsItem>
                            <Youtube size={50}/><SocialsItem><SocialLink href="https://youtube.com">Youtube</SocialLink></SocialsItem>
                            <LinkedIn size={50}/><SocialsItem><SocialLink href="https://www.linkedin.com/in/idahdam/">LinkedIn</SocialLink></SocialsItem>
                        </SocialsCol>
                        <SocialsCol>
                            <Instagram size={50}/><SocialsItem><SocialLink href="https://instagram.com/idahdam">Instagram</SocialLink></SocialsItem>
                            <Mail size={50}/><SocialsItem><SocialLink href="#">Email</SocialLink></SocialsItem>
                            <Github size={50}/><SocialsItem><SocialLink href="https://github.com/idahdam">Github</SocialLink></SocialsItem>
                        </SocialsCol>
                        <SocialsFolks>---That's all folks!---</SocialsFolks>
                    </SocialsRow>
                </Container>
            </InfoSec>
        </>
    )
}

export default Socials;