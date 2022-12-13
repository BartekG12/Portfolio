import React from 'react'

import AGH from '../img/zdjęcia/AGH.png'
import IS from '../img/zdjęcia/IS.jpg'

const SekcjaEdukacja = () => {
    return (
      <div id='Edukacja'>
        <div id='EduLink' className='Lapacz'></div>
        <div className='Sekcja IntersekcjaPrawa' >
            <div className='PrzerywanaSekcji'></div>
            <div className='TytulSekcji'>EDUKACJA</div>
            <div className='PrzerywanaSekcji'></div>
        </div>
        <div className='PojemnikEdukacja IntersekcjaPrawa'>
            <div className='PolowniczyLewa LewaAGH'>
                <div className='Podsekcja'>
                Akademia Górniczo-Hutnicza im. Stanisława Staszica w Krakowie
                01.02.2019 - 01.02.2022
                </div>
                <div className='Tekst KontrolaTekstu'>
                Nowoczesny uniwersytet ukierunkowany na tworzenie innowacyjnych technologii i jedna z najlepszych i najbardziej renomowanych polskich uczelni.
                Od lat zajmuje czołowe miejsca w rankingach szkół wyższych.
                Wiele zawdzęczam kilku niezwykłym reprezantantom grona pedagogicznego AGH. Pomogli mi opanować poszczególne umiejętności oraz nauczyli właściwego podejścia do pracy i pasji.
                </div>
            </div>
            <div className='PolowniczyPrawa PrawaAGH'>
                <img className='Img AGH' src={AGH} alt='AGH' />
            </div>
        </div>
  
        <div className='PojemnikEdukacja PojemnikIS PolPojOdstep IntersekcjaLewa'>
          <div className='PolowniczyLewa LewaIS'>
            <img className='Img' src={IS} alt='IS' />
          </div>
          <div className='PolowniczyPrawa PrawaIS'>
              <div className='Podsekcja'>
              Informatyka społeczna
              </div>
              <div className='Tekst KontrolaTekstu'>    
                Spośród wielu kierunków na przeróżnych uczelniach, to właśnie informatyka społeczna wydała mi się najlepszym wyborem do przyszłej pracy jako web developer.
                Nauczyłem się tu nie tylko programować i liczyć, ale też w badać, projektować i tworzyć rozwiązania z nastawieniem na doświadczenia użytkowników.
              </div>
          </div>
        </div>
      </div>
    )
}

export default SekcjaEdukacja
