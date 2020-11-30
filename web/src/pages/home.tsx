import React, {useState} from 'react'
import Menu from '../components/Menu'
import Carousel from '../components/Carousel'
import '../styles/pages/home.css'

function Home(){
    
    return(
        <div className="page-home">
            <Menu/>
            <div className="page-content">
             <Carousel/>
            </div>
        </div>
    )
}

export default Home