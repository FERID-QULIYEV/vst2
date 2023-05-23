import React from 'react'
import "./IdmanNovleriSec.scss"
import vlbicon from "../../../Imgs/volleyball-icon.png";
import srbgulicon from "../../../Imgs/serbestgules-icon.png";
import badmintonicon from "../../../Imgs/badminton-icon.png";
import akrobatikaicon from "../../../Imgs/akrobatika-icon.png";
import gulesicon from "../../../Imgs/gules-icon.png";
import batuticon from "../../../Imgs/batut-icon.png";
import bediigimicon from "../../../Imgs/bediigimnastika-icon.png";
import beachfuticon from "../../../Imgs/beach-football-icon.png";
import beachhandballicon from "../../../Imgs/handball-icon.png";
import beachvolleballicon from "../../../Imgs/beach-volleyball-icon.png";
import footballicon from "../../../Imgs/football-icon.png";
import futsalicon from "../../../Imgs/futsal-icon.png";
import fencingicon from "../../../Imgs/fencing-icon.png";
import tabletennisicon from "../../../Imgs/table-tennis-icon.png";
import triathlonicon from "../../../Imgs/triathlon-icon.png";
import bikingicon from "../../../Imgs/biking-icon.png";


function IdmanNovleriSec() {
  return (
    <section className='idmannovlerisec'>
        <div className='idmannov_sec_card'>
            <div className='nov_card_1'>
                <div className='card'>
                    <img alt='foto' src={vlbicon}/>
                    <p className='idmanadi'>Valeybol</p>
                    <p className='federasiya'>Azərbaycan Valeybol Federasiyası</p>
                </div>
                <div className='card'>
                    <img alt='foto' src={srbgulicon}/>
                    <p className='idmanadi'>Sərbəst Güləş</p>
                    <p className='federasiya'>Azərbaycan Güləş Federasiyası</p>

                </div>
                <div className='card'>
                    <img alt='foto' src={badmintonicon}/>
                    <p className='idmanadi'>Badminton</p>
                    <p className='federasiya'>Azərbaycan Badminton Federasiyası</p>
                </div>
                <div className='card'>
                    <img alt='foto' src={akrobatikaicon}/>
                    <p className='idmanadi'>Akrobatika Gimnastikası</p>
                    <p className='federasiya'>Azərbaycan Gimnastika Federasiyası</p>
                </div>
                <div className='card'>
                    <img alt='foto' src={gulesicon}/>
                    <p className='idmanadi'>Güləş</p>
                    <p className='federasiya'>Azərbaycan Güləş Federasiyası</p>
                </div>
            </div>

            <div className='nov_card_2'>
                <div className='card'>
                    <img alt='foto' src={batuticon}/>
                    <p className='idmanadi'>Batut Gimnastikası</p>
                    <p className='federasiya'>Azərbaycan Gimnastika Federasiyası</p>
                </div>
                <div className='card'>
                    <img alt='foto' src={bediigimicon}/>
                    <p className='idmanadi'>Bədii Gimnastika</p>
                    <p className='federasiya'>Azərbaycan Gimnastika Federasiyası</p>

                </div>
                <div className='card'>
                    <img alt='foto' src={beachfuticon}/>
                    <p className='idmanadi'>Çimərlik Futbolu</p>
                    <p className='federasiya'>Azərbaycan Futbol Federasiyaları Assosiasiyası</p>
                </div>
                <div className='card'>
                    <img alt='foto' src={beachhandballicon}/>
                    <p className='idmanadi'>Çimərlik həndbolu</p>
                    <p className='federasiya'>Azərbaycan Həndbol Federasiyası</p>
                </div>
                <div className='card'>
                    <img alt='foto' src={beachvolleballicon}/>
                    <p className='idmanadi'>Çimərlik voleybolu</p>
                    <p className='federasiya'>Azərbaycan Voleybol Federasiyası</p>
                </div>
            </div>

            <div className='nov_card_3'>
                <div className='card'>
                    <img alt='foto' src={footballicon}/>
                    <p className='idmanadi'>Futbol</p>
                    <p className='federasiya'>Azərbaycan Futbol Federasiyaları Assosiasiyası</p>
                </div>
                <div className='card'>
                    <img alt='foto' src={futsalicon}/>
                    <p className='idmanadi'>Futzal</p>
                    <p className='federasiya'>Azərbaycan Futbol Federasiyaları Assosiasiyası</p>

                </div>
                <div className='card'>
                    <img alt='foto' src={beachhandballicon}/>
                    <p className='idmanadi'>Həndbol</p>
                    <p className='federasiya'>Azərbaycan Həndbol Federasiyası</p>
                </div>
                <div className='card'>
                    <img alt='foto' src={akrobatikaicon}/>
                    <p className='idmanadi'>İdman gimnastikası</p>
                    <p className='federasiya'>Azərbaycan Gimnastika Federasiyası</p>
                </div>
                <div className='card'>
                    <img alt='foto' src={fencingicon}/>
                    <p className='idmanadi'>Qılıncoynatma</p>
                    <p className='federasiya'>Azərbaycan Qılıncoynatma Federasiyası</p>
                </div>
            </div>

            <div className='nov_card_4'>
                <div className='card'>
                    <img alt='foto' src={tabletennisicon}/>
                    <p className='idmanadi'>Stolüstü tennis</p>
                    <p className='federasiya'>Azərbaycan Stolüstü Tennis Federasiyası</p>
                </div>
                <div className='card'>
                    <img alt='foto' src={triathlonicon}/>
                    <p className='idmanadi'>Triatlon</p>
                    <p className='federasiya'>Azərbaycan Triatlon Federasiyası</p>

                </div>
                <div className='card'>
                    <img alt='foto' src={bikingicon}/>
                    <p className='idmanadi'>Velosiped</p>
                    <p className='federasiya'>Azərbaycan Velosiped İdmanı Federasiyası</p>
                </div>
                
                
            </div>
        </div>
    </section>
  )
}

export default IdmanNovleriSec