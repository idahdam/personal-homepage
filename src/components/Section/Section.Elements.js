import styled from 'styled-components'

export const InfoSec = styled.div`
    color: #fff;
    padding: 50px 0 160px;
    background: ${({lightBg}) => (lightBg ? '#fff': '#C4C4C4')};
`

export const InfoRow = styled.div`
    margin-top: 5rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: ${({imgStart}) => (imgStart ? 'row-reverse': 'row')}
`

export const InfoColumn = styled.div`
    margin-bottom: 15px;
    padding-right: 5px;
    padding-left: 0;
    flex: 1;
    max-width: auto;
    @media screen and (max-width: 768px){
        max-width: 100%;
        flex-basis: 100%;
        display: flex;
        justify-content: center;
    }
`

export const InfoColumnOne = styled.div`
    width: 40%;
    margin-bottom: 15px;
    padding-right: 2px;
    column-gap: 40px;
    @media screen and (max-width: 768px){
        max-width: 100%;
        flex-basis: 100%;
        display: flex;
        justify-content: center;
    }
`


export const TextWrapper = styled.div`
    margin-left: 1rem;
    margin-right: 15rem;
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
    padding-left: 1.2rem;
    margin-left: 20px;
    margin-bottom: 5px;
    font-size: 2.5rem;
    line-height: 1.1;
    color: ${({lightText}) => (lightText ? '#000': '#000')};
`

export const Subtitle = styled.p`
    padding-left: 2.5em;
    margin-top: 1em;
    margin-bottom: 35px;
    font-size: 1.5rem;
    line-height: 30px;
    color: #811313;
`

export const ImgWrapper = styled.div`
    padding-top: 1rem; 
    max-width: 100px;
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
`

export const TextBold = styled.p`
    background: #811313;
    background-clip: padding-box;
    text-decoration: none;
    font-size: 4rem;
    padding-left: 0.5rem;
    margin-left: 2rem;
    margin-right: ${({status}) => (status ? '2.75rem': '-3.5rem' )}
`

export const ViewAll = styled.a`
    color: #811313;
`
