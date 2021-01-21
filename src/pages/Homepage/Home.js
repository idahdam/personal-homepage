import React from 'react'
import { Header, Section } from '../../components'
import { HomeObjOne, HomeObjTwo } from './Data'


const Home = () => {
    return (
        <>
        <Header {...HomeObjOne}/>
        <Section {...HomeObjTwo}/>
        </>
    )
}

export default Home;