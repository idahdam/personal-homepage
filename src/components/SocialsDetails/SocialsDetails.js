import React from 'react'
import { Container } from '../../globalStyles';
import {
    SocialsListHeaderContainer,
    SocialsListHeaderTitle,
    SocialsListHeaderDesc
} from './SocialsDetails.elements'

const SocialsDetails = () => {
    return(
        <Container>
            <SocialsListHeaderContainer>
                <SocialsListHeaderTitle>Socials</SocialsListHeaderTitle>
                <SocialsListHeaderDesc>I put my socials on 'Home'. But I'll give them here too!</SocialsListHeaderDesc>
            </SocialsListHeaderContainer>
        </Container>
    )
}

export default SocialsDetails;
