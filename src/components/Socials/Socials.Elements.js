import { FaExpandArrowsAlt, FaLink } from 'react-icons/fa'
import styled from 'styled-components'
import { FaTwitter, FaLinkedin, FaInstagram, FaGithub,FaYoutube, FaMailBulk } from 'react-icons/fa'
import { Container } from '../../globalStyles'
import ImgBack from '../../images/homepage/Mask.png'

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
    text-align: center;
    margin-left: 30rem;
    margin-right: 30rem;
`

export const SocialsDesc = styled.p`
    color: black;
    font-size: 1.5rem;
    padding-top: 1.5rem;
    text-align: center;
`

export const SocialsFolks = styled.p`
    color: black;
    font-size: 1.5rem;
    padding-top: 1.5rem;
    margin-left: 30rem;
`

export const SocialsRow = styled.div`
    background-image: url(${ImgBack});  
    background-size: 80% 100%;
    background-repeat: repeat-y;
    background-position: left top;
    margin-top: 5rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`

export const SocialsCol = styled.div`
    margin-bottom: 15px;
    padding-right: 10rem;
    margin-left: 5rem;
    padding-left: 5rem;
    flex: 1;
    color: black;
`
export const SocialLink = styled.a`
    color: #808080;
    transition: 0.5s;

    &:hover{
        color: #811313;
        transition: 0.5s;
    }
`
export const SocialsItem = styled.div`
    margin-bottom: 100px;
    text-align: left;
    font-size: 2rem;
    padding-right: 2.5rem;
    transform: translate(50%, -120%);
`

export const Twitter = styled(FaTwitter)`
    padding-top: 1px;
    margin-left: 5rem;
    transform: scale(1);
    transition: 0.3s;

    &:hover{
        color: #1DA1F2;
        transform: scale(1.25);
        transition: 0.3s;
    }
`
export const LinkedIn = styled(FaLinkedin)`
    padding-top: 1px;
    margin-left: 5rem;
    transform: scale(1);
    transition: 0.3s;

    &:hover{
        color: #2867B2;
        transform: scale(1.25);
        transition: 0.3s;
    }
`
export const Youtube = styled(FaYoutube)`
    padding-top: 1px;
    margin-left: 5rem;
    transform: scale(1);
    transition: 0.3s;

    &:hover{
        color: #FF0000;
        transform: scale(1.25);
        transition: 0.3s;
    }
`

export const Instagram = styled(FaInstagram)`
    padding-top: 1px;
    margin-left: 5rem;  
    transform: scale(1);
    transition: 0.3s;

    &:hover{
        color: #E1306C;;
        transform: scale(1.25);
        transition: 0.3s;
    }
`
export const Github = styled(FaGithub)`
    padding-top: 1px;
    margin-left: 5rem;
    transform: scale(1);
    transition: 0.3s;

    &:hover{
        filter: invert(100%);
        transform: scale(1.25);
        transition: 0.3s;
    }
`
export const Mail = styled(FaMailBulk)`
    padding-top: 1px;
    margin-left: 5rem;
    transform: scale(1);
    transition: 0.3s;

    &:hover{
        color: yellow;
        transform: scale(1.25);
        transition: 0.3s;
    }
`

