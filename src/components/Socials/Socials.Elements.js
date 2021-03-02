import { FaExpandArrowsAlt, FaLink } from 'react-icons/fa'
import styled from 'styled-components'
import { FaTwitter, FaLinkedin, FaInstagram, FaGithub,FaYoutube, FaMailBulk } from 'react-icons/fa'
import { Container } from '../../globalStyles'

export const InfoSec = styled.div`
    background-color: #C4C4C4;
    box-shadow:  inset 0px 105px 100px 0px #fff;
    color: #fff;
    padding: 50px 0 160px;
    background: ${({lightBg}) => (lightBg ? '#fff': '#C4C4C4 linear-gradient(0deg, white, transparent 25%) bottom;')};
    box-shadow:  ${({lightBg}) => (lightBg ? 'inset 0px 105px 100px 0px #fff;': 'inset 0px 105px 100px 0px #fff;')}
`   

export const SocialsHeader = styled.p`
    background: #811313;
    background-clip: padding-box;
    text-decoration: none;
    font-size: 4rem;
    padding-left: 1rem;
    padding-right: 2rem;
    margin-left: 31rem;
    margin-right: 30rem;
`

export const SocialsDesc = styled.p`
    color: black;
    font-size: 1.5rem;
    padding-top: 1.5rem;
    margin-left: 31rem;
`

export const SocialsFolks = styled.p`
    color: black;
    font-size: 1.5rem;
    padding-top: 1.5rem;
    margin-left: 30rem;
`

export const SocialsRow = styled.div`
    margin-top: 5rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`

export const SocialsCol = styled.div`
    margin-bottom: 15px;
    padding-right: 10rem;
    margin-left: 5rem;
    padding-left: 10rem;
    flex: 1;
    color: black;
`

export const SocialsItem = styled.div`
    margin-bottom: 100px;
    font-size: 2rem;
    margin-top: 10px;
    margin-left: 15px;
`

export const Twitter = styled(FaTwitter)`
    padding-top: 1px;
    margin-left: 2.5rem;
`
export const LinkedIn = styled(FaLinkedin)`
    padding-top: 1px;
    margin-left: 2.5rem;
`
export const Youtube = styled(FaYoutube)`
    padding-top: 1px;
    margin-left: 2.5rem;
`

export const Instagram = styled(FaInstagram)`
    padding-top: 1px;
    margin-left: 2.5rem;
`
export const Github = styled(FaGithub)`
    padding-top: 1px;
    margin-left: 2.5rem;
`
export const Mail = styled(FaMailBulk)`
    padding-top: 1px;
    margin-left: 2.5rem;
`

