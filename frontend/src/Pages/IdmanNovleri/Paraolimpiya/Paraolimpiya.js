import React from 'react'
import ParaoliSec from '../../../Components/IdmanNovleriComponents/ParaoliSec/ParaoliSec'
import Navbar from '../../../LayOut/Navbar/Navbar'
import NovlerSec from '../../../Components/IdmanNovleriComponents/NovlerSec/NovlerSec'
import Footer from '../../../LayOut/Footer/Footer'

function Paraolimpiya() {
  return (
    <main>
        <Navbar/>
        <NovlerSec/>
        <ParaoliSec/>
        <Footer/>
    </main>
  )
}

export default Paraolimpiya