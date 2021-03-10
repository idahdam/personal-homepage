import React from 'react'
import { Header, Section, Socials } from '../../components'
import { HomeObjOne, HomeObjTwo, HomeObjThree, SocialsData } from './Data'


const Home = () => {
    return (
        <>
        <Header {...HomeObjOne}/>
        <Section {...HomeObjTwo}/>
        <Section {...HomeObjThree}/>
        <Socials/>
        </>
    )
}

export default Home;