import React from 'react'
import { Header, Section, Gradient } from '../../components'
import { HomeObjOne, HomeObjTwo, HomeObjThree, LightToDark, HomeObjFour } from './Data'


const Home = () => {
    return (
        <>
        <Header {...HomeObjOne}/>
        <Gradient {...LightToDark}/>
        <Section {...HomeObjTwo}/>
        <Section {...HomeObjThree}/>
        <Section {...HomeObjFour}/>
        </>
    )
}

export default Home;