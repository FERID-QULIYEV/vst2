import React from 'react'

import footlogo from "../../Imgs/mys-logo.png";
import "./Footer.scss"


function Footer() {
    return (
        <footer>
            <div className='foot'>
                <div className='foot_element'>
                    
                    <div className='foot_logo'>
                        <img className='footlogo' alt='foto' src={footlogo} />
                    </div>
                    <div className='foot_disclosure'>
                        <p>Sayt məlumat xarakterli yaradılmışdır.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer