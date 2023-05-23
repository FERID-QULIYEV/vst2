import React from 'react'
import "./NovlerSec.scss"
import { NavLink } from 'react-router-dom'

function NovlerSec() {
  return (
    <section className='novlersec'>
        <div className='btndiv'>
            <NavLink to={'/idmannovleri'}><button className='novbtn'>Olimpiya</button></NavLink>
            <NavLink to={'/paraolimpiya'}><button className='novbtn'>Paralimpiya</button></NavLink>
            <NavLink to={'/qeyriolimpiya'}><button className='novbtn'>Qeyri-olimpiya</button></NavLink>
        </div>
    </section>
  )
}

export default NovlerSec