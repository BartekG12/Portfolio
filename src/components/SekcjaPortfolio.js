import React from 'react'
import WRamce from './WRamce'

import PC from '../img/zdjęcia/PCPortfolio.png'
import Tablet from '../img/zdjęcia/TabletPortfolio.png'
import Telefon from '../img/zdjęcia/telefonPortfolio.png'

import ReactIcon from '../img/ikony/umiejętności/react.svg'
import RenderIcon from '../img/ikony/narzędzia/render.svg'

const SekcjaPortfolio = () => {
  let linki = ['', '']
  let techIcons = [ReactIcon, RenderIcon]
  let CzyGithub = true

  return (
    <div className='PolowniczyPojemnik PolPojOdstep IntersekcjaPrawa'>
        <div className='PolowniczyPrawa LewaPortfolio'>
            <div className='Podsekcja'>
            Portfolio (obecna strona)
            </div>
            <div className='Tekst KontrolaTekstu'>
            Statyczna strona portfolio. To kolejny przykład efektów stosowania podstawowych zabiegów jak:
            Prowadzenie badań, projektowanie prototypu, tworzenie front-endu, tworzenie animacji,
            nadawanie responsywności, publikacja na serwerze itp.
            </div>
            <WRamce linki={linki} techIcons={techIcons} CzyGithub={CzyGithub}/>  
        </div>
        <div className='PolowniczyLewa PrawaPortfolio'>
            <img className='Img PC' src={PC} alt='PC-portfolio' />
            <img className='Img Telefon' src={Telefon} alt='Telefon-portfolio' />
            <img className='Img Tablet' src={Tablet} alt='Tablet-portfolio' />
        </div>
    </div>
  )
}

export default SekcjaPortfolio
