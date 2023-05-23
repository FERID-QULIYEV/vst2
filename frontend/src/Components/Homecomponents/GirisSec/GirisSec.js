import React from 'react'
import "./GirisSec.scss";
import prisident from "../../../Imgs/Heyder_Eliyev.jpg";

function GirisSec() {
    return (
        <section>
            <div className='giris_elements'>
                <div className='prisident_foto'>
                    <img alt='foto' className='prisident' src={prisident} />
                </div>
                <div className='prisident_word'>
                    <h3>“İdmanla məşğul olan hər bir şəxs həm özünün fiziki sağlamlığını təmin edir, həm də ki, cəmiyyətdə idmanın, bədən tərbiyəsinin insan üçün nə qədər lazımlı olduğunu sübut edir”.</h3>
                    <p>ULU ÖNDƏR HEYDƏR ƏLİYEV</p>
                </div>
            </div>
        </section>
    )
}

export default GirisSec