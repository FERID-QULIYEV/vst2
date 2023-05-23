import React from 'react'
import Navbar from '../../LayOut/Navbar/Navbar'
import "./Home.scss"
import Footer from '../../LayOut/Footer/Footer'
import GirisSec from '../../Components/Homecomponents/GirisSec/GirisSec'
import IdmanhaqddaSec from '../../Components/Homecomponents/IdmanhaqqdaSec/IdmanhaqddaSec'

function Home() {
  return (
    <main>
        <Navbar/>
        <GirisSec/>
        <IdmanhaqddaSec/>
        <Footer/>
    </main>
  )
}

export default Home