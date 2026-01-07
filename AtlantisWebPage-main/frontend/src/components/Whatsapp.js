import React from 'react';
import './Whatsapp.css';

import whatsLogo from '../Material/WHATSAPP_LOGO.png'

function  whatsappNum(phoneNumber){
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, '_blank');

}

function Whatsapp(){
    return(
        <div className='Whatsapp-container'>
            <img onClick={() => whatsappNum('573187503969')} className='whatsapp-logo' src={whatsLogo}/>
        </div>
    );
}

export { Whatsapp }


