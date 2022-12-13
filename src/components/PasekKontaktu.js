import React from 'react'
import Mail from '../img/ikony/kontakt/mail.png';
import Linkedin from '../img/ikony/kontakt/linkedin.png';
import Discord from '../img/ikony/kontakt/discord.png';
import Cv from '../img/ikony/kontakt/cv.png';
import Github from '../img/ikony/kontakt/github.png';

const PasekKontaktu = ({id}) => {
  return (
    <div className='PasekKontaktu' id={id}>
        <img className='Ikona' src={Mail} alt="Mail" />
        <img className='Ikona' src={Linkedin} alt="Linkedin" />
        <img className='Ikona' src={Discord} alt="Discord" />
        <span className='mobilnySeparatorKontaktu'></span>
        <img className='Ikona' src={Cv} alt="Cv" />
        <img className='Ikona' src={Github} alt="Github" />
        <div className='LiniaPionowa'></div>
    </div>
  )
}

export default PasekKontaktu
