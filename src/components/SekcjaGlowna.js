import React from 'react'
import SekcjaOrbit from './SekcjaOrbit'
import SekcjaAW from './SekcjaAW'
import SekcjaPrzepisy from './SekcjaPrzepisy'
import SekcjaPortfolio from './SekcjaPortfolio'
import Edukacja from './SekcjaEdukacja'
import SekcjaUmiejNarz from './SekcjaUmiejNarz'
import SekcjaFormularz from './SekcjaFormularz'

const SekcjaGlowna = () => {
  return (
    <div className='SekcjaGlowna'>
        <div className='Witam'>
            Witam w moim Portfolio!
        </div>
        <SekcjaOrbit/>
        <div id='ProjektyLink' className='Lapacz'></div>
        <div className='Przewin'>
            <div className='Wdol'>PRZEWIŃ W DÓŁ <span className='StrzalkaDol'>&#8595;</span></div>
            <div className='LiniaDol'></div>
        </div>
        <div className='Sekcja IntersekcjaPrawa'>
            <div className='PrzerywanaSekcji'></div>
            <div className='TytulSekcji'>PROJEKTY</div>
            <div className='PrzerywanaSekcji'></div>
        </div>
        <SekcjaAW/> 
        <SekcjaPrzepisy/> 
        <SekcjaPortfolio/>
        <Edukacja/>
        <SekcjaUmiejNarz/>
        <SekcjaFormularz/>
    </div>
  )
}

export default SekcjaGlowna
