import React from 'react'
import { Header, Section, Socials } from '../../components'
import { HomeObjOne, HomeObjTwo, HomeObjThree, SocialsData } from './Data'
import { Helmet } from 'react-helmet'


const Home = () => {
    const TITLE = "Hadi's Personal Website";
    return (
        <>
        <Helmet>
          <title>{ TITLE }</title>
        </Helmet>
        <Header {...HomeObjOne}/>
        <Section {...HomeObjTwo}/>
        <Section {...HomeObjThree}/>
        <Socials/>
        </>
    )
}

export default Home;