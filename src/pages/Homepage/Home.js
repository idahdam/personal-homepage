import React from 'react'
import { Header, Section, Socials } from '../../components'
import { HomeObjOne, HomeObjTwo, HomeObjThree, SocialsData } from './Data'


const Home = () => {
    return (
        <>
        <Header 
        {...HomeObjOne}
        title="header"
        subtitle="lol"
        dark={true}
        id="header"
        />
        <Section {...HomeObjTwo}
        title="blogs"
        subtitle="lol"
        dark={true}
        id="blogs"
        />
        <Section {...HomeObjThree}/>
        <Socials {...HomeObjTwo}/>
        <Section {...HomeObjThree}/>
        </>
    )
}

export default Home;