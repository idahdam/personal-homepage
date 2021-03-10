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
                <SocialsListHeaderDesc>I put my socials on the home. But I'll give you here too!</SocialsListHeaderDesc>
            </SocialsListHeaderContainer>
        </Container>
    )
}

export default SocialsDetails;
