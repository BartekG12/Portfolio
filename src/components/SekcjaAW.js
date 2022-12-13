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
  let linki = ['', '']
  let techIcons = [DjangoIcon, ReactIcon, RestAPIIcon, RenderIcon]
  let CzyGithub = false
  return (
    <div className='PolowniczyPojemnik IntersekcjaPrawa'>
        <div className='PolowniczyLewa LewaAW'>
            <div className='Podsekcja'>
            Studio AW Projekt
            </div>
            <div className='Tekst KontrolaTekstu'>
            Strona internetowa stworzona dla projektant wnętrz: Agnieszki Wójcik. 
            <br/>Zbudowałem ją zupełnie na nowo, doprowadzając do wzrostu liczby <b>nowych
            użytkowników</b> o <b>30%</b>. 
            Ten projekt był wykonywany dla klienta i niestety kod pozostanie w 
            trybie prywatnym. Zachęcam jednak do przeglądu kodu pozostałych.
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
