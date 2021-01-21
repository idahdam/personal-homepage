import React from 'react'
import {Link} from 'react-router-dom'
import { Container, Button } from '../../globalStyles'
import {ViewAll, TextBold, InfoSec, InfoRow, InfoColumn, TextWrapper, TopLine, Heading, Subtitle, ImgWrapper, Img} from './Section.Elements'

const Section = ({primary, lightBg, imgStart, lightTopLine, lightTextDesc, buttonLabel, description, mainBold, main, lightText, topLine,
start, img, alt}) => {
    return (
        <>
          <InfoSec lightBg = {lightBg}>
            <Container>
                <InfoRow imgStart={imgStart}>
                    <InfoColumn>
                        <TextWrapper>
                            <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                                <Heading lightText={lightText}>{main}</Heading>
                                <TextBold>Blog</TextBold>
                                <ViewAll href="/urmom" target="_blank">
                                	<Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                                </ViewAll>
                        </TextWrapper>
                    </InfoColumn>
                    <InfoColumn>
                        <ImgWrapper start={start}>
                            <Img src={img} alt={alt}></Img>
                        </ImgWrapper>
                    </InfoColumn>
                </InfoRow>
            </Container>
          </InfoSec>
        </>
    )
}

export default Section;