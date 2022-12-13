import WRamce from './WRamce'

import PC from '../img/zdjęcia/PCPrzepisy.png'
import Telefon from '../img/zdjęcia/TelefonPrzepisy.png'
import Tablet from '../img/zdjęcia/TabletPrzepisy.png'

import SQLIcon from '../img/ikony/umiejętności/sql.svg'
import DjangoIcon from '../img/ikony/umiejętności/django.svg'
import RenderIcon from '../img/ikony/narzędzia/render.svg'

const SekcjaPrzepisy = () => {
  let linki = ['', '']
  let techIcons = [SQLIcon, DjangoIcon, RenderIcon]
  let CzyGithub = true
  return (
    <div className='PolowniczyPojemnik PolPojOdstep IntersekcjaLewa'>
        <div className='PolowniczyLewa LewaPrzepisy'>
            <img className='Img PC' src={PC} alt='PC' />
            <img className='Img Telefon' src={Telefon} alt='Telefon' />
            <img className='Img Tablet' src={Tablet} alt='Tablet' />
        </div>
        <div className='PolowniczyPrawa PrawaPrzepisy'>
            <div className='Podsekcja'>
            Oryginalne przepisy
            </div>
            <div className='Tekst KontrolaTekstu'>
              Strona promująca publikacje nowych, oryginalnych przepisów.
              Po stworzeniu konta można zamieszczać przepisy i&nbsp;żądać potwierdzenia ich&nbsp;oryginalności.
              Pozwala na&nbsp;promowanie własnej działalności, uczestnictwo w rankingu, wysyłanie i&nbsp;otrzymywanie wiadomości itp.
              Zapewnia ochronę przed atakami XSS, SQL injections, CSRF itp.
            </div>
            <WRamce linki={linki} techIcons={techIcons} CzyGithub={CzyGithub} />
        </div>
    </div>
  )
}

export default SekcjaPrzepisy
