import React from 'react'
import "./ParaoliSec.scss"
import cudoicon from "../../../Imgs/cudo-icon.png";
import basketbolicon from "../../../Imgs/basketbol-icon.png";
import oxatmaicon from "../../../Imgs/oxatma-icon.png";
import uzguculukicon from "../../../Imgs/uzguculuk-icon.png";
import aqirliqqaldirmaicon from "../../../Imgs/agirliqqaldirma-icon.png";
import xizekicon from "../../../Imgs/xizek-icon.png";
import motoicon from "../../../Imgs/motosiklet-icon.png";

function ParaoliSec() {
  return (
    <section className='paraolimpiyasec'>
        <div className='paraolimpiya_sec_card'>
            <div className='paraolimpiya_card_1'>
                <div className='card'>
                    <img alt='foto' src={cudoicon}/>
                    <p className='idmanadi'>Cüdo</p>
                    <p className='federasiya'>Azərbaycan Cüdo Federasiyası</p>
                </div>
                <div className='card'>
                    <img alt='foto' src={basketbolicon}/>
                    <p className='idmanadi'>Basketbol</p>
                    <p className='federasiya'>Azərbaycan Basketbol Federasiyası</p>

                </div>
                <div className='card'>
                    <img alt='foto' src={oxatmaicon}/>
                    <p className='idmanadi'>Oxatma</p>
                    <p className='federasiya'>Azərbaycan Kamandan Oxatma Federasiyası</p>
                </div>
                <div className='card'>
                    <img alt='foto' src={uzguculukicon}/>
                    <p className='idmanadi'>Üzgüçülük</p>
                    <p className='federasiya'>Azərbaycan Üzgüçülük Federasiyası</p>
                </div>
                <div className='card'>
                    <img alt='foto' src={aqirliqqaldirmaicon}/>
                    <p className='idmanadi'>Ağırlıqqaldırma</p>
                    <p className='federasiya'>Azərbaycan Ağırlıqqaldırma Federasiyası</p>
                </div>
            </div>
            <div className='paraolimpiya_card_2'>
                <div className='card'>
                    <img alt='foto' src={xizekicon}/>
                    <p className='idmanadi'>Dağ Xizəyi</p>
                    <p className='federasiya'>Azərbaycan Dağ Xizəyi Federasiyası</p>
                </div>
                <div className='card'>
                    <img alt='foto' src={motoicon}/>
                    <p className='idmanadi'>Motosiklet</p>
                    <p className='federasiya'>Azərbaycan Motosiklet İdmanı Federasiyası</p>

                </div>
               
            </div>
           

            
        </div>
    </section>
  )
}

export default ParaoliSec