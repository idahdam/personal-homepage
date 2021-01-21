import styled from 'styled-components'

export const InfoSec = styled.div`
    color: #fff;
    padding: 50px 0 160px;
    background: ${({lightBg}) => (lightBg ? '#fff': '#C4C4C4')};
`

export const InfoRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: ${({imgStart}) => (imgStart ? 'row-reverse': 'row')}
`

export const InfoColumn = styled.div`
    margin-bottom: 15px;
    padding-right: 15px;
    padding-left: 15px;
    flex: 1;
    width: 100%;
    max-width: 100%;
    flex-basis: 50%;
    @media screen and (max-width: 768px){
        max-width: 100%;
        flex-basis: 100%;
        display: flex;
        justify-content: center;
    }
`

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
    margin-left: 1.5rem;
    @media screen and (max-width: 768px){
        padding-bottom: 76px;
    }
`
export const TopLine = styled.div`
    color: ${({lightTopLine}) => (lightTopLine ? '#a9b3c1': '#4b59f7')};
    font-size: 18px;
    line-height: 16px;
    letter-spacing: 1.4px;
    margin-bottom: 16px;
`

export const Heading = styled.h1`
    padding-top: 1.2em;
    padding-left: 1em;
    margin-left: 20px;
    margin-bottom: 5px;
    font-size: 30px;
    line-height: 1.1;
    color: ${({lightText}) => (lightText ? '#000': '#000')};
`

export const Subtitle = styled.p`
    max-width: 440px;
    padding-left: 2.5em;
    margin-left: 0.5em;
    margin-top: 1em;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({lightTextDesc}) => (lightTextDesc ? '#fff': '#fff')};


    &:hover{
        color: grey;
        border-bottom: 6px solid white;
        border-top: 6px solid grey;
        transition: all 0.3s ease-out;
        border-top: 6px solid transparent;
        border-bottom: 6px solid transparent; 
    }
`

export const ImgWrapper = styled.div`
    padding-top: 1rem; 
    max-width: 550px;
    display: flex;
    justify-content: ${({start}) => (start ? 'flex-start': 'flex-end' )}
`

export const Img = styled.img`
    padding-right: 0;
    margin-right: 30px;
    border: 0;
    max-width: 100%;
    vertical-align: middle;
    display: inline-block;
    max-height: 500px;

    &:hover{
        transform: scale(1.5);
        transition: all 0.3s ease-in;
        transform: rotate(360deg);
        transition: all 1s ease-in-out;
        filter: invert(1);

    }
`

export const TextBold = styled.p`
    background: #811313;
    background-clip: border-box;
    padding-left: 10px;
    margin-right: 7.8em;
    margin-left: 1em;
    color: white;
    display: flex;
    font-size: 48px;

    &:hover{
        margin-right: 5em;
        transition: all 0.4s ease-out;
    }
`

export const ViewAll = styled.a`
`
