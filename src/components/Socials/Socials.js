import React from 'react'
import { Container } from '../../globalStyles'
import { InfoSec, SocialsCol, SocialsHeader, SocialsRow, SocialsDesc, SocialsItem, Twitter, SocialsItemText, Youtube, LinkedIn } from './Socials.Elements'

const Socials = ({status, lightBg, mainBold, imgStart, lightTopLine, lightTextDesc, description, main, lightText, topLine, link}) => {
    return(
        <>
            <InfoSec lightBg = {lightBg}>
                <Container lightBg = {lightBg}>
                    <SocialsHeader>Socials</SocialsHeader>
                    <SocialsDesc>You can find me here.</SocialsDesc>
                    <SocialsRow>
                        <SocialsCol>
                            <Twitter size={50}/><SocialsItem>Twitter</SocialsItem>
                            <Youtube size={50}/><SocialsItem>YouTube</SocialsItem>
                            <LinkedIn size={50}/><SocialsItem>LinkedIn</SocialsItem>
                        </SocialsCol>
                        <SocialsCol>
                            <Twitter size={50}/><SocialsItem>Twitter</SocialsItem>
                            <Youtube size={50}/><SocialsItem>YouTube</SocialsItem>
                            <LinkedIn size={50}/><SocialsItem>LinkedIn</SocialsItem>
                        </SocialsCol>
                    </SocialsRow>
                </Container>
            </InfoSec>
        </>
    )
}

export default Socials;