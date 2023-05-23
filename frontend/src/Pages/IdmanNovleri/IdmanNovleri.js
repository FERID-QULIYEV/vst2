import React from 'react'
import Navbar from '../../LayOut/Navbar/Navbar'
import Footer from '../../LayOut/Footer/Footer'
import NovlerSec from '../../Components/IdmanNovleriComponents/NovlerSec/NovlerSec'
import IdmanNovleriSec from '../../Components/IdmanNovleriComponents/IdmanNovleriSec/IdmanNovleriSec'

function IdmanNovleri() {
  return (
    <main>
        <Navbar/>
        <NovlerSec/>
        <IdmanNovleriSec/>
        <Footer/>
    </main>
  )
}

export default IdmanNovleri
