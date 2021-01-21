import styled, { createGlobalStyle } from 'styled-components'

// global css file

export const GlobalStyle = createGlobalStyle`
* {
    
    font-family: 'Playfair Display', serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
`

export const Container = styled.div`
    z-index: 1;
    width: 100%;
    max-width: 1300px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 50px;
    padding-left: 50px;
    @media screen and (max-width: 991px){
        padding-right: 50px;   
        padding-left: 50px;   
    }
`

export const Button = styled.button`
    margin-left: 2em;
    border-radius: 4px;
    background: ${({primary}) => (primary ? '#811313' : '#811313')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '12px 64px' : '10px 20px')};
    color: #fff;
    font-size: ${({fontBig}) => (fontBig ? '20px': '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease-out;
    &:hover {
        transition: all 0.3s ease-out;
        color: grey;
        border-bottom: 6px solid white;
        border-top: 6px solid grey;
        transition: all 0.3s ease-out;
        border-top: 6px solid transparent;
        border-bottom: 6px solid transparent;   
        background: #fff;
        background: ${({primary}) => (primary ? '#811313' :'#811313')};
         
    }
    @media screen and (max-width: 960px){
        width: 100%;
    }
`

export default GlobalStyle;