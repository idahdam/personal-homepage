import React from 'react'
import {Link} from 'react-router-dom'
import { Catalog } from '../index';
import { BlogOne, BlogTwo, BlogThree } from '../../pages/Homepage/Data';
import { Container, Button } from '../../globalStyles'
import { ViewAll, TextBold, InfoSec, InfoRow, InfoColumn, InfoColumnOne, TextWrapper, TopLine, Heading, Subtitle, ImgWrapper, Img } from './Section.Elements'

const Section = ({status, lightBg, mainBold, imgStart, lightTopLine, lightTextDesc, description, main, lightText, topLine,
start, img, alt}) => {
    return (
        <>
          <InfoSec lightBg = {lightBg}>
            <Container>
                <InfoRow imgStart={imgStart}>
                    <InfoColumnOne>
                        <TextWrapper>
                            <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                                <Heading lightText={lightText}>{main}</Heading>
                                <TextBold status={status}>{mainBold}</TextBold>
                                <ViewAll href="/blog" target="_blank">
                                	<Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                                </ViewAll>
                        </TextWrapper>
                    </InfoColumnOne>
                    <InfoColumn>
                        <Catalog {...BlogOne}/>
                    </InfoColumn>
                </InfoRow>
            </Container>
          </InfoSec>
        </>
    )
}

export default Section;