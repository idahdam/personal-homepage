import React from 'react'
import { Container } from '../../globalStyles'
import {
    InfoColumnImg, 
    InfoSec, 
    InfoRow, 
    InfoColumn,
    TextWrapper, 
    TopLine, 
    Heading, 
    Subtitle, 
    ImgWrapper, 
    Img,
    HeadingBold
} from './Header.Elements'

const Header = ({lightBg, imgStart, lightTopLine, lightTextDesc, description, main, lightText, topLine,
start, img, alt}) => {
    return (
        <>
          <InfoSec lightBg = {lightBg}>
            <Container>
                <InfoRow imgStart={imgStart}>
                    <InfoColumn>
                        <TextWrapper>
                            <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                                <Heading lightText={lightText}>Hi! I'm  <HeadingBold> Hadi</HeadingBold></Heading>
                                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                        </TextWrapper>
                    </InfoColumn>
                    <InfoColumnImg>
                        <ImgWrapper start={start}>
                            <Img src={img} alt={alt}></Img>
                        </ImgWrapper>
                    </InfoColumnImg>
                </InfoRow>
            </Container>
          </InfoSec>
        </>
    )
}

export default Header;