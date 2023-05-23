import React from 'react'
import atustuicon from "../../../Imgs/horse-riding-icon.png";
import "./QeyriOliSec.scss"
function QeyriOliSec() {
  return (
    <section className='qeyriolimpiyasec'>
        <div className='qeyriolimpiya_sec_card'>
            <div className='qeyriolimpiya_card_1'>
                <div className='card'>
                    <img alt='foto' src={atustuicon}/>
                    <p className='idmanadi'>At üstü oyunlar</p>
                    <p className='federasiya'>Azərbaycan Milli İdman Növləri Assosiasiyası</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default QeyriOliSec