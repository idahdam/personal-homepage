import React from 'react'
import { Header } from '../../components'
import { HomeObjOne } from './Data'


const Home = () => {
    return (
        <>
        <Header {...HomeObjOne}/>
        <Header {...HomeObjOne}/>
        <Header {...HomeObjOne}/>
        </>
    )
}

export default Home;