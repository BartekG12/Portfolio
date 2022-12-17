import './App.css';
import React, { useEffect } from 'react'
import textFit from 'textfit'

import Naglowek from './components/Naglowek'
import SekcjaGlowna from './components/SekcjaGlowna'
import PasekKontaktu from './components/PasekKontaktu'

function App() {
  let szerokosc = 0
  function mojTextFit() {
    let WybraneSekcjeTekstu = document.querySelectorAll(".KontrolaTekstu");
    if (window.screen.width > 849.9) {
      WybraneSekcjeTekstu.forEach((sekcja) => {
        textFit(sekcja)
      })
    }
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
  window.addEventListener('resize', mojTextFit)

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
