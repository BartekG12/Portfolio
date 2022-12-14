import './App.css';
import React, { useEffect } from 'react'
import textFit from 'textfit'

import Naglowek from './components/Naglowek'
import SekcjaGlowna from './components/SekcjaGlowna'
import PasekKontaktu from './components/PasekKontaktu'


import LiniaIcon from './img/zdjęcia/lSekcji.png'
import LiniaDrugaIcon from './img/zdjęcia/lSekcjiDwa.png'
import RamkaIcon from './img/zdjęcia/ramkaDwa.png'
import Test from './img/zdjęcia/test.jpg'

import BOne from './img/zdjęcia/borderOne.png'
import Btwo from './img/zdjęcia/borderTwo.png'
import SecBo from './img/zdjęcia/sectionBorder.png'


function App() {
  function mojTextFit() {
    let WybraneSekcjeTekstu = document.querySelectorAll(".KontrolaTekstu");
    if (window.screen.width > 849.9) {
      WybraneSekcjeTekstu.forEach((sekcja) => {
        textFit(sekcja)
      })
    }
  }
  function mojResize() {
    window.location.reload(false)
    mojTextFit()
  }
  useEffect(() => {
    mojTextFit()
    const wysuwaneElementy = document.querySelectorAll(".IntersekcjaLewa, .IntersekcjaPrawa")
    const obserwator = new IntersectionObserver(elementy => {
      elementy.forEach(element => {
        element.target.classList.toggle("Odslonieta", element.isIntersecting)
      })
    }, {
      threshold: .25,
    })
    wysuwaneElementy.forEach(element => {
      obserwator.observe(element)
    })
    
  }, []);
  window.addEventListener('resize', mojResize)

  return (
    <div className="App">
      <Naglowek/>
      <div className='Zawartosc'>
        <PasekKontaktu id='PCKontakt'/>
        <SekcjaGlowna/>
      </div>
    </div>
  );
}

export default App;
