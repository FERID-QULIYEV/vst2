import React from 'react'
import "./Navbar.scss"
import flag from "../../Imgs/Flag-of-Azerbaijani-01.png";
import gerb from "../../Imgs/Gerb.png";
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <div className='navbar'>
                <div className='nav_sec'>
                    <div className='flag'>
                        <img alt='foto' className='flag_img' src={flag} />
                    </div>
                    <div className='nav_elements'>
                        <div className='site_title'>
                            <h2>Azərbaycanda idman</h2>
                        </div>
                        <div className='nav_pages_entries'>
                            <NavLink to={'/'}>Home</NavLink>

                            <div className='dropdown'>
                                <NavLink className='dropbtn' to={'/idmannovleri'}>Idman növləri</NavLink>
                                <li className='dropdown-content'>
                                    <NavLink to={'/idmannovleri'}>Olimpiya</NavLink>
                                    <NavLink to={'/paraolimpiya'}>Paralimpiya</NavLink>
                                    <NavLink to={'/qeyriolimpiya'}>Qeyri-olimpiya</NavLink>
                                </li>
                            </div>
                            <NavLink to={'/addpage'}>Add</NavLink>
                            

                        </div>
                    </div>
                    <div className='gerb'>
                        <img alt='foto' className='gerb_img' src={gerb} />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar