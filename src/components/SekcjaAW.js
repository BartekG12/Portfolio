import React from 'react'
import WRamce from './WRamce'

import PC from '../img/zdjęcia/PCAWv2.png'
import Telefon from '../img/zdjęcia/telefonAWv2.png'
import Tablet from '../img/zdjęcia/tabletAWv2.png'

import DjangoIcon from '../img/ikony/umiejętności/django.svg'
import ReactIcon from '../img/ikony/umiejętności/react.svg'
import RestAPIIcon from '../img/ikony/umiejętności/restAPI.svg'
import RenderIcon from '../img/ikony/narzędzia/render.svg'

const SekcjaAW = () => {
  let linki = ['https://awprojekt.com/', 'https://github.com/BartekG12/AW-projekt']
  let techIcons = [DjangoIcon, ReactIcon, RestAPIIcon, RenderIcon]
  let CzyGithub = false
  return (
    <div className='PolowniczyPojemnik IntersekcjaPrawa'>
        <div className='PolowniczyLewa LewaAW'>
            <div className='Podsekcja'>
            Studio AW Projekt
            </div>
            <div className='Tekst KontrolaTekstu'>
            Strona stworzona dla firmy "Studio AW Projekt".
            Zbudowałem ją zupełnie na nowo, doprowadzając do wzrostu liczby <b>nowych
            użytkowników</b> o około <b>30%</b> oraz otrzymywanych <b>propozycji współpracy</b> o około <b>5%</b>. 
            Projekt był wykonywany dla firmy, a&nbsp;kod pozostanie w 
            trybie prywatnym, jednak zachęcam do przeglądu kodu pozostałych.
            </div> 
            <WRamce linki={linki} techIcons={techIcons} CzyGithub={CzyGithub}/>
        </div>
        <div className='PolowniczyPrawa PrawaAW'>
            <img className='Img PC' src={PC} alt='PC' />
            <img className='Img Telefon' src={Telefon} alt='Telefon' />
            <img className='Img Tablet' src={Tablet} alt='Tablet' />
        </div>
    </div>
  )
}

export default SekcjaAW
