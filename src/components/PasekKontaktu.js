import React from 'react'
import Mail from '../img/ikony/kontakt/mail.png';
import Linkedin from '../img/ikony/kontakt/linkedin.png';
import Discord from '../img/ikony/kontakt/discord.png';
import Cv from '../img/ikony/kontakt/cv.png';
import Github from '../img/ikony/kontakt/github.png';

const PasekKontaktu = ({id}) => {
  return (
    <div className='PasekKontaktu' id={id}>
        <a href='mailto:bartoszgurguldev@gmail.com'><img className='Ikona' src={Mail} alt="Mail" /></a>
        <a href='https://www.linkedin.com/in/bartosz-gurgul-b8a968233/'><img className='Ikona' src={Linkedin} alt="Linkedin" /></a>
        <a href='https://discordapp.com/users/681999707522072705'><img className='Ikona' src={Discord} alt="Discord" /></a>
        <span className='mobilnySeparatorKontaktu'></span>
        <a href=''><img className='Ikona' src={Cv} alt="Cv" /></a>
        <a href='https://github.com/BartekG12'><img className='Ikona' src={Github} alt="Github" /></a>
        <div className='LiniaPionowa'></div>
    </div>
  )
}

export default PasekKontaktu
