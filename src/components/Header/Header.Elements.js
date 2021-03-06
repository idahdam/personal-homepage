import styled from 'styled-components'

export const InfoSec = styled.div`
    color: #fff;
    padding: 50px 0 80px;
    background: ${({lightBg}) => (lightBg ? '#fff': '#101522')};
`

export const InfoRow = styled.div`
    margin-top: 7.5rem;
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

export const InfoColumnImg = styled.div`
    flex: 1;
    width: auto;
    flex-basis: 50%;
    
    @media screen and (max-width: 768px){
        max-width: 100%;
        flex-basis: 100%;
        display: flex;
        justify-content: center;
    }
`

export const TextWrapper = styled.div`
    margin: auto;
    max-width: 540px;
    padding-bottom: 50px;
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

export const Heading = styled.div`
    padding-top: 1.2em;
    padding-left: 1em;
    margin-bottom: 24px;
    font-size: 4rem;
    line-height: 1.1;
    color: ${({lightText}) => (lightText ? '#f7f8fa': '#1c2237')};
`

export const HeadingBold = styled.span`
    clear: left;
    background: #811313;
    background-clip: content-box;
    text-decoration: none;
    font-size: 4rem;
    padding-right: 5rem;
    transition: 0.5s;  

    &:hover{
        color: white;
        transition: 0.3s;
    }
`

export const Subtitle = styled.p`
    max-width: 440px;
    padding-left: 2.5em;
    margin-bottom: 35px;
    font-size: 1.5rem;
    font-weight: 550;
    line-height: 1.75rem;
    color: ${({lightTextDesc}) => (lightTextDesc ? '#a9b3c1': '#1c2237')};
`

export const ImgWrapper = styled.div`
    margin-top: -2rem;
    padding-top: 1rem; 
    max-width: 100rem;
    display: flex;
    justify-content: ${({start}) => (start ? 'flex-start': 'flex-end' )}
`

export const Img = styled.img`
    padding-right: 0;
    transform: scale(1);
    border: 0;
    max-width: 100%;
    vertical-align: middle;
    max-height: 100%;
    display: inline-block;
    transition: 0.5s;
    &:hover{
        filter: invert(100%);
        transform: scale(1.10);
        transition: 0.5s;
    }
`

export const TextBold = styled.p`
    background: #811313;
    color: white;
`